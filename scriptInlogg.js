
//Gets called when the login button is clicked.
function loginBtnClick(){

    //Fetch the user.json file and store in "users"
    fetch("users.json")
        .then (response => response.json())
        .then(function(users){
    
    //Variables for the values of the inputfields.
    let username = document.getElementById("userName").value;
    let password = document.getElementById("passWord").value;
    
    //If the given username exists in users.json, it stores the index of that user(userid) in "userIndex".
    //If the given username does not exist, it stores the value "-1" in "userIndex".
    let userIndex = users.findIndex(function(item){
        return item.usernamee === username;
    })

    //If the user didnt exist.
    if(userIndex === -1){
        alert("Wrong username and/or password");
    }
    //If the user did exist, and the password was correct.
    else if(users[userIndex].password === password){
        localStorage.setItem("loggedIn", true);
        localStorage.setItem("userID", userIndex);
        location.replace("kanban.html");
    }
    //If the user did exist but the password was wrong.
    else{
        alert("Wrong username and/or password");
    }
})
}