window.onload = controlLogin(); //Check if user is logged in.
window.onload = addCard(); //Kör funktion som gör att användaren kan lägga till kort
window.onload = printCard(); //Skriv ut redan tillagda kort


var todo_info = JSON.parse(localStorage.getItem("myTodo")) || [];
var doing_info = JSON.parse(localStorage.getItem("myDoing")) || [];
var testing_info = JSON.parse(localStorage.getItem("myTesting")) || [];
var done_info = JSON.parse(localStorage.getItem("myDone")) || [];

function printCard() { //Hämta kort från localStorage och skriv ut dem


//TO-DO LIST
    var todoDiv = document.getElementById("toDo");
    
     

    // Get an array from local storage
    let myTodo = JSON.parse(localStorage.getItem("myTodo"));

    // Loop and insert to card created html kod if length of array bigger than 0
    if (myTodo != null && myTodo.length > 0) {
        console.log(myTodo)
        for (let i in myTodo) {
            var todocard = document.createElement("div");
            todocard.id = "newCard";
            let p = "<p class='card-p' draggable='true'>" + myTodo[i] + "</p>";
            

//***TABORT button ***/
      var TBK = document.createElement("button");
      TBK.innerHTML= "<img src=\"https://cdn3.iconfinder.com/data/icons/ui-icons-5/16/cross-small-01-512.png\" width=\"20px\" height=\"20px\">";
      TBK.id = "tabort";
      TBK.onclick = function(){

        this.previousSibling.remove();
        this.remove();
        var index = [i];
        myTodo.splice(index, 1);
        localStorage.setItem("myTodo", JSON.stringify(myTodo)); 

        };

//***End of the TABORT button***/      

            todocard.insertAdjacentHTML("beforeend", p);
            todocard.appendChild(TBK);
            todoDiv.appendChild(todocard);
        }
    }



//***DOING LIST

    var doingDiv = document.getElementById("doing");

    // Get an array from local storage
    let myDoing = JSON.parse(localStorage.getItem("myDoing"))

    // Loop and insert to card created html kod if length of array bigger than 0
    if (myDoing != null && myDoing.length > 0) {
        var doingcard = document.createElement("div");
        doingcard.id = "newCard";
        for (let i in myDoing) {
            let p = "<p class='card-p' draggable='true'>" + myDoing[i] + "</p>";
           
           
//***TABORT button ***/
      var TBK = document.createElement("button");
      TBK.innerHTML= "<img src=\"https://cdn3.iconfinder.com/data/icons/ui-icons-5/16/cross-small-01-512.png\" width=\"20px\" height=\"20px\">";
      TBK.id = "tabort";
      TBK.onclick = function(){
          this.previousSibling.remove();
          this.remove();
          var index = [i];
          myDoing.splice(index, 1);
          localStorage.setItem("myDoing", JSON.stringify(myDoing)); 
      };
//***End of the TABORT button***/      

            doingcard.insertAdjacentHTML("beforeend", p);
            doingcard.appendChild(TBK);
            doingDiv.appendChild(doingcard);
        }
    }
   


//***TESTING LIST

    var testingDiv = document.getElementById("testing");

    // Get an array from local storage
    let myTesting = JSON.parse(localStorage.getItem("myTesting"))

    // Loop and insert to card created html kod if length of array bigger than 0
    if (myTesting != null && myTesting.length > 0) {
        var testingcard = document.createElement("div");
            testingcard.id = "newCard";
        for (let i in myTesting) {
            let p = "<p class='card-p' draggable='true'>" + myTesting[i] + "</p>";
            
//***TABORT button ***/
    var TBK = document.createElement("button");
    TBK.innerHTML= "<img src=\"https://cdn3.iconfinder.com/data/icons/ui-icons-5/16/cross-small-01-512.png\" width=\"20px\" height=\"20px\">";
    TBK.id = "tabort";
    TBK.onclick = function(){
        this.previousSibling.remove();
        this.remove();
        var index = [i];
        myTesting.splice(index, 1);
        localStorage.setItem("myTesting", JSON.stringify(myTesting)); 
    };
//***End of the TABORT button***/      

          testingcard.insertAdjacentHTML("beforeend", p);
          testingcard.appendChild(TBK);
          testingDiv.appendChild(testingcard);
      }
  }

 
//***DONE LIST

    var doneDiv = document.getElementById("done");

    // Get an array from local storage
    let myDone = JSON.parse(localStorage.getItem("myDone"))

    // Loop and insert to card created html kod if length of array bigger than 0
    if (myDone != null && myDone.length > 0) {
        var donecard = document.createElement("div");
            donecard.id = "newCard";
        for (let i in myDone) {
            let p = "<p class='card-p' draggable='true'>" + myDone[i] +  "</p>";

//***TABORT button ***/

      var TBK = document.createElement("button");
      TBK.innerHTML= "<img src=\"https://cdn3.iconfinder.com/data/icons/ui-icons-5/16/cross-small-01-512.png\" width=\"20px\" height=\"20px\">";
      TBK.id = "tabort";
      TBK.onclick = function(){
          this.previousSibling.remove();
          this.remove();
          var index = [i];
          myDone.splice(index, 1);
          localStorage.setItem("myDone", JSON.stringify(myDone)); 
      };
//***End of the TABORT button***/      

            donecard.insertAdjacentHTML("beforeend", p);
            donecard.appendChild(TBK);
            doneDiv.appendChild(donecard);
        }
    }
   
}



