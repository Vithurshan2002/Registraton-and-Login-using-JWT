import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Dash = () => {

  const navigate=useNavigate();
  const Dashboardapicall = async () => {
    try {
      const res = await axios.get("http://localhost:4000/uni/dashboard", {
        withCredentials: true,
      });
      console.log(res);
      if(res.data.valid){
          navigate("/dashboard")
      }
      else{
        navigate("/login");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    Dashboardapicall();
  }, []);

  return <div>Dash</div>;
};

export default Dash;
