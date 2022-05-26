const express = require('express')
const app = express()

//Invocamos a la conexion para la BD
const conexion = require('./database/db')
conexion.once('open',()=>console.log('Conexión exitosa a Mongo DB'))
conexion.on('error',()=>console.log('El error de conexion es: '+error))

//Plantilla Libreria AdminBro
const AdminBro = require('admin-bro')
const expressAdminBro = require('@admin-bro/express')
const mongooseAdminBro = require('@admin-bro/mongoose')

//Modelos
const User = require('./models/User')
const Product = require('./models/Product')

AdminBro.registerAdapter(mongooseAdminBro)
const AdminBroOptions = {resources: [User,Product]}

const adminBro = new AdminBro(AdminBroOptions)
const router = expressAdminBro.buildRouter(adminBro)
app.use(adminBro.options.rootPath, router)


app.get('/admin',(req,res)=>{
    res.send('Dashboard con Node JS')
})

app.listen(9191,()=>{
    console.log('¡Server UP! en http://localhost:9191')
})