var showbox1= false;

document.getElementById("button").addEventListener("click", function() {
    var box1=document.getElementById("desp__contenedor");
    var box2=document.getElementById("line");
    var box3=document.getElementById("button");
    var box4=document.getElementById("chevron");


    if (!showbox1) {
        box1.style.display="flex";
        box2.style.width="80%";
        box3.style.border="2px solid #36c";
        box4.className="fa-solid fa-chevron-up";
        showbox1= true;
    }
    else{
        box1.style.display="none";
        box2.style.width="45%";
        box3.style.border="20px solid white";
        box4.className="fa-solid fa-chevron-down";
        showbox1= false;

    }
})




