const DATA = {};
const SVG_DEL = '<svg viewBox="0 0 1000 1000" data-name="Layer 2" id="Layer_2" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><defs><style>.cls-1{fill:none;stroke:#fd7564;stroke-linecap:round;stroke-miterlimit:10;stroke-width:41;}</style></defs><path class="cls-1" d="M717.37,353.41l-30,390.71a61.19,61.19,0,0,1-61.19,61.19H373.85a61.19,61.19,0,0,1-61.19-61.19l-30-390.71"></path><line class="cls-1" x1="600.9" x2="418.7" y1="314.08" y2="314.08"></line><path class="cls-1" d="M351.57,314.08H222V276.19a28,28,0,0,1,28-28H438.35c0-.1,0-.19,0-.28,0-29.4,27.61-53.24,61.66-53.24s61.66,23.84,61.66,53.24c0,.09,0,.18,0,.28H750a28,28,0,0,1,28,28v37.89H671.37"></path><line class="cls-1" x1="397.36" x2="397.36" y1="455.63" y2="700.74"></line><line class="cls-1" x1="500" x2="500" y1="455.63" y2="700.74"></line><line class="cls-1" x1="602.64" x2="602.64" y1="455.63" y2="700.74"></line></g></svg>'
const SVG_EDIT = '<svg viewBox="0 0 24 24" fill="none" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4.5 17.2071V19C4.5 19.2761 4.72386 19.5 5 19.5H6.79289C6.9255 19.5 7.05268 19.4473 7.14645 19.3536L15.6452 10.8548L13.1452 8.35485L4.64645 16.8536C4.55268 16.9473 4.5 17.0745 4.5 17.2071Z" stroke="#61b5ff"></path> <path d="M15.0897 6.4103L17.5897 8.9103L18.7929 7.70711C19.1834 7.31658 19.1834 6.68342 18.7929 6.2929L17.7071 5.20711C17.3166 4.81658 16.6834 4.81658 16.2929 5.20711L15.0897 6.4103Z" stroke="#61b5ff"></path> </g></svg>'

class Task {
    constructor(titleVal, descVal="") {
        this.titleVal = titleVal;
        this.descVal = descVal;
        console.log(this.titleVal)
    }
    tag = $("ol");
    title = $("p").addClass("title").text(this.titleVal);
    desc = $("p").addClass("desc").text(this.descVal);
    btnDel = $("button").addClass("btn del").append(SVG_DEL);
    btnEdit = $("button").addClass("btn edit").append(SVG_EDIT);
    gen() {
        this.tag.append(this.title);
        this.tag.append(this.desc);
        this.tag.append(this.btnDel);
        this.tag.append(this.btnEdit);
        $("#tasks").append(this.tag);
    }
}

document.getElementById("formAdd").addEventListener("click", ()=>{
    const formTitle = document.getElementById("formTitle").getAttribute("value");
    const formDesc = document.getElementById("formDesc").getAttribute("value");
    if (formTitle.length > 0) {
        const task = new Task(formTitle, formDesc);
        console.log(task);
        task.gen();
    }
    // if (formTitle.length > 0) {
    //     const task = document.createElement("ol");
    //     task.setAttribute("class", "task");
    //     const title = document.createElement("p");
    //     task.setAttribute("class", "title");
    //     task.textContent = formTitle;
    //     const desc = document.createElement("p");
    //     desc.setAttribute("class", "desc");
    //     desc.textContent = formDesc;
    //     const desc = document.createElement("p");
    //     desc.setAttribute("class", "desc");
    //     desc.textContent = formDesc;

    // }
});