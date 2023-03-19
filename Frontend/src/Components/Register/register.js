import React, {useState} from "react"
import "./register.css"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

const Register = () => {

    const navigate = useNavigate();
    const[User,setUser]=useState({
        name:"",
        email:"",
        Age:0,
        phone:0,
        address:"",
        password:"",
        reEnteredPassword:""
    })
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setUser({
            ...User,
            [name]:value
        })

    }
    const register = ()=>{
         const {name,email,password,reEnteredPassword} =User
         if(name && email && password && reEnteredPassword && password===reEnteredPassword){
            alert("Posted")
            axios.post("http://localhost:9000/register",User).then(()=>{
                // console.log(res)
                navigate("/login")
            })
         }
         else{
            alert("Invalid details")
         }
    }

    return (
        <div className="backimage" style={{ backgroundAttachment:'fixed',opacity:'1',display:'flex',justifyContent:'center'}} >
        <div className="register">
            <h1>Register</h1>
            <input type="text" name="name" value={User.name} onChange={handleChange} placeholder="Your Name" />
            <input type="email" name="email" value={User.email} onChange={handleChange} placeholder="Your Email" />
            <input type="number" name="age" value={User.age} onChange={handleChange} placeholder="Your Age" />
            <input type="number" name="phone" onChange={handleChange} placeholder="Your mobile Number" />
            <input type="text" name="address" value={User.address} onChange={handleChange} placeholder="Your Address" />
          <input  type="password" name="password" value={User.password} onChange={handleChange} placeholder="Your Password" />
          <input  type="password" name="reEnteredPassword" value={User.reEnteredPassword} onChange={handleChange} placeholder="Re-enter Password" />
          <div className="button" onClick={register} >Register</div>
          <div>or</div>
          <div className="button" onClick={()=>navigate("/login")} >Login</div>
        </div>
        </div>
    )
}

export default Register