// window.onload = function (){
//     let seconds = 00;
//     let tens = 00;
//     let second = document.getElementById("second");
//     let ten = document.getElementById("tens");
//     let start = document.getElementById("start");
//     let stop = document.getElementById("stop");
//     let reset = document.getElementById("reset");
//     let interval;
//     start.onclick = function (){
//         clearInterval(interval);
//         interval = setInterval(startWatch,10);
//     }
//     stop.onclick = function (){
//         clearInterval(interval);
//     }
//     reset.onclick = function (){
//         clearInterval(interval);
//         seconds = "00";
//         tens = "00";
//         second.innerHTML = seconds;
//         ten.innerHTML = tens;
//     }


//     function startWatch(){
//         tens++;
//         if(tens<=9){
//             ten.innerHTML = "0" + tens;
//         }
//        if(tens>9){
//             tens.innerHTML = tens;
//         }
//        if(ten>99){
//             console.log("seconds");
//             seconds++;
//             second.innerHTML = "0" + seconds;
//             tens = 0;
//             ten.innerHTML = "0" + 0;
//         }
//        if(second>9){
//             second.innerHTML = seconds;
//         }
//     }
// }



window.onload = function (){
    seconds = 00;
    tens = 00;
    let one = document.getElementById("seconds");
    let two = document.getElementById("tens");
    let three = document.getElementById("start");
    let four = document.getElementById("stop");
    let five = document.getElementById("reset");
    let interval;

    three.onclick = function(){
        clearInterval(interval);
        interval = setInterval(timeOut,10)
    }
    four.onclick = function(){
        clearInterval(interval);
    }
    five.onclick = function (){
        clearInterval(interval);
        seconds = "00";
        tens = "00";
        one.innerHTML = seconds;
        two.innerHTML = tens;
    }
    
    function timeOut(){
        tens++;
        if(tens<=9){
            two.innerHTML = "0" + tens;
        }
        if(tens>9){
            two.innerHTML = tens;
        }
        if(tens>99){
            console.log("seconds");
            seconds++;
            one.innerHTML = "0" + seconds;
            tens = 0;
            two.innerHTML = "0" + 0;
        }
        if(seconds>9){
            one.innerHTML = seconds;
        }
    }
}
