const mongoose= require("mongoose");
const Schema=mongoose.Schema;

//moldeado a nuestra tabla del data base
const userschema= new Schema({
    nombre: String,
    cedula: {
        type:String,
        unique:true
    },
    active: Boolean,
});

module.exports=mongoose.model("user", userschema);