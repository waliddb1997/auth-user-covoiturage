const mongoose=require('mongoose');

const schema=mongoose.Schema

const userSchema=new schema({
    name:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    anneenaissance:{
        type:String,
        required:true,
    },
    genre:{
        type:String,
        required:true,
    },
    
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    
    Profession:{
        type:String,
        default:"Non précisée",
    },
    marqueVoiture:{
        type:String,
        default:"Non précisée",
    },
    colorVoiture:{
        type:String,
        default:"Non précisée",
    },
    Climatiseur:{
        type:String,
        default:"Non précisée",
    },
    tabac:{
        type:String,
       default:"Non précisée",
    },

    voiture:{
        type:mongoose.Schema.ObjectId,
        ref:'voiture',
    },
    Trajet:{
        type:mongoose.Schema.ObjectId,
        ref:'Trajet',
    },

    // isActive :{
    //     type:Boolean,
    //     default: false,
    //    },
       
    // activationCode :{
    //     type:String,
        
    //    },
      
   Role :{
    type:String,
    default:'user',
    enum:['user','admin']
   }
})

module.exports=mongoose.model('user',userSchema)