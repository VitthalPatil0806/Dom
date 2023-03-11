    function myfun(){
    var pass = document.getElementById("numb").value;
    var rev = pass.split("").reverse().join("");
    if(pass === rev){
    document.getElementById("result").innerText = "The given data is palindrom";
    document.getElementById("result").style.color = 'red';
    }else{
        document.getElementById("result").innerText = "The given data is not a palindrom"
    }
    }
    