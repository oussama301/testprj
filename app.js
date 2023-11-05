//create a "close button" and append it to the list item
var myNodelist = document.getElementsByTagName("LI");
console.log(myNodelist);

for (let i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}
// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");

for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }

}
// add a "check" symbol when clicking on a list item
var list = document.querySelector('ul');
console.log(list);
list.addEventListener('click', function (ev) {
    // if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
    // }
}, false);

// Create a new list when clicking on the "Add" button
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write a task");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}
