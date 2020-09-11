const express = require("express");

let router = express.Router();

let objectID = require("mongoose").Types.ObjectId;

let {PostMessage} = require("../models/postMessage");
const { request, response } = require("express");
const e = require("express");

router.get("/", (request,response)=>{
    PostMessage.find({}, (err,data)=>{
        if(!err){
            response.json(data)
        } else{
            console.log(err)
        }
    })
})

router.post("/", (request,response)=>{
    let newRecord = new PostMessage({
        title: request.body.title,
        message: request.body.message
    })
    newRecord.save((err,data)=>{
        if(!err){
            console.log(data)
            response.json(data)
        } else{
            console.log(err)
        }
    })
})


router.put("/:id", (request,response)=>{
    if(objectID.isValid(request.params.id)){
        let updatedRecord = {
            title: request.body.title,
            message: request.body.message
        }

        PostMessage.findByIdAndUpdate(request.params.id, {$set: updatedRecord}, {new:true} , (err,data)=>{
            if(!err){
                response.json({data: data, message:"updated successfully"})
            } else{
                response.send("err while updating")
            }
        })
    }else{
        response.status(400).send("no data with given id: ".request.params.id)
    }

})

router.delete("/:id", (request,response)=>{
    if(objectID.isValid(request.params.id)){
        PostMessage.findByIdAndRemove(request.params.id, (err,data)=>{
            if(!err){
                response.send("deleted succesfully")
            }else{
                response.send("err while deleting")
            }
        })
    }else{
        response.status(400).send("no data with given id: ".request.params.id)
    }
})

module.exports = router;