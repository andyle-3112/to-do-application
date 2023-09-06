import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
var task = [];

var workTask = [];

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));



// task creation feature.



//post route for adding new task
app.post('/addtask', (req, res) => {
    var newTask = req.body["newtask"];
    task.push(newTask);
    res.redirect("/");
    console.log(task);
});


app.get("/", function(req, res) {    
    res.render("index.ejs", { task: task });
  });

// alternative list 



app.post('/addWorkTask', (req, res) => {
    var newWorkTask = req.body["newworktask"];
    workTask.push(newWorkTask);
    res.redirect("/work");
    console.log(workTask);
});


  app.get("/work", (req, res) => {
    res.render("work.ejs",{ workTask: workTask });
});








app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });






