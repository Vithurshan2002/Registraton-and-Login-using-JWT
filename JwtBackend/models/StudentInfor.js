const mongoose=require('mongoose');

const studentSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }

},{
    timestamps:true,
})

const userDetailmodel=mongoose.model('userRegistraion',studentSchema);

module.exports=userDetailmodel;