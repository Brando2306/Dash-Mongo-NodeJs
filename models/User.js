const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    nombre:String,
    edad:{type:Number,min:18,index:true},
    pais:String
},{versionKey:false})

const PersonaModel = mongoose.model('User',UserSchema)

module.exports = PersonaModel