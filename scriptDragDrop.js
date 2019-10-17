let dragged = null;

setTimeout(function() {
    runDraggable();
}, 500)

function runDraggable() {

    const cards = document.querySelectorAll(".card");
    const cards_p = document.querySelectorAll(".card-p");

    getSetCount();

    for (let i = 0; i < cards_p.length; i++) {
        const p = cards_p[i];

        p.addEventListener("dragstart", function(e) {

            // For Firefox browser
            e.dataTransfer.setData('text/plain', null);

            dragged = this;
            setTimeout(function() {
                p.style.display = "none";
            }, 0)
        })

        p.addEventListener("dragend", function(e) {
            setTimeout(function() {
                dragged.style.display = "block";
                dragged = null;
            }, 0)
        })

        for (let x = 0; x < cards.length; x++) {
            const card = cards[x];

            card.addEventListener("dragover", function(e) {
                e.preventDefault();
            })

            card.addEventListener("dragenter", function(e) {
                e.preventDefault();
            })

            card.addEventListener("drop", function(e) {
                let id = "";
                if (window.navigator.vendor.length > 0)
                    id = e.path[0].id
                else
                    id = e.explicitOriginalTarget.id;
                setRemoveObject(id);
                this.append(dragged);
                e.preventDefault();
            })
        }
    }
}


// Remove from array or push to array
var variable = "";

function setRemoveObject(id) {
    let loc = localStorage;

    let current = dragged.attributes.name.value;
    let list_name = "my" + id.slice(0, 1).toUpperCase() + id.slice(1);

    let identity = dragged.attributes.id.value;
    let str = document.getElementById(identity).innerHTML;


    let list = JSON.parse(loc.getItem(current));
    for (let i in list) {
        if (identity === list[i].identity) {
            list.splice(i, 1);
        }
    }
    loc.removeItem(current);
    if (list != null && list.length > 0)
        loc.setItem(current, JSON.stringify(list));

    let obj = null;
    if (variable !== dragged)
        obj = getObject(str, list_name, identity); // getObject() function from scriptKanban.js

    list = JSON.parse(loc.getItem(list_name)) || [];
    if (obj != null)
        list.push(obj);

    loc.removeItem(list_name);
    loc.setItem(list_name, JSON.stringify(list))

    todo_info = JSON.parse(loc.getItem("myTodo"));
    doing_info = JSON.parse(loc.getItem("myDoing"));
    testing_info = JSON.parse(loc.getItem("myTesting"));
    done_info = JSON.parse(loc.getItem("myDone"));

    variable = dragged;
}

// Get array name
function getArrayName(str) {
    let name = "my" + str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
    return name;
}


// Get and set count
function getSetCount() {
    let loc = localStorage;
    let done_count = document.getElementById("done_count");
    let left_count = document.getElementById("left_count");
    let todo = (loc.getItem("myTodo") != null) ? JSON.parse(loc.getItem("myTodo")) : [];
    let doing = (loc.getItem("myDoing") != null) ? JSON.parse(loc.getItem("myDoing")) : [];
    let testing = (loc.getItem("myTesting") != null) ? JSON.parse(loc.getItem("myTesting")) : [];
    let done = (loc.getItem("myDone") != null) ? JSON.parse(loc.getItem("myDone")) : [];

    left_count.innerHTML = todo.filter(x => x.id == userId).length + doing.filter(x => x.id == userId).length + testing.filter(x => x.id == userId).length;
    done_count.innerHTML = done.filter(x => x.id == userId).length;
}

// loc.clear()