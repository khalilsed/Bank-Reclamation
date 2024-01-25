const express = require('express');
const mongoose = require('mongoose');
const loginModel = require('./Models/users');
const bodyParser = require('body-parser');
const verifyUserCredentials = require('./Middleware/auth.middleware');
const authRoutes = require('./Controllers/auth.controller');
const app = express();

// Middleware pour analyser le corps des requêtes
app.use(bodyParser.json());
app.use((err, req, res, next)=>{
const statusCode= err.status || 500;
const errorMessage= er.message || "Something went wrong";
return res.status(statusCode).json({
    success: false,
    status: statusCode,
    message: errorMessage,
    stack : err.stack
})
});

app.listen(9993, (err) => {
    if (err) {
        console.log("Error starting server:", err);
    } else {
        console.log("Server started on port 9993");
    }
});

mongoose.connect('mongodb://127.0.0.1:27017/BankReclam',{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Successfully connected to MongoDB");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });

// Routes
app.use('/auth', authRoutes);
    app.post('/ajout/login' , async(req,res) => {
        const loginObj = {
            email: "ssss@gml.com",
            password: "sahar"
        }
        try {
            const newUser = new loginModel(loginObj);
            const createdUser = await newUser.save();
            res.status(200).json({ createdUser });
        } catch (error) {
            console.error(error);
            res.status(400).json({ error: "Erreur lors de la sauvegarde de l'utilisateur" });
        }

    })

    app.post('/login', verifyUserCredentials, (req, res) => {
        // La vérification des identifiants a réussi, et le jeton est disponible dans res.locals.token
        res.status(200).json({ message: 'Login successful', token: res.locals.token });
    });

