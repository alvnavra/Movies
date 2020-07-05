const router = require('express').Router();
// Conector con las funciones
const OrderController = require('../controllers/OrderControllers');
// Conector con las rutas de URL y funciones
router.post('/', OrderController.createUser);
router.get('/:user_id',OrderController.findOrders)
// Exportador 
module.exports = router;