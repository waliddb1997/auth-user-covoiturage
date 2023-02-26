const express = require('express');

const router = express.Router(); 
const bcrypt = require('bcrypt');
const User=require('../models/User');
const jwt = require('jsonwebtoken');
const {loginRules,regiterRules,validation}=require('../middleware/validator');
const isAuth=require('../middleware/passport');





// router.get('/', (req, res) => {
//     res.send("hello world");


// });

//register route
router.post('/register', regiterRules(), validation, async (req, res) => {
    const { name, lastName, email, password } = req.body;
    try {
        const newUser = new User({ name, lastName, email, password});
        // chek if the email already exists
        const searchedUser = await User.findOne({ email });

        if (searchedUser) {
        return res.status(400).send({ message: 'Email already exists' });
        }

        //hash password
        const salt = 10
        const genSalt = await bcrypt.genSaltSync(salt);
        const hashedPassword = await bcrypt.hashSync(password, genSalt);
        console.log(hashedPassword)
        newUser.password = hashedPassword;

        //save the user
        const newUserToken = await newUser.save();
               // generate token
               const payload = {
                _id: newUserToken._id,
                name: newUserToken.name,
                
            }
            const token = await jwt.sign(payload, process.env.SecretOrkey,{expiresIn:3600});
        res.status(200).send({newUserToken, msg:"user is saved successfully", token:`Bearer ${token}`});
          
    } catch (error) {
        res.status(500).send("can not  save the user");

        
    }

});


//login route

router.post('/login', loginRules(), validation, async (req, res) => {
    const { email, password } = req.body;

    try {
        // find if the user exists
        const searchedUser=await User.findOne({ email });
        
        // if the email does not exists
        if(!searchedUser){
            return res.status(400).send({ message: 'bad Credential' });
        }
        // password are equal
        const match = await bcrypt.compare(password, searchedUser.password);
        
        if(!match){
            return res.status(400).send({ message: 'bad Credential' });
        }
        // create a token
        const payload = {
            _id: searchedUser._id,
            name: searchedUser.name,


        };
        const token = await jwt.sign(payload, process.env.SecretOrkey,{expiresIn:3600});
        

        // send the user
        res.status(200).send({user:searchedUser, msg:"user is logged in successfully", token:`Bearer ${token}`});

        




    } catch (error) {
        res.status(500).send({msg:"can not  get the user"});

    }
});



// router.get('/current',isAuth, async (req, res) => {
//     res.status(200).send({user:req.user});
    


// })
router.get('/current', isAuth(), async (req, res) => {
    res.status(200).send({user:req.user});
    
})






module.exports = router;