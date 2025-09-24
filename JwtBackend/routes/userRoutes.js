const express = require("express");
const { UserRegister, UserLogin } = require("../Controllers/StudentInforController");
const router = express.Router();

router.post("/Register", UserRegister);
router.post("/login",UserLogin)

module.exports = router;
