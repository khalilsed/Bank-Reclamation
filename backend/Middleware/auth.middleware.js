const jwt = require('jsonwebtoken');
const User = require('../Models/users');

async function verifyUserCredentials(req, res, next) {
    const { email, password } = req.body;

    try {
        // Trouver l'utilisateur par l'adresse e-mail dans la base de données
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: 'Utilisateur inexistant ' });
        }

        // Vérifier le mot de passe
        const isPasswordMatch = await user.comparePassword(password);

        if (!isPasswordMatch) {
            return res.status(401).json({ message: 'Identifiants incorrects bbbbbb' });
        }

        // Créer un jeton JWT pour l'authentification
        const token = jwt.sign({ userId: user._id, email: user.email }, 'your-secret-key', { expiresIn: '1h' });

        // Ajouter le jeton à la réponse
        res.locals.token = token;
        

        next();
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur interne du serveur' });
    }
}

module.exports = verifyUserCredentials;
