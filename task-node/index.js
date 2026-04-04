//ejs --> file.ejs,<% %>,<%= %>
const express = require("express");
const{error} = require("console");
const fs = require("fs");
const app = express();
// const path = require("path");

// Set the view engine to ejs
// app.set("view engine", "ejs");
//if you want to read data from frontend below two lines are important
app.use(express.json());
//usecase --> read json type data from frontend 
app.use(express.urlencoded({ extended: true }));
//usecase --> read a from data from frontend

//setup ejs:
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    fs.readdir("./tasks" ,(e,files) => {
        console.log(files);
        if(e) throw error;

        res.render("index" ,{data: files});
    });
});

//create (create txt files) --> post
app.post("/create", (req, res) => {
    console.log(req.body);

    let Task_data = `'Title': ${req.body.title} \n 'Tasks': ${req.body.task}`;
//create a file 
fs.writeFile(`./tasks/${req.body.title.split(' ').join('')}.txt`,Task_data,(err) => {
    if(err) throw error;
    },
);
res.redirect("/");
});

//read files(open files)==>get
app.get("/files/:filename", (req, res) => {
    // console.log(req.params);
    // res.send(req.params);
    res.render("read");
});
//read file name and edit


app.get("/", (req, res) => {
    res.send("Express Srver Homepage!!");
});

app.listen(3000, () => {
    console.log("check on you browser: http://localhost:3000 ");
});