const router = require('express').Router();

router.post('/register',function(req,res){
    res.send('Register');
})

module.exports = router;