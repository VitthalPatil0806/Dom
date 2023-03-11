
function hold(){
   let a = document.getElementById("binary").value;
   let b = parseInt(a,2);
   document.querySelector(".result").innerHTML = "Decimal Number : " + b;
   event.preventDefault();
}
document.querySelector(".btn").addEventListener("click",hold);