function addCard() { //Ge varje bräda en funktion att lägga till nya kort
    var todo = document.getElementById("addTodo");
    todo.addEventListener("click", function() {
        var nameCard = prompt("Vänligen ange namn på kortet");
        var todoDiv = document.getElementById("toDo");
        
        //***Ta bort Knappen som raderar html element samt item i LocalStorage ***/
        
        var TBK = document.createElement("button");
        TBK.innerHTML= "<img src=\"https://cdn3.iconfinder.com/data/icons/ui-icons-5/16/cross-small-01-512.png\" width=\"20px\" height=\"20px\">";
            TBK.id = "tabort";
            TBK.onclick = function(){
                todoDiv.removeChild(newCard);

                var td = JSON.parse(localStorage.getItem("myTodo"));
             for(i=0;i<td.length;i++){
                 if(td[i] === nameCard){
                     var index = [i];
                     td.splice(index, 1);
                     localStorage.setItem("myTodo", JSON.stringify(td))
                 }
             }
            };

        // Check first is this nameCard empty or not
        if (nameCard.length > 0) {
            var newCard = document.createElement("p");
            newCard.innerHTML = nameCard;
            newCard.appendChild(TBK);
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

         //***Ta bort Knappen som raderar html element samt item i LocalStorage ***/
        
         var TBK = document.createElement("button");
         TBK.innerHTML= "<img src=\"https://cdn3.iconfinder.com/data/icons/ui-icons-5/16/cross-small-01-512.png\" width=\"20px\" height=\"20px\">";
         TBK.id = "tabort";
         TBK.onclick = function(){
             doingDiv.removeChild(newCard);
             var doing = JSON.parse(localStorage.getItem("myDoing"));
             for(i=0;i<doing.length;i++){
                 if(doing[i] === nameCard){
                     var index = [i];
                     doing.splice(index, 1);
                     localStorage.setItem("myDoing", JSON.stringify(doing))
                 }
             }
         };

        // Check first is this nameCard empty or not
        if (nameCard.length > 0) {
            var newCard = document.createElement("p");

            newCard.innerHTML = nameCard;
            newCard.appendChild(TBK);
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


         //***Ta bort Knappen som raderar html element samt item i LocalStorage ***/
        
         var TBK = document.createElement("button");
         TBK.innerHTML= "<img src=\"https://cdn3.iconfinder.com/data/icons/ui-icons-5/16/cross-small-01-512.png\" width=\"20px\" height=\"20px\">";
         TBK.id = "tabort";
         TBK.onclick = function(){
             testingDiv.removeChild(newCard);

             var testing = JSON.parse(localStorage.getItem("myTesting"));
             for(i=0;i<testing.length;i++){
                 if(testing[i] === nameCard){
                     var index = [i];
                     testing.splice(index, 1);
                     localStorage.setItem("myTesting", JSON.stringify(testing))
                 }
             }
         };

        // Check first is this nameCard empty or not
        if (nameCard.length > 0) {
            var testingDiv = document.getElementById("testing");
            var newCard = document.createElement("p");
            newCard.innerHTML = nameCard;
            newCard.appendChild(TBK);
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


         //***Ta bort Knappen som raderar html element samt item i LocalStorage ***/
        
         var TBK = document.createElement("button");
         TBK.innerHTML= "<img src=\"https://cdn3.iconfinder.com/data/icons/ui-icons-5/16/cross-small-01-512.png\" width=\"20px\" height=\"20px\">";
         TBK.id = "tabort";
         TBK.onclick = function(){
             doneDiv.removeChild(newCard);

             var done = JSON.parse(localStorage.getItem("myDone"));
             for(i=0;i<done.length;i++){
                 if(done[i] === nameCard){
                     var index = [i];
                     done.splice(index, 1);
                     localStorage.setItem("myDone", JSON.stringify(done))
                 }
             }
             
         };

        // Check first is this nameCard empty or not
        if (nameCard.length > 0) {
            var doneDiv = document.getElementById("done");
            var newCard = document.createElement("p");
            newCard.innerHTML = nameCard;
            newCard.appendChild(TBK);
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