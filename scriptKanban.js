var loc = localStorage;
var userId = loc.getItem("userID");
var username = loc.getItem("username");

let initial = username.slice(0, 1).toUpperCase();
document.getElementById("char").innerHTML = initial;
document.getElementById("name").innerHTML = username;


var todo_info = (loc.getItem("myTodo") != null) ? JSON.parse(loc.getItem("myTodo")) : [];
var doing_info = (loc.getItem("myDoing") != null) ? JSON.parse(loc.getItem("myDoing")) : [];
var testing_info = (loc.getItem("myTesting") != null) ? JSON.parse(loc.getItem("myTesting")) : [];
var done_info = (loc.getItem("myDone") != null) ? JSON.parse(loc.getItem("myDone")) : [];

window.onload = controlLogin(); //Check if user is logged in.
window.onload = addCard(); //Kör funktion som gör att användaren kan lägga till kort
window.onload = printCard(); //Skriv ut redan tillagda kort

function printCard() { //Hämta kort från loc och skriv ut dem
    setObjects("todo", todo_info)
    setObjects("doing", doing_info)
    setObjects("testing", testing_info)
    setObjects("done", done_info)
}

function addCard() { //Ge varje bräda en funktion att lägga till nya kort
    var todo = document.getElementById("addTodo");
    todo.addEventListener("click", function() {
        setNewObject("todo", "myTodo", todo_info);
    });

    var doing = document.getElementById("addDoing");
    doing.addEventListener("click", function() {
        setNewObject("doing", "myDoing", doing_info);
    });

    var testing = document.getElementById("addTesting");
    testing.addEventListener("click", function() {
        setNewObject("testing", "myTesting", testing_info);
    });

    var done = document.getElementById("addDone");
    done.addEventListener("click", function() {
        setNewObject("done", "myDone", done_info);
    });
}

// Set new object
function setNewObject(id, arr, list) {
    var nameCard = prompt("Vänligen ange namn på kortet");
    let block = document.getElementById(id)


    // Check first is this nameCard empty or not
    if (nameCard.length > 0) {
        var newCard = document.createElement("p");
        newCard.innerHTML = nameCard;
        block.appendChild(newCard);
        let obj = getObject(nameCard, arr)
        list.push(obj);
        loc.setItem(arr, JSON.stringify(list));

        newCard.setAttribute("name", obj.name); // Set a id for remove 
        newCard.setAttribute("class", "card-p"); // Set a class name for styles
        newCard.setAttribute("draggable", "true"); // Set a class name for style
        newCard.setAttribute("id", obj.identity); // Set a id for remove 

        // Using of function from scriptDragDrop.js to activate ny addea
        runDraggable();
    }
}

// Set object with onload
function setObjects(str, list) {
    card = document.getElementById(str);
    // Loop and insert to card created html kod if length of array bigger than 0
    if (list != null && list.length > 0) {
        for (let i in list.filter(x => x.id == userId)) {
            let p = "<p class='card-p' draggable='true' name='" + list[i].name + "' id='" + list[i].identity + "'>" + list[i].str + "</p>";
            card.insertAdjacentHTML("beforeend", p);
        }
    }
}

// Set object for array
function getObject(str, arr = null, param = null) {
    return obj = {
        id: userId,
        str: str,
        name: arr,
        identity: (param != null) ? param : (+new Date()).toString(32)
    }
}


//----Control Login----//

//If the user is not logged in, send them to index.html.
function controlLogin() {
    let login = localStorage.getItem("loggedIn");
    if (login === "false" || login == null) {
        location.replace("index.html");
    }
}

//----LOGOUT----//
function logout() {
    localStorage.setItem("loggedIn", false);
    localStorage.setItem("userID", -1);
    location.replace("index.html");
}