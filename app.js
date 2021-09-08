const express = require('express');
var routeUser = require('./routes/userRoute');
var bodyParser = require('body-parser');
//var mongoose = require('mongoose');

const cors = require('cors');
const app = express();
app.use(express.json());

app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT || 3001;


routeUser(app);
app.get('/', (req, res) => {
    res.send('<h1>helloooo</h1>')
})


app.listen(port, () => console.log('listening on port ' + port));