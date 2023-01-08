function clickOne() {
    // let gil =  document.getElementById("natura").src;
    // let onof = document.getElementById("antchaqr").innerHTML;
    if (document.getElementById("natura").src == "file:///C:/Users/Eka/Desktop/light/img/light-bulb2.png")
    {
        console.log(document.getElementById("natura").src)
        console.log("ainto")

        document.getElementById("natura").src =  "file:///C:/Users/Eka/Desktop/light/img/light-bulb.png";
        document.getElementById("antchaqr").innerHTML = "OFF";
}
    else {
        console.log("chaqvra")

        document.getElementById("natura").src =  "file:///C:/Users/Eka/Desktop/light/img/light-bulb2.png";
        document.getElementById("antchaqr").innerHTML = "ON";
       
    }
}




function anteba(){
    document.getElementById("shuq").src = "img/light-bulb-ON.png"
}
function chaqroba(){
    document.getElementById("shuq").src = "img/light-bulb-OFF.png"
}
