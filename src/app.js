const express = require('express');
require("../src/db/conn");
const MensRanking = require("../src/models/mens");
const router = require("../src/routers/men");


const app = express()
const port = process.env.PORT || 3000

app.use(express.json());
app.use(router);




app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port port!`))