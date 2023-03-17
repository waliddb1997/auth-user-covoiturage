const mongoose = require("mongoose");

const schema = mongoose.Schema;

const trajetSchema = new schema({
  lieuDepart: {
    type: String,
    required: true,
  },
  lieuArrive:{
      type:String,
      required:true,
  },
  date:{
      type:Date,
      required:true,
  },
  heure:{
      type:String,
      required:true,
  },
  phone:{
      type:Number,
      required:true,
  },
  voiture:{
    type:String,
  },

  nbPlace:{
      type:Number,
      required:true,
   },

  prix:{
      type:String,
      required:true,

   },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"user",
  },
  // clientId: {
  //   type: String,
  // },
});

module.exports = mongoose.model("trajet", trajetSchema);
