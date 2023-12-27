const express = require('express')
const { getDb, connectToDb } = require('./db')
const { ObjectId } = require('mongodb')

// init app & middleware
const app = express()
app.use(express.json())

// db connection
let db

connectToDb((err) => {
  if(!err){
    app.listen('3000', () => {
      console.log('app listening on port 3000')
    })
    db = getDb()
  }
})

// routes
app.get('/Reclamations', (req, res) => {
  let Reclamations = []

  db.collection('Reclamations')
    .find()
    .forEach(reclam => Reclamations.push(reclam))
    .then(() => {
      res.status(200).json(Reclamations)
    })
    .catch(() => {
      res.status(500).json({error: 'Could not fetch the documents'})
    })
})

app.get('/Reclamations/:id', (req, res) => {

  if (ObjectId.isValid(req.params.id)) {

    db.collection('Reclamations')
      .findOne({_id: new ObjectId(req.params.id)})
      .then(doc => {
        res.status(200).json(doc)
      })
      .catch(err => {
        res.status(500).json({error: 'Could not fetch the document'})
      })
      
  } else {
    res.status(500).json({error: 'Could not fetch the document'})
  }

})
// --------------------------------------------------------------------------AJOUT D'UNE RECLAMATIONS !
// app.post('/Reclamations', (req, res) => {
//   const reclam = req.body

//   db.collection('Reclamations')
//     .insertOne(reclam)
//     .then(result => {
//       res.status(201).json(result)
//     })
//     .catch(err => {
//       res.status(500).json({err: 'Could not create new document'})
//     })
// })

// app.delete('/Reclamations/:id', (req, res) => {

//   if (ObjectId.isValid(req.params.id)) {

//   db.collection('Reclamations')
//     .deleteOne({ _id: new ObjectId(req.params.id) })
//     .then(result => {
//       res.status(200).json(result)
//     })
//     .catch(err => {
//       res.status(500).json({error: 'Could not delete document'})
//     })

//   } else {
//     res.status(500).json({error: 'Could not delete document'})
//   }
// })