import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    phoneNumber:{
        type:String,
        unique: true,
        sparse:true,
    },

    phoneSuffix:{
        type:String,
        unique:false,
    },

    userName:{
        type:String,
    },

    email:{
        type:String,
        lowercase:true,
        trim:true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },

    emailOtp:{
        type:String,
    },

    otpExpire:{
        type:Date,
    },

    profilePicture:{
        type:String,
    },

    about:{
        type:String,
    },

    lastSeen:{
        type:Date,
    },

    isOnline:{
        type:Boolean,
        default:false,
    },

    isVerified:{
        type:Boolean,
        default:false,
    },

    agreed:{
        type:Boolean,
        default:false,
    }
}, {timestamps:true});

const User = mongoose.model('User', userSchema);
model.exports = User;