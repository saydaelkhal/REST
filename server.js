const express= require ('express')
const app=express()
const mongoose= require ('mongoose')
const dotenv=require('dotenv')
dotenv.config()

//connecting to the database
mongoose.connect(process.env.MONGO_URI).then (console.log("data base connected")).catch((err)=> console.log(err))
const port=process.env.PORT

app.use(express.json())
app.use('/api',require("./routes/contactRoutes"))

app.listen(port,()=>console.log("server running on port:",port))