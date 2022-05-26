const mongoose = require('mongoose')
const url = 'mongodb://localhost/base_adminbro'
mongoose.connect(url,{useNewUrlParser:false, useUnifiedTopology:true})
const conexion = mongoose.connection

module.exports = conexion