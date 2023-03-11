function counter(){
    let v = document.getElementById("input").value;
    let v1 = v.replace(/\s+/g, " ").trim();
    let v2 = v1.split(" ");
    let r = v2.length;
    document.getElementById("word-count").innerText = 'No. of Words are :' + r;
    document.getElementById("word-count").style.color = "red";
}