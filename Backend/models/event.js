const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
Name:{
    type:String,
    required:true,
},
Email:{
    type:String,
    required:true,
},
EventName:{
    type: String,
    required:true,
},
Date:{
    type: String,
    required: true,
},
Location:{
    type: String,
    required: true,
}
})
module.exports = mongoose.model("Event", eventSchema , "events");