
const express = require('express')
const cors=require('cors')
const bcrypt= require('bcrypt')
const mongoose= require('mongoose')
const bodyParser= require('body-parser')

const Event =require('./models/event')

const app = express()


 app.use(cors({
    origin:" http://localhost:5173",
}))
app.use(express.json())
app.use(bodyParser.json())

mongoose.connect('mongodb+srv://Outpro-India-db:Oi_data@cluster0.qbuv4hj.mongodb.net/eventDBs')
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err))

app.get("/", async (req, res) => {
    try {
        const data = await Event.find()
        res.json(data)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

app.post('/submit' , async (req,res) => {
    try{

    const { name, email, eventName, date, location } = req.body
    console.log("Incomming: ",req.body)
    
    if( !name || !email || !eventName || !date || !location ){
        return res.status(400).json({ message: "All Fields must be completed"})
    }   
            const newEvent = new Event({
                name,
                email,
                eventName, 
                date,
                location
            })

            await newEvent.save()

            console.log("Saving to DB")

            return res.status(200).json({message: "Event planned Sucessfully"})
    }
    catch(error){
        console.error("Error:", error)
        return res.status(500).json({message: "Error submitting form"})
    }
})

{/*mongoose
    .connect("mongodb://localhost:27017/eventDBs")
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log("MongoDB error: ", err));*/}

app.listen(3000, ()=>{
    console.log("Server Started on port 3000")
})