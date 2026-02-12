import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    conversation:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Conversation',
        required:true,

    },

    sender:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,

    },

    reciver:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,

    },

    content:{
        type:String,
        ref:'Conversation',
        required:true,

    },

    imageOrVideoUrl:{
        type:String,
    },

    contentType:{
        type:String,
        enum:['image', 'video', 'text'],
    },

    reations:[
        {
            user:{
                type:mongoose.Schema.Types.ObjectId,
                ref:'User',
            },
            emoji:String,
        },
    ],

    messageStatus:{
        type:String,
        default:'send'
    }

}, { timestamps:true})

const Message = mongoose.model('Message', messageSchema);
model.exports = Message;
