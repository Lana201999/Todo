var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}


var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

function toDo() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var inputTime = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    var i = document.createTextNode(inputValue);
    var r = document.createTextNode(inputTime);
    var t = document.createTextNode(time);

    var span = document.createElement("SPAN");
    var txt = document.createTextNode(inputValue);
    span.className = "toDo";
    span.appendChild(txt);
    li.appendChild(span);

    var span = document.createElement("SPAN");
    var txt = document.createTextNode(inputTime);
    span.className = "timeNum";
    span.appendChild(txt);
    li.appendChild(span);

    var span = document.createElement("SPAN");
    var txt = document.createTextNode(time);
    span.className = "time";
    span.appendChild(txt);
    li.appendChild(span);

    document.getElementById("list").appendChild(li);

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}