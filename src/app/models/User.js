const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true, //let acc be unique
    },
    email:{
        type: String,
        required: true,
        unique: true, //let acc be unique
    },
    password:{
        type: String,
           },
    img:{
        type: String,
    },
    subscribers:{
        type: Number,
        default: 0, //
    },
    subscribedUser: {
        type: [String]
    },
    fromGoogle:{
        type: Boolean,
        default: false,
    }
},{timestamps: true}
)

module.exports = mongoose.model('User', UserSchema);