const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    email:{
        type: String,
        required:[true, 'Email is required'],
        unique: [true, 'Email already exists'],
        trim: true,
        lowercase: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address']
    },
    name:{
        type: String,
        required:[true, 'Name is required'],
        trim: true
    },
    password:{
        type: String,
        required:[true, 'Password is required'],
        minlength: [6, 'Password must be at least 6 characters long']
    }
})