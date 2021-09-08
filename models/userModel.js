var Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
    username: String,
    address: String,
    phonenumber: String,
    sex: String
})