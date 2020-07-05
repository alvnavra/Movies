const router = require('express').Router();
// Conector con las funciones
const UserController = require('../controllers/UserControllers');
// Conectador con el autenficador
const auth = require('../middleware/auth');
// Conector con las rutas de URL y funciones
router.get('/', auth, UserController.getAll)
router.post('/signup', UserController.signup);
router.post('/login', UserController.login);
router.delete('/delete/:id', UserController.delete);
// Exportaciones
module.exports = router;