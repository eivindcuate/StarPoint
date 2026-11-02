//Our Goals 

// Get Data from our Form 
const taskForm = document.getElementById("task-form");
const todoTasks = document.getElementById("todo-tasks");
const inProgressTasks = document.getElementById("in-progress-tasks");
const completedTasks = document.getElementById("completed-tasks");

// We need a way to keep track of all tasks
let tasks = [];



taskForm.addEventListener("submit", function(event) {
event.preventDefault();
const taskName = document.getElementById("task-name").value;
const course = document.getElementById("course").value;
const dueDate = document.getElementById("due-date").value;
const priority = document.getElementById("priority").value;

// Create a task object
const task = {
    name: taskName,
    course: course,
    dueDate: dueDate,
    priority: priority,
    status: "todo"
};

// We need to keep track of all tasks
tasks.push(task);

// Create the task card
const taskCard = document.createElement("div");
taskCard.className = "card mb-3";

const cardBody = document.createElement("div");
cardBody.className = "card-body";

const taskTitle = document.createElement("h4");
taskTitle.className = "card-title";

// Set the task title
taskTitle.textContent = task.name;
cardBody.appendChild(taskTitle);

taskCard.appendChild(cardBody);

const courseText = document.createElement("p");
courseText.className = "card-text";
courseText.textContent = "Course: " + task.course;
cardBody.appendChild(courseText);

if (task.dueDate) {
    const dueDateText = document.createElement("p");
    dueDateText.className = "card-text";
    dueDateText.textContent = "Due: " + task.dueDate;
    cardBody.appendChild(dueDateText);
}

const priorityBadge = document.createElement("span");
if (task.priority === "low") {
    priorityBadge.className = "badge text-bg-success";
} else if (task.priority === "medium") {
    priorityBadge.className = "badge text-bg-warning";
} else {
    priorityBadge.className = "badge text-bg-danger";
}
// Create the move button
const moveButton = document.createElement("button");
moveButton.className = "btn btn-outline-primary btn-sm";
moveButton.textContent = "Move to In Progress";
moveButton.type = "button";

// Add event listener for the move button
moveButton.addEventListener("click", function() {

    if (task.status === "todo") {

       
            task.status = "in-progress";
            inProgressTasks.appendChild(taskCard);
            moveButton.textContent = "Move to Completed";

    }

    else if (task.status === "in-progress") {
    task.status = "completed";
    completedTasks.appendChild(taskCard);
    moveButton.textContent = "Completed";
    moveButton.disabled = true;

    const deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-danger btn-sm";
    deleteButton.textContent = "Delete";
    deleteButton.type = "button";

    deleteButton.addEventListener("click", function() {

    // Find the task's position in the array
    const taskIndex = tasks.indexOf(task);

    // Remove the task object from the array
    tasks.splice(taskIndex, 1);

    // Remove the HTML card from the page
    taskCard.remove();

});

    cardBody.appendChild(deleteButton);
}

});

// Create the priority badge
priorityBadge.textContent = task.priority;
cardBody.appendChild(priorityBadge);
cardBody.appendChild(moveButton);
todoTasks.appendChild(taskCard);





});

