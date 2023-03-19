import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../App";
import 'bootstrap/dist/css/bootstrap.min.css';


const Login = () => {

  const { setLoginUser } = useContext(AppContext);
  const navigate = useNavigate();
  const [User, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...User,
      [name]: value,
    });
  };
  const login = () => {
    axios.post("http://localhost:9000/login", User) 
    .then(res => {
      alert(res.data.message);
      setLoginUser(res.data.user_data)
      navigate("/");
    })
  }
   


  return (
   

<section className="vh-100 login" style={{ backgroundAttachment:'fixed',opacity:'1',display:'flex',justifyContent:'center'}}>
<div className="container py-5 h-100">
  <div className="row d-flex justify-content-center align-items-center h-100">
    <div className="col col-xl-10">
      <div className="card" style={{borderRadius: '1rem',opacity:'0.7',backgroundColor:'Background'}}>
        <div className="row g-0">
          <div className="col-md-6 col-lg-7 d-flex align-items-center">
            <div className="card-body p-4 p-lg-5 text-black">

              <form>

                <div className="d-flex align-items-center mb-3 pb-1">
                  <i className="fas fa-cubes fa-2x me-3" style={{color: '#ff6219'}}></i>
                  <span className="h1 fw-bold mb-0"> My Logo </span>
                </div>


                <div className="form-outline mb-4">
                  <input type="email" name="email" value={User.email} onChange={handleChange} placeholder="Enter your Email" id="form2Example17" className="form-control form-control-lg" />
                  <label className="form-label" htmlhtmlFor="form2Example17">Email address</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="password"  name="password" value={User.password} onChange={handleChange} placeholder="Enter your password" id="form2Example27" className="form-control form-control-lg" />
                  <label className="form-label" htmlhtmlFor="form2Example27">Password</label>
                </div>

                <div className="pt-1 mb-4">
                  <button className="btn btn-dark btn-lg btn-block button" onClick={login} type="button">Login</button>
                </div>

                <p className="mb-5 pb-lg-2 button" onClick={() => navigate("/register")} style={{color: '#393f81'}}>Don't have an account? <a href="#!"
                    style={{color: '#393f81'}}>Register here</a></p>
               
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</section>
   


  );
};

export default Login;
