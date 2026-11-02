//Our Goals 

// Get Data from our Form 
const taskForm = document.getElementById("task-form");
const todoTasks = document.getElementById("todo-tasks");

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

const cardBody = document.createElement("div");
cardBody.className = "card-body";

const taskTitle = document.createElement("h4");
taskTitle.className = "card-title";

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
priorityBadge.textContent = task.priority;
cardBody.appendChild(priorityBadge);
todoTasks.appendChild(taskCard);


});

