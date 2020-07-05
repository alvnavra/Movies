const jwt = require('jsonwebtoken');
const { User, Token } = require('../models');

const auth = async(req, res, next) => {
    try {
        const token = req.headers.authorization;
        const payload = jwt.verify(token, 'david-cocaine');
        const user = await User.findByPk(payload.id);
        const tokenFound = await Token.findOne({ 
            where: {
                token: token,
                UserId: payload.id,
                revoked: false
            }
        })
        if (!user || !tokenFound) {
            return res.status(401).send({ message: 'No estas autorizado para dicha acción, bastardo.'})
        }
        req.user = user;
        next()
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: '¡NO ESTAS AUTORIZADO!', error})
    }
}

module.exports = auth;