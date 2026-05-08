const mongoose = require('mongoose');

const PlanEventsSchema = new mongoose.Schema({
name:{
    type:String,
    required:true,
},
email:{
    type:String,
    required:true,
},
eventName:{
    type: String,
    required:true,
},
date:{
    type:Date,
    required: true,
},
location:{
    type: String,
    required: true,
}
})
module.exports = mongoose.model("Events", PlanEventsSchema)