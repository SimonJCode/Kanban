window.onload = controlLogin(); //Check if user is logged in.
window.onload = addCard(); //Kör funktion som gör att användaren kan lägga till kort
window.onload = printCard(); //Skriv ut redan tillagda kort


var todo_info = JSON.parse(localStorage.getItem("myTodo")) || [];
var doing_info = JSON.parse(localStorage.getItem("myDoing")) || [];
var testing_info = JSON.parse(localStorage.getItem("myTesting")) || [];
var done_info = JSON.parse(localStorage.getItem("myDone")) || [];

function printCard() { //Hämta kort från localStorage och skriv ut dem

    var todoDiv = document.getElementById("toDo");

    // Get an array from local storage
    let myTodo = JSON.parse(localStorage.getItem("myTodo"));

    // Loop and insert to card created html kod if length of array bigger than 0
    if (myTodo != null && myTodo.length > 0) {
        console.log(myTodo)
        for (let i in myTodo) {
            let p = "<p class='card-p' draggable='true'>" + myTodo[i] + "</p>";
            todoDiv.insertAdjacentHTML("beforeend", p);
        }
    }

    // var todoPrint = document.createElement("p");
    // todoPrint.innerHTML = localStorage.getItem("myTodo");
    // todoDiv.appendChild(todoPrint);


    var doingDiv = document.getElementById("doing");

    // Get an array from local storage
    let myDoing = JSON.parse(localStorage.getItem("myDoing"))

    // Loop and insert to card created html kod if length of array bigger than 0
    if (myDoing != null && myDoing.length > 0) {
        for (let i in myDoing) {
            let p = "<p class='card-p' draggable='true'>" + myDoing[i] + "</p>";
            doingDiv.insertAdjacentHTML("beforeend", p);
        }
    }

    // var doingPrint = document.createElement("p");
    // doingPrint.innerHTML = localStorage.getItem("myDoing");
    // doingDiv.appendChild(doingPrint);



    var testingDiv = document.getElementById("testing");

    // Get an array from local storage
    let myTesting = JSON.parse(localStorage.getItem("myTesting"))

    // Loop and insert to card created html kod if length of array bigger than 0
    if (myTesting != null && myTesting.length > 0) {
        for (let i in myTesting) {
            let p = "<p class='card-p' draggable='true'>" + myTesting[i] + "</p>";
            testingDiv.insertAdjacentHTML("beforeend", p);
        }
    }

    // var testingPrint = document.createElement("p");
    // testingPrint.innerHTML = localStorage.getItem("myTesting");
    // testingDiv.appendChild(testingPrint);


    var doneDiv = document.getElementById("done");

    // Get an array from local storage
    let myDone = JSON.parse(localStorage.getItem("myDone"))

    // Loop and insert to card created html kod if length of array bigger than 0
    if (myDone != null && myDone.length > 0) {
        for (let i in myDone) {
            let p = "<p class='card-p' draggable='true'>" + myDone[i] + "</p>";
            doneDiv.insertAdjacentHTML("beforeend", p);
        }
    }

    // var donePrint = document.createElement("p");
    // donePrint.innerHTML = localStorage.getItem("myDone");
    // doneDiv.appendChild(donePrint);
}



function addCard() { //Ge varje bräda en funktion att lägga till nya kort
    var todo = document.getElementById("addTodo");
    todo.addEventListener("click", function() {
        var nameCard = prompt("Vänligen ange namn på kortet");
        var todoDiv = document.getElementById("toDo");

        // Check first is this nameCard empty or not
        if (nameCard.length > 0) {
            var newCard = document.createElement("p");
            newCard.innerHTML = nameCard;
            todoDiv.appendChild(newCard);
            todo_info.push(nameCard);

            localStorage.setItem("myTodo", JSON.stringify(todo_info));

            newCard.setAttribute("class", "card-p"); // Set a class name for styles // Saves array instead string

            newCard.setAttribute("class", "card-p"); // Set a class name for styles
            newCard.setAttribute("draggable", "true"); // Set a class name for styles

            // Using of function from scriptDragDrop.js to activate ny addea
            runDraggable();
        }
    });

    var doing = document.getElementById("addDoing");
    doing.addEventListener("click", function() {
        var nameCard = prompt("Vänligen ange namn på kortet");
        var doingDiv = document.getElementById("doing");

        // Check first is this nameCard empty or not
        if (nameCard.length > 0) {
            var newCard = document.createElement("p");

            newCard.innerHTML = nameCard;
            doingDiv.appendChild(newCard);
            doing_info.push(nameCard);

            localStorage.setItem("myDoing", JSON.stringify(doing_info)); // Saves array instead string

            newCard.setAttribute("class", "card-p"); // Set a class name for styles
            newCard.setAttribute("draggable", "true"); // Set a class name for styles

            // Using of function from scriptDragDrop.js to activate ny addea
            runDraggable();
        }
    });


    var testing = document.getElementById("addTesting");
    testing.addEventListener("click", function() {
        var nameCard = prompt("Vänligen ange namn på kortet");

        // Check first is this nameCard empty or not
        if (nameCard.length > 0) {
            var testingDiv = document.getElementById("testing");
            var newCard = document.createElement("p");
            newCard.innerHTML = nameCard;
            testingDiv.appendChild(newCard);
            testing_info.push(nameCard);

            localStorage.setItem("myTesting", JSON.stringify(testing_info)); // Saves array instead string

            newCard.setAttribute("class", "card-p"); // Set a class name for styles
            newCard.setAttribute("draggable", "true"); // Set a class name for styles

            // Using of function from scriptDragDrop.js to activate ny addea
            runDraggable();
        }
    });


    var done = document.getElementById("addDone");
    done.addEventListener("click", function() {
        var nameCard = prompt("Vänligen ange namn på kortet");

        // Check first is this nameCard empty or not
        if (nameCard.length > 0) {
            var doneDiv = document.getElementById("done");
            var newCard = document.createElement("p");
            newCard.innerHTML = nameCard;
            doneDiv.appendChild(newCard);
            done_info.push(nameCard);

            localStorage.setItem("myDone", JSON.stringify(done_info));

            newCard.setAttribute("class", "card-p"); // Set a class name for styles
            newCard.setAttribute("draggable", "true"); // Set a class name for styles

            // Using of function from scriptDragDrop.js to activate ny addea
            runDraggable();
        }
    });
}

//----Control Login----//
//If the user is not logged in, send them to index.html.
function controlLogin(){
    let login = localStorage.getItem("loggedIn");
        if (login === "false"){
            location.replace("index.html");
        }
        else{
            console.log("logged in");
        }
}

//----LOGOUT----//
function logout() {
    localStorage.setItem("loggedIn", false);
    localStorage.setItem("userID", -1);
    location.replace("index.html");
}