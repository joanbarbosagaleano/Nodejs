const express= require("express");
const paht=require('path')
//llamar a boyparser
const bodyparser=require("body-parser");

//importar rutas
const homeRuta=require("./routes/home");
const homeautos=require("./routes/autoshome");

//crear app en express
const app=express();

//llamar version
const {api_version}=require("./config");
const { newauto } = require("./controller/homeController");

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

//cargar archivos estaticos

//reconocimiento de views
app.set('view engine','pug');

//añadir carpetas
app.set('views',paht.join(__dirname,'./views'))


// rutas basicas
app.use(`/api/${api_version}`,homeRuta); //indispensables este tipo de comillas invertidas
app.use(`/`,homeautos);
module.exports=app;

//http://localhost:4000/api/v1/inicio asi quedaria la url

//app.use(`/api/${api_version}`,newauto);