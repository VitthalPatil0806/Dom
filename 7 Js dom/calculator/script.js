
function clean() {
    document.getElementById("result").value = " ";
    }
    
    // This function display values
    function insert(val) {
    document.getElementById("result").value += val;
    }
    
    // This function evaluates the expression and returns result
    function equal() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
    }

    function back()
     { 
     let val = document.getElementById("result").value; 
     document.getElementById("result").value = val.substr(0, val.length - 1); 
    }
    