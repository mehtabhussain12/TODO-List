var Todo = getFromLocalStorage() || ["karachi", "lahore", "islamabad", "peshawar", "quetta"];
var list = document.getElementById("list")
var inputbox = document.getElementById("input-box")



// Function for showing the welcome message 
function start() {

    var namebox = document.getElementById("name-box")
    document.getElementById("W-text").innerHTML = "Welcome " + namebox.value
    if (namebox.value == "") {
        alert("Please enter your name")
        namebox.focus()
        return
    }
    document.getElementById("name-box").style.display = "none"
    document.getElementById("start").style.display = "none"
    inputbox.focus()
    document.getElementById("app").style.display = "flex"
    
    console.log("Welcome to your Fav city app " + namebox.value)

}


// Function for showing Item

function ShowList() {
    var datafromstorage = getFromLocalStorage(); 
    list.innerHTML = "";
    for (var i = 0; i < Todo.length; i++) {
        list.innerHTML += `<li>${Todo[i].toLowerCase()}  
        <span class=svg>
            <svg onclick="DeleteItem(${i})" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="..."/>
            </svg>
        </span> 
        <span onclick="EditItem(${i})" class="svg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none"  viewBox="0 0 24 24" height="20px" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="..."/>
            </svg>
        </span></li>`;
    }
}


// Fucntion for adding Items

function AddList() {
    
    // condition if input box is empty
    if (inputbox.value == "") {
        alert("Please enter a valid city name")
        inputbox.focus()
        return
    }
    // condition if input box already exists in the list
    for (var i = 0; i < Todo.length; i++) {
        if (Todo[i].toLowerCase() == inputbox.value.toLowerCase()) {
            console.log("this item already exists")
            alert("this item already exists")
            list.innerHTML = ""
            inputbox.value = ""
            ShowList()
            inputbox.focus()
            return
        }
    }
    Todo.push(inputbox.value)
    saveToLocalStorage(Todo)
    inputbox.value = ""
    inputbox.focus()
    ShowList()
    

}
//  funtion for deleting  item
function DeleteItem(index) {

    Todo.splice(index, 1)
    ShowList()
}
// funtion for editing item
function EditItem(index) {
    var userValue = prompt("Edit your item", Todo[index])
    // var userValue = document.getElementById("input-box").value= Todo[index]  
    Todo.splice(index, 1, userValue)
    ShowList()
}



function saveToLocalStorage() {
    localStorage.setItem("todo", JSON.stringify(Todo))
    console.log("Saved to local storage", Todo)
}


function getFromLocalStorage() {
    var data = localStorage.getItem("todo")
    console.log("Data from local storage", data)
}
