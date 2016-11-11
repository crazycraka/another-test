
localStorage.setItem("clickCounter", "0");


function clickCounter () {
    var result = Number(localStorage.getItem("clickCounter")) + 1;
    // console.log("result", result);
    localStorage.setItem("clickCounter", result)
    document.getElementById("result").innerHTML = "this worked " + result;

}