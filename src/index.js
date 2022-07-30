const express = require('express');
const morgan = require('morgan');
const app = express();
const port = ('3000');


app.use(morgan('dev'));
app.use(express.json());

app.use(require('./routers/router'));

app.listen(port,() => {
    console.log(`CORRIENDO POR EL PUERTO ${port}`);
});

