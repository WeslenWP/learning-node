const express = require("express");

const userRoute = require('./routes/userRoute');

const app = express();

app.use(express.urlencoded({ extended: false }));

userRoute(app);

app.get('/', (req, res) => res.send('Ola Mundo'));

app.listen(3000, () => console.log("Rodando"));