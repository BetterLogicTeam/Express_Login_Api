const { mongoose } = require('mongoose')

const Schema =mongoose.Schema;

const Product=new Schema({
    image:{
        type:String,
        // required:true
    },
    price:{
        type:Number,
        // required:true
    },
    title:{
        type:String,
        // required:true
    },
    id:{
        type:Number
    }
})


const Usermodel=mongoose.model('Product',User)
module.exports=Usermodel;