// Importaciones para hacer funcionar el express
const express = require('express');
// Importaciones para conectar el express con la API
const app = express();

// Rutas de las tablas
const usersRouter = require('./routes/users');
const moviesRouter = require('./routes/movies');
const ordersRouter = require('./routes/orders');



// Numero de puerto
const PORT = 3000;

const cors = require('./middleware/cors');
app.use(cors);

// Los backstreet boys
app.use(cors);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Conectores con la API y base de datos o el endpoint 
app.use('/users', usersRouter);
app.use('/movies', moviesRouter);
app.get('/movies/title/:showTitle');
app.use('/orders', ordersRouter);

app.listen(PORT, () => console.log('server running on port ' + PORT))