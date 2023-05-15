const express=require("express")

const api=express.Router(); // establever una ruta

//controlador import
const homeController=require("../controller/homeController");




//autos
api.get("/autos",homeController.Carsrouter);

//post
api.post("/newauto",homeController.newauto);

//delete
api.get("/newauto/:id",homeController.deleteauto);

//llamado a .pug
api.get("/pug",homeController.Pugviews);



module.exports=api;