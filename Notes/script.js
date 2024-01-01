var container = document.querySelector("#notesContainer");
const createBtn = document.querySelector("#createNotes");

function upgrade() {
    localStorage.setItem("notes", container.innerHTML);
}

createBtn.addEventListener("click", () => {
    let notesip = document.createElement("p");
    notesip.className = "notesInput";
    notesip.style.padding = "10px";
    notesip.innerHTML = "your Notes";
    notesip.setAttribute("contenteditable", "true");
    container.appendChild(notesip);
    upgrade();
});

container.addEventListener("input", function (e) {
    if (e.target.tagName === "P" && e.target.classList.contains("notesInput")) {
        upgrade();
    }
});

// Load notes from local storage on page load
window.addEventListener("load", function () {
    container.innerHTML = localStorage.getItem("notes") || "";
});

// Event listeners for delete buttons
let deleteBtns = document.querySelectorAll("#delete");
deleteBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.parentNode.remove();
        upgrade();
    });
});
