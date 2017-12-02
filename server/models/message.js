const mongoose = require('mongoose');
const  Schema = mongoose.Schema;

const messageSchema = new Schema({
    name:String,
    phone:String,
    email:String,
    mess:String
});
module.exports = mongoose.model('message',messageSchema,'messages');