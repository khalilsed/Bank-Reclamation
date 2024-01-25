const express = require('express')
const { getDb, connectToDb } = require('./db')
const { ObjectId } = require('mongodb')

const cors = require('cors');
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
    .find({ status: 'T' })  // Assuming 'status' is the field that marks the status of the reclamation
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
    .countDocuments({ status: 'T' })  // Assuming 'status' is the field that marks the status of the reclamation
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
    .find({ status: 'A' })  // Assuming 'status' is the field that marks the status of the reclamation
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
    .countDocuments({ status: 'A' })  // Assuming 'status' is the field that marks the status of the reclamation
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
    .find({ status: 'R' })  // Assuming 'status' is the field that marks the status of the reclamation
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
    .countDocuments({ status: 'R' })  // Assuming 'status' is the field that marks the status of the reclamation
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