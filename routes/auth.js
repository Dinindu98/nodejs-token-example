const router = require('express').Router();
const User = require("../Modules/User");

//in here register means => in index.js api.use + authRoute
router.post('/register',async(req,res)=>{  //async - wait for the until data writingto the database
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    try{
        const saveUser = await user.save();
        res.send(saveUser);
    }catch(err){
        res.status(400).send(err);
        res.send(" this is fucking error");
    }
})

module.exports = router;