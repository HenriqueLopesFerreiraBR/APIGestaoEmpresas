const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const cors = require('cors')
const {verifyConnect} = require('./src/database/db')


const IndexRoutes = require('./src/routes/index')


const port = 3005


// Middleware para parsear JSON
app.use(bodyParser.json());

// Middleware para parsear JSON
app.use(cors());


verifyConnect();

app.use("/api",IndexRoutes)

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))