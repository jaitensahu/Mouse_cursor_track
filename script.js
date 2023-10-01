
let y=document.getElementById("y-h1");
let x=document.getElementById("x-h1");
document.addEventListener("mousemove", function(event) {
    var a = event.clientX; 
    var b = event.clientY; 
    console.log(event);
    x.innerText=a;
    y.innerText=b;
});