const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
    habit: {
        type: String,
        required: true,
        unique: true
    }, dates: [],
        isDone: []
    , favorite: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

const Habit = mongoose.model('Habit', habitSchema);

module.exports = Habit;