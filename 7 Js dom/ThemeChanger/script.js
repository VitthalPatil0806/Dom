function changer(){
    let background = document.body;
    background.classList.toggle("dark-mode");
}
document.getElementById("btn").addEventListener("click",changer);