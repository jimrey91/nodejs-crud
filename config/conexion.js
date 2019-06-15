let mongoose = require('mongoose');
let uri = 'mongodb+srv://dbUser:<password>@cluster0-awfjp.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(uri, {useNewUrlParser: true});
//'mongodb://localhost:27017/crud'
module.exports = mongoose;