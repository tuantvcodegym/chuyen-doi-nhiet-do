function chuyenDoi() {
    var a = document.getElementById("input").value;
    var b = (a-32)/1.8;
    document.getElementById("show").innerHTML = " Do Celcius la :" + b;
}