//Our Goals 

// Get Data from our Form 
const taskForm = document.getElementById("task-form");
const todoTasks = document.getElementById("todo-tasks");
const inProgressTasks = document.getElementById("in-progress-tasks");
const completedTasks = document.getElementById("completed-tasks");

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

const moveButton = document.createElement("button");
moveButton.className = "btn btn-outline-primary btn-sm";
moveButton.textContent = "Move to In Progress";
moveButton.type = "button";


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

}

});


priorityBadge.textContent = task.priority;
cardBody.appendChild(priorityBadge);
cardBody.appendChild(moveButton);
todoTasks.appendChild(taskCard);





});

