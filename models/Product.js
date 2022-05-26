const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
    nombre: {type:String,required:true},
    price: {type:Number,required:true},
},{versionKey:false})

const ProductModel = mongoose.model('Product',ProductSchema)

module.exports = ProductModel