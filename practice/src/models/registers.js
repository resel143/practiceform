const mongoose = require("mongoose");

const regSchema = mongoose.Schema({
    songname:{
        type: String,
        required: true
    }
});

const Register = new mongoose.model("Register",regSchema);

module.exports = Register;