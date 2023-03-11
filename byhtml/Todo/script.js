var todos = [];
let listgroup = document.querySelector(".list-group");

// function createListItem(a){
//     var li = document.createElement("h4");
//     li.setAttribute("class","item");
//     li.innerHTML = a;

//     var icon = document.createElement("li");
//     icon.setAttribute("class","fas fa-trash-alt");
//     li.appendChild(icon);
// }

document.querySelector(".btn").addEventListener("click",myInputs)
function myInputs(){
   let a = document.getElementById("addTodo").value;
    todos.push(a);
    document.getElementById("addTodo").value = "";
    var li = document.createElement("h4");
    li.setAttribute("class","items");
    li.innerHTML = a;
    li.style.color = "orange";
    li.style.fontSize = "22px";
    li.style.marginLeft = "520px";
    li.style.fontFamily = "sanserif";
    listgroup.appendChild(li);

    let edit = document.createElement("button");
    edit.setAttribute("id","edt");
    edit.innerHTML = 'EDIT';
    if(a !== ""){
        li.appendChild(edit);
    }

    edit.addEventListener("click",myEdits);
    function myEdits(){
       document.querySelector("addTodo").value = li.innerHTML;
    }
    
    var icon = document.createElement("button");
    icon.setAttribute("class","btn");
    icon.innerHTML = "Delete"
    icon.style.marginLeft = "30px"
    if(a !== ""){
    li.appendChild(icon);
    }

    icon.addEventListener("click",function(event){
        listgroup.removeChild(li);
    });
};

