const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../Models/users');


const express = require('express');
const verifyUserCredentials = require('../Middleware/auth.middleware');
const router = express.Router();

// Route de connexion
router.post('/login', verifyUserCredentials, (req, res) => {
    // La vérification des identifiants a réussi, et le jeton est disponible dans res.locals.token
    res.status(200).json({ token: res.locals.token });
});

module.exports = router;
