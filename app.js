const express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const cors = require('cors');
var routeUser = require('./routes/userRoute');
require('./models/userModel');

const uri = "mongodb+srv://dbJohan:dbJohan@cluster0.vesik.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


const connectDB = async() => {
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("db connected");
}
connectDB();

const app = express();
app.use(express.json());

app.use(cors());
app.use(bodyParser.json());
routeUser(app);

const port = process.env.PORT || 3001;


app.get('/', (req, res) => {
    res.send('<h1>helloooo</h1>')
})



app.listen(port, () => console.log('listening on port ' + port));