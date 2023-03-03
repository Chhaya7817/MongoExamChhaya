const mongoose = require('mongoose');
const Article = require('./models/product');


mongoose.connect('mongodb://localhost:27017/News-app')
    .then(() => console.log('DB Connected'))
    .catch((err) => console.log(err));


const articles = [
    {
        name: 'Ukrain War 1 in ',
        date: 22/2/2020,
        desc: "between ukrain snd russia"
    },
    
    {
        name: ' rat in the maze',
        date: 12/10/2022,
        desc: "stuck in the maze"
    },
    {
        name: 'New Schemes',
        date: 25/10/2007,
        desc: "Sukanya Yojna"
    }
];



Article.insertMany(articles)
    .then(() => {
        console.log('Articles Seeded');
    });



