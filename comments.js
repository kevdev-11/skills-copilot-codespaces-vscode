//create web server
const express = require('express');
const app = express();
// const port = 3000;

//connect to database
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/notes-app', {useNewUrlParser: true, useUnifiedTopology: true});

//import model
const Comment = require('./models/comment');

//import body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//import path
const path = require('path');

//import express-handlebars
const exphbs = require('express-handlebars');

//import method-override
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

//setup template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//setup static folder
app.use(express.static(path.join(__dirname, 'public')));

//import routes
const notes = require('./routes/notes');
const comments = require('./routes/comments');
app.use('/notes', notes);
app.use('/comments', comments);

//listen to port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});