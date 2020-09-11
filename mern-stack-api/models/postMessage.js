const mongoose = require("mongoose");

let PostMessage = mongoose.model("PostMessage", {
    title: {type:String, required:true},
    message: {type:String}
})

module.exports = {PostMessage}