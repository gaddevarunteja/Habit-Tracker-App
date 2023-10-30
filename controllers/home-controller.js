const Habit = require('../models/habit');

function getOneWeekDate() {
    let week = [];
    for (let i = 0; i < 7; i++) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        let mm = d.getMonth() + 1;
        if (mm < 10) mm = '0' + mm;
        let dd = d.getDate();
        if (dd < 10) dd = '0' + dd;
        const yyyy = d.getFullYear();
        week.unshift(dd + '/' + mm + '/' + yyyy)
    }
    return week;
}

module.exports.index = async (req, res) => { 
    try {
        let habits = await Habit.find({});
        return res.render('home', {
            title: "Home",
            habits: habits,
            weeklyDate: await getOneWeekDate()
        });
    } catch(err) {
        console.log(`Error: ${err}`);
        return;
    }
};