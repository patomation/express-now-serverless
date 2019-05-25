const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: String,
    password: String,
})

userSchema.methods.sayHello = function () {
    return `Hello: ${this.username}`
}

module.exports = userSchema
