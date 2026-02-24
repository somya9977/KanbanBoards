🗂️ Kanban Board (Drag & Drop Task Manager)

A simple and responsive Kanban Board built using HTML, CSS, and JavaScript.
Tasks can be added, dragged between columns, and are stored in localStorage so data persists after page refresh.

Preview :- https://somya9977.github.io/KanbanBoards/

🚀 Features

✅ Add new tasks with title and description

✅ Drag and drop tasks between:

Pending

Working

Done

✅ Reverse drag supported (Done → Working → Pending)

✅ Tasks saved in browser localStorage

✅ Scrollable columns

✅ Clean and modern UI

🛠️ Technologies Used

HTML5

CSS3

Vanilla JavaScript

LocalStorage API

Drag and Drop API

📂 Project Structure
Kanban-Board/
│
├── index.html
├── style.css
├── app.js
└── README.md
🧠 How It Works

When a task is added:

A task object is created with:

id (Date.now())

title

description

status

It is saved in localStorage.

Drag & Drop updates:

Task status is updated.

localStorage is updated automatically.

On page load:

All saved tasks are rendered according to their status.
