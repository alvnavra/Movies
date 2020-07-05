const { Order, User, Movie } = require('../models/')

const OrderController = {    
    createUser(req,res) {
        console.log(req.body)        
        Order.create(req.body)
            .then(order => {
                res.status(200).send(order)
            })
            .catch( error => {
                console.log(error)
                res.status(500).send({ message : 'No se puedo crear el pedido, por favor, vuelve a generar la petición.'})
            })
    },
    async findOrders(req,res){
        try{
            User.hasMany(Order, {foreignKey: 'UserId'}),
            Order.belongsTo(User,{foreignKey:'UserId'})

            Movie.hasMany(Order, {foreignKey: 'MovieId'}),
            Order.belongsTo(Movie,{foreignKey:'MovieId'})

            console.log(req.params.user_id)
            const user_id  = req.params.user_id
            const orders = await Order.findAll(
                {
                    include: [{
                        model: User,
                        required: true
                       },
                       {
                           model:Movie,
                           required:true
                       }
                    ],
                    where:{
                        UserId:user_id
                    }
                }
            )
            if (orders === null){
                res.status(400).send({ message : 'Hubo un error en obtener la pelicula'});
            }
            res.status(200).send(orders);
        }
        catch{
            res.status(500).send({ message : 'Hubo un error en crear la petición.'})
        }

    }
}
module.exports = OrderController;