const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }, dates: [{
        date: String,
        isDone: String
    }], favorite: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

const Habit = mongoose.model('Habit', habitSchema);

module.exports = Habit;