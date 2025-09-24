const userDetailmodel = require("../models/StudentInfor");

//register the student
exports.UserRegister = async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    if (username && email && password) {
      const user = await userDetailmodel.findOne({ email: email });
      if (!user) {
        const userdata = await userDetailmodel.create({
          username: username,
          email: email,
          password: password,
        });

        console.log(userdata);
        res.status(200).json({ message: "Successfully Registered." });
      }
      else{
         res.status(400).json({ message: `${email} is alreay Exists.Try another Email to Login` });
      }
    } else {
      res.status(400).json({ message: "Some Informations is not provided" });
    }
  } catch (error) {
    res
      .status(400)
      .json({ message: `Unsuccessfull Registration :${error.message}` });
  }
};

//userLogin

exports.UserLogin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    if (email && password) {
      const user = await userDetailmodel.findOne({ email: email });
      if (!user) {
        res.status(500).json({ message: "Email is Invalid" });
      } else {
        const pass = user.password;
        if (pass === password) {
          res.status(200).json({ message: "Successfuly LoggedIn" });
        } else {
          res.status(400).json({ message: "Password Invalid" });
        }
      }
    } else {
      res.status(400).json({ message: "Inavlid Credintials" });
    }
  } catch (error) {
    res.status(400).json({ message: "Unsuccessffull Loggedin " });
  }
};
