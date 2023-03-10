const mongoose = require('mongoose');


const articleSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    
    date: {
        type:String,
        min: 0,
        default: 0
    },
    desc: {
        type: String,
        trim: true
    }
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;