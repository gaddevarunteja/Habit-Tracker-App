const Habit = require('../models/habit');

async function getOneWeekDate() {
    let week = [];
    for (let i = 0; i < 7; i++) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        let mm = d.getMonth() + 1;
        if (mm < 10) mm = '0' + mm;
        let dd = d.getDate();
        if (dd < 10) dd = '0' + dd;
        const yyyy = d.getFullYear();
        week.push(dd + '/' + mm + '/' + yyyy)
    }
    return week;
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
    let habit = await Habit.create({habit: req.body.habit, 
            dates: await getOneWeekDate(), isDone: Array(7).fill("none")});
    await habit.save();
    return res.redirect('back');
};

module.exports.favoriteHabit = async (req, res) => {
    let habit_id = req.query.id;
    let habit = await Habit.findById(habit_id);
    habit.favorite = habit.favorite ? false : true;
    await habit.save();
    return res.redirect('back');
};

module.exports.destroyHabit = async (req, res) => {
    let habit_id = req.query.id;
    let habit = await Habit.findById(habit_id);
    await habit.deleteOne({habit: habit_id});
    return res.redirect('back');
};

module.exports.statusUpdate = async (req, res) => {
    let habit_id = req.query.id;
    let d = req.query.date;
    let habit = await Habit.findById(habit_id);
    let dates = habit.dates;
    let found = false;
    dates.map((item, index) => {
        if (item == d) {
            if (habit.isDone[index] === 'yes') {
                habit.isDone[index] = 'no';
            }
            else if (habit.isDone[index] === 'no') {
                habit.isDone[index] = 'none';
            }
            else if (habit.isDone[index] === 'none') {
                habit.isDone[index] = 'yes';
            }
            found = true;
        }
    });
    await habit.save();
    return res.redirect('back');  
};