const express = require("express");

const router = express.Router();

const Trajet = require("../models/Trajet");

const isAuth = require("../middleware/passport");

// const {addTrajetRules,validation}=require('../middleware/validator');

// publier trajet

router.post("/addTrajet", isAuth(), async (req, res) => {
  try {
    const newTrajet = await new Trajet({ ...req.body, clientId: req.user.id });
    const result = await newTrajet.save();
    res.send({ trajet: result, msg: "trajet added successfully" });
  } catch (error) {
    console.log(error);
  }
});

// get trajet of user
// { clientId: req.user.id }
router.get("/getTrajet", isAuth(), async (req, res) => {
  try {
    let result = await Trajet.find({
      clientId: req.user.id,
    }).populate("clientId");
    res.send({ trajet: result, msg: "all trajet is found suscessfully" });
  } catch (error) {
    console.log(error);
  }
});

// get allllllllllllllllll trajet of userssssssssssssssss
// { clientId: req.user.id }
router.post("/getAllTrajet", async (req, res) => {
  // console.log({ ...req.body });
  try {
    let result = await Trajet.find({ ...req.body });
    res.send({ trajet: result, msg: "all trajet is found suscessfully" });
  } catch (error) {
    console.log(error);
  }
});

// delete trajet of user

router.delete("/deleteTrajet/:id",  async (req, res) => {
  try {
    let result = await Trajet.findByIdAndDelete(req.params.id);
    res.send({ trajet: result, msg: "trajet are deleted suscessfully" });
  } catch (error) {
    console.log(error);
  }
});

// delete all trajets
router.delete("/deletetrajetss", async (req, res) => {
  try {
    let result = await Trajet.deleteMany();
    return res.send({ msg: "tajetss is deleted suscessfully" });
  } catch (error) {
    console.log(error); 
  }
});

module.exports = router; 
