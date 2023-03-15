const mongoose=require('mongoose');

const schema=mongoose.Schema

const voitureSchema=new schema({
    nomvoiture:{
        type:String,
        required:true,
    },
   
    clientId:{
        type:mongoose.Schema.ObjectId,
        ref:'user',
    },

      
   
})

module.exports=mongoose.model('voiture',voitureSchema)