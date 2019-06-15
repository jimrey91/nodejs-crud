let mongoose = require('mongoose');
let uri = 'mongodb+srv://dbUser:test@cluster0-awfjp.mongodb.net/crud?retryWrites=true&w=majority'

mongoose.connect(uri, {useNewUrlParser: true});
//'mongodb://localhost:27017/crud'
module.exports = mongoose;