const Habit = require('../models/habit');

function getTodayDate() {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    return day + "/" + month + "/" + year;
}

module.exports.createHabit = async (req, res) => {
    let habitName = req.body.habit;
    if(!habitName) {
        return res.redirect('back');
    }
    let habitExist = await Habit.findOne({habit: habitName});
    if(habitExist) { 
        console.log('Habit already exist ');
        return res.redirect('back'); 
    }
    let habit = await Habit.create({habit: req.body.habit, dates: {date: await getTodayDate(), isDone: "none"}});
    habit.save();
    let habits = await Habit.find({});
    return res.render('home', {
        habits: habits
    });
};

module.exports.favoriteHabit = async (req, res) => {

};

module.exports.destroyHabit = async (req, res) => {

};

module.exports.statusUpdate = async (req, res) => {

};