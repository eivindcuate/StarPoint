//Our Goals 

// Get Data from our Form 
const taskForm = document.getElementById("task-form");

taskForm.addEventListener("submit", function(event) {
event.preventDefault();
const taskName = document.getElementById("task-name").value;
const course = document.getElementById("course").value;
const dueDate = document.getElementById("due-date").value;
const priority = document.getElementById("priority").value;

const task = {
    name: taskName,
    course: course,
    dueDate: dueDate,
    priority: priority,
    status: "todo"
};

const taskCard = document.createElement("div");
taskCard.className = "card mb-3";


});

