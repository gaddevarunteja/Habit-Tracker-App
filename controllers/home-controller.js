const Habit = require('../models/habit');

module.exports.index = async (req, res) => { 
    let habits = await Habit.find({});
    return res.render('home', {
        title: "Home",
        habits: habits
    });
};