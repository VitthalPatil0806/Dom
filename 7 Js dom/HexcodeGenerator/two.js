function colorChanger(){
    let a = document.getElementById("colorpicker").value;
    document.body.style.backgroundColor = a;
    document.getElementById("txt").value = a;
}
document.getElementById("btn").addEventListener("click",colorChanger);
