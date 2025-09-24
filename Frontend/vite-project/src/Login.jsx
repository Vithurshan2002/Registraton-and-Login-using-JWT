import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();
    if (email && password) {
      try {
        const user = await axios.post(
          "http://localhost:4000/uni/login",
          {
            email,
            password,
          },
          { withCredentials: true }
        );
        Swal.fire({
          title: "Good job!",
          text: "LoggedIn Succesfully",
          icon: "success",
        });
        navigate("/dashboard", { replace: true });
        console.log(user);
      } catch (error) {
        console.log(error.message);
        Swal.fire({
          title: "Sorry!",
          text: "LoginIn Failed",
          icon: "error",
        });
      }
    } else {
      console.log("Fill the Form correctly");
      Swal.fire({
        title: "Sorry!",
        text: "All the fields are Required to Fill",
        icon: "error",
      });
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="border-2 bg-green-900 p-4 py-5 text-white rounded-lg font-bold text-xl">
          <form onSubmit={handlesubmit}>
            <h1 className="text-3xl text-center py-5">Login</h1>
            <div>
              <div>Email</div>
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                  className="border bg-white text-black ps-2"
                  placeholder="Email"
                />
              </div>
            </div>
            <div>
              <div>Password</div>
              <div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
                  className="border bg-white text-black ps-2"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="flex justify-center">
              {" "}
              <button className="border cursor-pointer hover:bg-green-300 transition-all p-2 mt-5 rounded bg-white text-black ">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
