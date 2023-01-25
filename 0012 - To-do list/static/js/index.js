const COLORS = {
    colorPink: "#f7dfd7",
    colorGrayLight: "#f8fafb",
};
const DATA = {};
const SVG_DEL = '<svg viewBox="0 0 1000 1000" data-name="Layer 2" id="Layer_2" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><defs><style>.cls-1{fill:none;stroke:#fd7564;stroke-linecap:round;stroke-miterlimit:10;stroke-width:41;}</style></defs><path class="cls-1" d="M717.37,353.41l-30,390.71a61.19,61.19,0,0,1-61.19,61.19H373.85a61.19,61.19,0,0,1-61.19-61.19l-30-390.71"></path><line class="cls-1" x1="600.9" x2="418.7" y1="314.08" y2="314.08"></line><path class="cls-1" d="M351.57,314.08H222V276.19a28,28,0,0,1,28-28H438.35c0-.1,0-.19,0-.28,0-29.4,27.61-53.24,61.66-53.24s61.66,23.84,61.66,53.24c0,.09,0,.18,0,.28H750a28,28,0,0,1,28,28v37.89H671.37"></path><line class="cls-1" x1="397.36" x2="397.36" y1="455.63" y2="700.74"></line><line class="cls-1" x1="500" x2="500" y1="455.63" y2="700.74"></line><line class="cls-1" x1="602.64" x2="602.64" y1="455.63" y2="700.74"></line></g></svg>'
const SVG_EDIT = '<svg viewBox="0 0 24 24" fill="none" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4.5 17.2071V19C4.5 19.2761 4.72386 19.5 5 19.5H6.79289C6.9255 19.5 7.05268 19.4473 7.14645 19.3536L15.6452 10.8548L13.1452 8.35485L4.64645 16.8536C4.55268 16.9473 4.5 17.0745 4.5 17.2071Z" stroke="#61b5ff"></path> <path d="M15.0897 6.4103L17.5897 8.9103L18.7929 7.70711C19.1834 7.31658 19.1834 6.68342 18.7929 6.2929L17.7071 5.20711C17.3166 4.81658 16.6834 4.81658 16.2929 5.20711L15.0897 6.4103Z" stroke="#61b5ff"></path> </g></svg>'
var selectedTask 
class Task {
    constructor(titleVal, dateVal="", descVal="") {
        this.titleVal = titleVal;
        this.dateVal = dateVal;
        this.descVal = descVal;
    }
    taskContainer = document.createElement("ol");
    bg = document.createElement("div");
    title = document.createElement("p");
    date = document.createElement("p");
    desc = document.createElement("p");
    btnDel = document.createElement("button");
    btnEdit = document.createElement("button");
    tasks = document.getElementById("tasks");
    gen() {
        this.taskContainer.setAttribute("class", "task animated");
        this.bg.setAttribute("class", "bg animated");
        this.title.setAttribute("class", "title");
        this.date.setAttribute("class", "date");
        this.desc.setAttribute("class", "date");
        this.btnDel.setAttribute("class", "btn del no_border animated");
        this.btnEdit.setAttribute("class", "btn edit no_border animated");
        this.tasks.appendChild(this.taskContainer);
        this.taskContainer.appendChild(this.bg);
        this.taskContainer.appendChild(this.title);
        this.taskContainer.appendChild(this.date);
        this.taskContainer.appendChild(this.desc);
        this.taskContainer.appendChild(this.btnDel);
        this.taskContainer.appendChild(this.btnEdit);
        this.title.textContent = this.titleVal;
        this.date.textContent = this.dateVal;
        this.desc.textContent = this.descVal;
        this.btnDel.innerHTML = SVG_DEL;
        this.btnEdit.innerHTML = SVG_EDIT;

        this.btnDel.addEventListener("click", ()=>{
            this.bg.remove();
            this.taskContainer.style.transform = "scaleY(0)";
            this.taskContainer.style.height = "0";
            this.taskContainer.style.opacity = "0";
            setInterval(()=>{
                this.taskContainer.remove();
            }, 200);
            
        });
        this.btnEdit.addEventListener("click", ()=>{
            deselectTasks();
            selectedTask = this;
            this.taskContainer.style.backgroundColor = COLORS.colorPink;
            document.getElementById("formTitle").value = this.title.textContent;
            document.getElementById("formDueDate").value = this.date.textContent;
            document.getElementById("formDesc").value = this.desc.textContent;
            const btn = document.getElementById("submit")
            btn.textContent = "Edit";
            btn.className = "form_edit no_border animated";
        });
    }
}

let clearForm = ()=>{
    document.getElementById("formTitle").value = "";
    document.getElementById("formDueDate").value = "";
    document.getElementById("formDesc").value = "";
};

let deselectTasks = ()=> {
    Array.from(document.getElementsByClassName("task")).forEach((el)=>{
        el.style.backgroundColor = COLORS.colorGrayLight;
    });
};

document.getElementById("submit").addEventListener("click", ()=>{
    const formTitle = document.getElementById("formTitle").value;
    const formDueDate = document.getElementById("formDueDate").value;
    const formDesc = document.getElementById("formDesc").value;
    
    if (formTitle.length > 0) {
        if (selectedTask) {
            selectedTask.title.textContent = formTitle;
            selectedTask.date.textContent = formDueDate;
            selectedTask.desc.textContent = formDesc;
            clearForm();
            selectedTask = undefined;
            document.getElementById("submit").className = "form_add no_border animated";
            document.getElementById("submit").textContent = "Add";
            deselectTasks();
            return
        }
        const task = new Task(formTitle, formDueDate, formDesc);
        task.gen();
    }
});

// creating dummy tasks
(()=>{
    for (let i=1 ; i<=7 ; i++) {
        const title = "Title_"+(i).toString();
        const date = "2023-01-0"+(i).toString();
        const desc = "desc desc desc desc ("+(i).toString()+")";
        const task = new Task(title, date, desc);
        task.gen();
    }
})();