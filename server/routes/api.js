//import { MongoClient } from './C:/Users/Aman Raj/AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/mongodb';

const express = require('express');
const router =express.Router();
const mongoose= require('mongoose');
const message = require('../models/message');

const db="mongodb://molu:molu1234@ds125556.mlab.com:25556/molu"
mongoose.Promise =global.Promise;
//mongoose.createConnection(db,{useMongoClient:true});
mongoose.connect(db,function(err){
    if(err){
        console.error("Error!"+err);
      }
});

router.get('/messages',function(req,res){
    res.send('get request for all messages:');
    Message.find({})
    .exec(function(err, messages){
        if(err){
            console.log("error retriving messages:");
        }else 
        {
            res.json(messages);  
        }

    });
});
router.get('/messages/:id',function(req,res){
    res.send('get request single message:');
    message.find({})
    .exec(function(err,message){
        if(err){
            console.log("error retriving messages:");
        }else 
        {
            res.json(message);  
        }

    }); 
});

router.post('/message',function(req,res){
    console.log('post a message');
    var newMessage = new message();
        newMessage.name = req.body.name;
        newMessage.phone = req.body.phone;
        newMessage.email = req.body.email;
        newMessage.mess = req.body.mess;
        newMessage.save(function(err,insertedMessage){
            if(err){
                console.log('err sending message');
            }else{
                res.json(insertedMessage);
            }

        });

}); 

module.exports=router;