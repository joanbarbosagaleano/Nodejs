const mongoose= require("mongoose");
const Schema=mongoose.Schema;

//moldeado a nuestra tabla del data base
const userSchema= new Schema({
    modelo: String,
    marca: String,
    placa: {
        type:String,
        unique:true,
    },
    active: Boolean,
});

module.exports=mongoose.model("autos", userSchema);