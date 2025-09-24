const express = require("express");
const { UserRegister, UserLogin, AccessDashboard } = require("../Controllers/StudentInforController");
const { varifyuser } = require("../middlewares/JWTmiddleware");
const router = express.Router();

router.post("/Register", UserRegister);
router.post("/login",UserLogin)
router.get('/dashboard',varifyuser,AccessDashboard)

module.exports = router;
