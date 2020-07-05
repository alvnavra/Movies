const { User, Token } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const UserController = {
    // funcion para obetener todas las peliculas que las generamos con el req
    getAll (req, res) {
        User.findAll()
        // si las encuentra manda el objeto mediante el res
        .then(users => res.send(users))
        .catch(error => {
            console.error(error)
            res.status(500).send({ message:
            'Hubo un problema en crear el usuario' });
        })
    },
    // funcion para borrar peliculas de los usuarios, el async para el tiempo de respuesta asincrona
    async delete(req,res) {
        try {
            const { id } = req.params
            const user = await User.destroy({
                where : {
                    id : id
                }
            })
            res.status(200).send({ message : 'Te eliminaste, no te extrañaremos.'})
        } catch (error) {
            console.log(error)
            res.status(500).send({ message : 'Pon tus credenciales correctas'})
        }
    },
    // funcion de registrarse, incorporamos el bcrypt para usar el hash en las passwords.
    async signup(req, res) {
        try {
            const hash = await bcrypt.hash(req.body.password, 9); 
            req.body.password = hash;
            const user = await User.create(req.body);
            res.status(201).send(user);
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: 'No se creo el user porque eres hermoso' });
        }
    },
    // funcion para loguearse, usamos tmabien el async para una respuesta asincrona del servidor y el usuario
    async login(req,res) {
        try {
            console.log(req.body)
            const user = await User.findOne({
                where: {
                    email: req.body.email
                }
            });
            if(user)
            {
                console.log('usuario correcto')
                //Pequeña corrección. En el login, tenemos que contemplar la posibibilidad de que el usuario
                //no exista, y por tanto, no podamos comparar el password.
                // uso el isMatch con el await para verificar si los datos ingresados son correctos
                bcrypt.compare(req.body.password, user.password,(err, succ)=>{
                    // El await con isMatch da siempre incorrecto. Se utiliza el compare tal y como está en la documentación
                    if (!succ)
                    {
                        return res.status(500).send({
                            message: 'Login erroneo'
                        });            
                    }
                    const token = jwt.sign({ id: user.id }, 'pinilla-cocaine', { expiresIn: '1y' });
                    Token.create({ token, UserId: user.id, revoked: false });
                    res.send({
                        user,
                        token
                    })
    
                    
                });
            }
            else{
                throw new Error('Credenciales no son correctas')
            }
            
        } catch (error) {
            console.error(error);
            return res.status(500).send({
                message: 'Login erroneo'
            });
        }
    }
}

module.exports = UserController;