const User  = require('../models/user');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const router = require ('express').Router();



// --------------------register
router.post('/register', async(req,res)=>{
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    const user = new User({
        email: req.body.email,
        password: hashedPassword
    })

    const result = await user.save()
    const {password , ...data} = await result.toJSON()
    res.send(data)
})


// --------------------login
router.post('/login', async(req,res)=>{
    const user = await User.findOne({email: req.body.email})

    if(!user){
        return res.status(404).send({
            message: 'user not found'
        })
    }

    if(!await bcrypt.compare(req.body.password, user.password)){
        return res.status(400).send({
            message: 'invalid password'
        })
    }
//jwt
    const token = jwt.sign({_id: user._id}, 'secret')


    res.cookie('jwt',token,{
        httpOnly : true,
        maxAge: 24*60*60*1000 // one day login
    })

    res.send({
        token: token
    })
})

//token
router.get('/user',async(req,res)=>{
    try{
        cookie = req.cookies['jwt']
    
        const claims = jwt.verify(cookie, 'secret')
    
        if (!claims) {
            return res.status(401).send({
                message: 'unauthenticated'
            })
        }
    
        const user = await User.findOne({_id: claims._id})
        const {password , ...data} = await user.toJSON()
        res.send(data)
    }catch(e){
        return res.status(401).send({
            message: 'unauthenticated'
        })
    }
})
router.post('/logout', (req, res) => {
    res.cookie('jwt', '', {maxAge: 0})

    res.send({
        message: 'logout success'
    })
})
module.exports = router;
