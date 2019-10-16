window.onload = controlLogin(); //Check if user is logged in.
window.onload = addCard(); //Kör funktion som gör att användaren kan lägga till kort
window.onload = printCard(); //Skriv ut redan tillagda kort

var todo_info = [];
var doing_info = [];
var testing_info = [];
var done_info = [];

function printCard() { //Hämta kort från localStorage och skriv ut dem
    var todoDiv = document.getElementById("toDo");
    var todoPrint = document.createElement("h3");
    todoPrint.innerHTML = localStorage.getItem("myTodo");
    todoDiv.appendChild(todoPrint);

    var doingDiv = document.getElementById("doing");
    var doingPrint = document.createElement("h3");
    doingPrint.innerHTML = localStorage.getItem("myDoing");
    doingDiv.appendChild(doingPrint);

    var testingDiv = document.getElementById("testing");
    var testingPrint = document.createElement("h3");
    testingPrint.innerHTML = localStorage.getItem("myTesting");
    testingDiv.appendChild(testingPrint);

    var doneDiv = document.getElementById("done");
    var donePrint = document.createElement("h3");
    donePrint.innerHTML = localStorage.getItem("myDone");
    doneDiv.appendChild(donePrint);
}

function addCard() { //Ge varje bräda en funktion att lägga till nya kort
    var todo = document.getElementById("addTodo");
    todo.addEventListener("click", function() {
        var nameCard = prompt("Vänligen ange namn på kortet");
        var todoDiv = document.getElementById("toDo");
        var newCard = document.createElement("h3");
        newCard.innerHTML = nameCard;
        todoDiv.appendChild(newCard);
        todo_info.push(nameCard);

        localStorage.setItem("myTodo", todo_info);

    });

    var doing = document.getElementById("addDoing");
    doing.addEventListener("click", function() {
        var nameCard = prompt("Vänligen ange namn på kortet");
        var doingDiv = document.getElementById("doing");
        var newCard = document.createElement("h3");
        newCard.innerHTML = nameCard;
        doingDiv.appendChild(newCard);
        doing_info.push(nameCard);

        localStorage.setItem("myDoing", doing_info);
    });


    var testing = document.getElementById("addTesting");
    testing.addEventListener("click", function() {
        var nameCard = prompt("Vänligen ange namn på kortet");
        var testingDiv = document.getElementById("testing");
        var newCard = document.createElement("h3");
        newCard.innerHTML = nameCard;
        testingDiv.appendChild(newCard);
        testing_info.push(nameCard);

        localStorage.setItem("myTesting", testing_info);
    });


    var done = document.getElementById("addDone");
    done.addEventListener("click", function() {
        var nameCard = prompt("Vänligen ange namn på kortet");
        var doneDiv = document.getElementById("done");
        var newCard = document.createElement("h3");
        newCard.innerHTML = nameCard;
        doneDiv.appendChild(newCard);
        done_info.push(nameCard);

        localStorage.setItem("myDone", done_info);
    });
}

//----Control Login----//
//If the user is not logged in, send them to index.html
function controlLogin(){
    let login = localStorage.getItem("loggedIn");
        if (login === "false"){
            location.replace("index.html");
        }
        else{
            console.log("Logged in");
        }
}

//----LOGOUT----//
function logout(){
    localStorage.setItem("loggedIn", false);
    localStorage.setItem("userID", -1);
    location.replace("index.html");
}