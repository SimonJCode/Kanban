// document.querySelectorAll('p').forEach(function(h, i) {
//     if (h.innerHTML == "")
//         h.remove();
// });

let dragged = null;

setTimeout(function() {
    runDraggable();
}, 1000)

function runDraggable() {

    const cards = document.querySelectorAll(".card");
    const cards_p = document.querySelectorAll(".card-p");

    console.log("is working")
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
                this.append(dragged);
                e.preventDefault();
            })
        }
    }
}