const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');
const app= express();
const port = 3000;

app.set('view engine', 'handlebars');
app.engine('handlebars', engine({ extname: '.hbs', defaultLayout: false,layoutsDir: "views/layouts/"}));

app.use(express.static(path.join(__dirname, "static")))
app.use('/', require(path.join(__dirname,'routes/blog.js')))

app.listen(port , () => {
    console.log(`Blog App listening at http://localhost:${port} and running on an good average.`)
})