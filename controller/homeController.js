const { models } = require("mongoose");
const autosdb=require("../models/autos")

exports.CarsHome=(err,req,res,next)=>{ //excepcion error con next
    console.error(err.stack);
    next();
    res.render("index");
};

const autos=[
    {
        modelo:"mazda3",
        precio: 25000000
    },
    {
        modelo:"renault v8",
        precio: 35000000
    },
    {
        modelo:"chevrolet captiva",
        precio: 50000000
    }
]
exports.Carsrouter=(req,res)=>{
    res.status(200).send(autos);
}
exports.mostrarautos=(req,res)=>{
    res.render("autos");
    
}
exports.Pugviews=(req,res)=>{
    res.render("index");
    
}
//post autos
exports.newauto= async(req,res)=>{
    const body=req.body;
    const carro= new autosdb(body)

    await carro.save((err, autoStored) => {
        if (err) {
            res.status(500).json({ code: 500, menssage: "Error servidor" });
        } else {
            if (!autoStored) {
                res.status(404).json({ code: 404, menssage: "Error al cargar los datos" });
            } else {
                res.status(200).json({ code: 200, menssage: "Archvo guardado con exito" });
            }
        }
    });

}
//delete autos
exports.deleteauto=(req,res)=>{
    try{ //error por bloque
        const {id}=req.params;
    
    autosdb.findByIdAndRemove(id, (err, autoStored) => {
        if (err) {
            res.status(500).json({ code: 500, menssage: "Error servidor" });
        } else {
            if (!autoStored) {
                res.status(404).json({ code: 404, menssage: "Error al cargar los datos" });
            } else {
                res.status(200).json({ code: 200, menssage: "Archvo a Sido eliminado con exito" });
            }
        }
    });

    }catch(error){
        throw new Error("problema con la base de datos")
        res.status(500).json({ code: 500, menssage: "Error servidor" });
    }
}

exports.Modelos=(req,res)=>{
    res.render("modelos");
}
