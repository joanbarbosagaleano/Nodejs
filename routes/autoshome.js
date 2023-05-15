const express=require("express")

const api=express.Router(); // establever una ruta

const homeController=require("../controller/homeController");


//inicio
//api.get("/inicio",homeController.CarsHome);
api.get("/inicio",homeController.Pugviews);

//autos
api.get("/autos",homeController.mostrarautos);
 
//models
api.get ("/modelos",homeController.Modelos);



module.exports=api;