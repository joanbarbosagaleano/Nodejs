const mongoose =require("mongoose");
const app =require("./app");
const port =process.env.PORT || 4000;
const {api_version,PORT_DB,IP_SERVER}=require("./config");

mongoose.connect(
    `mongodb://${IP_SERVER}:${PORT_DB}/autos`,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true,
        //useFindAndModify:false,
        //useCreateIndex:true,
        useNewUrlParser:true,
    },
    (err,res)=>{
        if(err){
            console.log("Error al conectar con la base de datos DB")
            throw err;
           // throw new Erro("Problema con la DB"); lanzar error
        } 
        else{
            console.log("La conexion a la DB es correcta");
        }
          
          app.listen(port, () =>{
            console.log("#########");
            console.log("API REST AUTOS");
            console.log("#########");
            console.log("#########");
            console.log(`http://${IP_SERVER}:${port}/api/${api_version}`);

          })    
    }
);