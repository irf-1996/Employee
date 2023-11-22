const mongoose=require('mongoose');
const emp=mongoose.Schema({
    name:String,
    designation:String, 
    location:String,  
    salary:Number
})
const data=mongoose.model('employees',emp);
module.exports=data