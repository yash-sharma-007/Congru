const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')

const app=express()
const port= 9000
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

mongoose.set('strictQuery', false);
const connectToMongo = async()=>{
  try{
    await mongoose.connect('mongodb+srv://yash__sharma:Ymongo2023@cluster0.ody7pjl.mongodb.net/myapp');
    console.log("Connected to mongoDB...");
  }
  catch(err){
    console.log("Failed to connect to mongoDB...",err);
  }
}

connectToMongo()


// User Schema to store user register user_data

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
    phone:Number,
    address:String,
    password:String
})

const User=new mongoose.model("USER",userSchema)


// My website routes

app.post("/login",async(req,res)=>{
  const {email,password}=req.body
  const user_data = await User.findOne({email:email})
   if(user_data){
    if(password===user_data.password){
          res.send({message:"Login successfully",user_data})

    }
    else{
      res.send({message:"Password didn't match" })
    }
   }
   else{
    res.send({message:"User Not Registered"})
   }
})

 app.post("/register", async (req,res)=>{
    const {name,email,age,phone,address,password}=req.body
   const user_data = await User.findOne({email:email})
   if(user_data){
    console.log("User already Registered")
    res.send({message:"User already Registered"})
   }
   else{
     const user= new User({
       name:name,
       email:email,
       age:age,
       phone:phone,
       address:address,
       password:password
     })
      user.save().then((e)=>{
       if(e){
         res.send(e)
       }
       else{
         res.send("My API Register")
       }
     })
   }
   
})






app.listen(port,()=>{
    console.log(`server started at localhost:${port}`)
})

