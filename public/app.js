var main = document.getElementById("main");
var inp = document.getElementById("inp");

function add() {
    if (inp.value == "") {
        alert("please enter todo");
    } else {
        var li = document.createElement("li");
        var litext = document.createTextNode(inp.value);
        li.appendChild(litext);


        var editBtn = document.createElement("BUTTON");
        var editBtntext = document.createTextNode("edit");
        editBtn.appendChild(editBtntext);
        editBtn.setAttribute("onclick", "edit(this)");
        li.appendChild(editBtn);

        var delBtn = document.createElement("button");
        var delBtntext = document.createTextNode("del");
        delBtn.appendChild(delBtntext);
        delBtn.setAttribute("onclick", "del(this)")
        li.appendChild(delBtn);

        main.appendChild(li);

        inp.value = "";
    }
}

function edit(element) {
    var newvalue = prompt("enter updated value");
    console.log(element.parentNode.firstChild.nodeValue);
    element.parentNode.firstChild.nodeValue = newvalue;
}

function del(element) {
    element.parentNode.remove();
}


function dltall() {
    main.innerHTML = "";
}