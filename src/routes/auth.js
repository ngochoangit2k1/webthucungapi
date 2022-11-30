
const express = require("express")
const {signup, signin, googleAuth, logout} = require("../app/controllers/auth")



const router = express.Router();
// create a user
router.post("/signup", signup)
// sign in 
router.post("/signin", signin)

// sign in with google
router.post("/google", googleAuth)

router.post("/logout", logout)


module.exports = router ;