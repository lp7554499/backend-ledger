const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    email:{
        type: String,
        required:[true, 'Email is required'],
        unique: true,
        trim,
        lowercase: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address']
    }
})