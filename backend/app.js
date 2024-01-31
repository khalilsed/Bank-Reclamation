const express = require('express')

const { getDb, connectToDb } = require('./db')
const { ObjectId } = require('mongodb')

const cors = require('cors');
//------------------------------------------------
const mongoose = require ('mongoose');
const cookieParser = require('cookie-parser')
//------------------------------------------------
const { form } = require("./lib/forms");
const { nodeMailer } = require('./lib/nodeMailer');
//--------------------------



const corsOptions ={
    origin:'http://localhost:4200', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

// init app & middleware
const app = express()
app.use(cors(corsOptions));

app.use(express.json())

//app.use(cors());


//------------------------------------------------
//connexion BD 
mongoose.connect('mongodb://127.0.0.1:27017/BankRecla');
const database = mongoose.connection

database.once('open', () => {
    console.log("database connected !");
})

database.on('error' , err => console.log(err))

app.use(cookieParser())
const routes = require('./routes/routes');

app.use('/api',routes)
//------------------------------------------------

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


//compter reclamation traités 
app.get('/ReclamationsTraite', (req, res) => {
  let treatedReclamations = [];

  db.collection('Reclamations')
    .find({ status: 'T' })  
    .forEach(reclam => treatedReclamations.push(reclam))
    .then(() => {
      res.status(200).json(treatedReclamations);
    })
    .catch(() => {
      res.status(500).json({ error: 'Could not fetch the treated reclamations' });
    });
});

app.get('/Reclamations/countTreated', (req, res) => {
  db.collection('Reclamations')
    .countDocuments({ status: 'T' })  
    .then(count => {
      res.status(200).json({ count });
    })
    .catch(err => {
      res.status(500).json({ error: 'Could not fetch the count of treated reclamations' });
    });
});


//compter reclamation en Attente 
app.get('/ReclamationsEnAttente', (req, res) => {
  let AttenteReclamations = [];

  db.collection('Reclamations')
    .find({ status: 'A' })  
    .forEach(reclam => AttenteReclamations.push(reclam))
    .then(() => {
      res.status(200).json(AttenteReclamations);
    })
    .catch(() => {
      res.status(500).json({ error: 'Could not fetch the Attente reclamations' });
    });
});

app.get('/Reclamations/countAttente', (req, res) => {
  db.collection('Reclamations')
    .countDocuments({ status: 'A' })  
    .then(count => {
      res.status(200).json({ count });
    })
    .catch(err => {
      res.status(500).json({ error: 'Could not fetch the count of Attente reclamations' });
    });
});


//compter reclamation Rejetes 
app.get('/ReclamationsRejete', (req, res) => {
  let RejectedReclamations = [];

  db.collection('Reclamations')
    .find({ status: 'R' })  
    .forEach(reclam => RejectedReclamations.push(reclam))
    .then(() => {
      res.status(200).json(RejectedReclamations);
    })
    .catch(() => {
      res.status(500).json({ error: 'Could not fetch the Rejected reclamations' });
    });
});

app.get('/Reclamations/countRejected', (req, res) => {
  db.collection('Reclamations')
    .countDocuments({ status: 'R' })  
    .then(count => {
      res.status(200).json({ count });
    })
    .catch(err => {
      res.status(500).json({ error: 'Could not fetch the count of Rejected reclamations' });
    });
});






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


app.put('/update/:id', async (req, res) => {
  const idReclam = req.params.id;

  try {
    const objectIdReclam = new ObjectId(idReclam);

    
    const result = await db.collection('Reclamations').updateOne({ _id: objectIdReclam }, {
      $set: {
        // 'nomClt': req.body.nomClt,
        'emailClt': req.body.emailClt,
        // 'telClt': req.body.telClt,
        // 'description': req.body.description,
        'status': req.body.status
      }
    });

    if (result.modifiedCount === 1) {
      res.status(200).json({ success: true, message: 'Réclamation mise à jour avec succès' });
      //--------------------------
      const mail = await nodeMailer(req.body.emailClt, "BNA - Reclamation", form());
      res.send(mail);
      // //--------------------------

    } else {
      res.status(404).json({ success: false, message: 'Réclamation non trouvée' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Erreur lors de la mise à jour de la réclamation' });
  }
});



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

// --------------------------------------------------------------------------SUPP D'UNE RECLAMATIONS !

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