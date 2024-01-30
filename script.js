document.getElementById("gumb").addEventListener("click", addNewTask);
document.getElementById("gumb").addEventListener("click", clearInput);

function addNewTask() {
    let newDiv = document.createElement("div");
    let p = document.createElement("p");
    let i = document.createElement("i");
    let input = document.getElementById("input").value;

    if (input == "") {
        alert("Enter a task!");
    }   
    else {
        document.getElementById("container2").appendChild(newDiv);

        newDiv.appendChild(p);
        newDiv.appendChild(i);
        newDiv.classList.add("divFlex");

        p.innerHTML = input;
        i.classList.add("fa-solid");
        i.classList.add("fa-x");

        i.addEventListener("click", deleteTask);
        p.addEventListener("click", crossTask);
    } 
}

function clearInput() {
    input.value = "";
}

function deleteTask(e) {
    e.target.parentElement.remove();
}

function crossTask(e) {
    e.target.classList.toggle("obavljeno");
}