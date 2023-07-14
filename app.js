function change()
{
    var img=document.getElementById("bulb");
    if(img.src.match("off"))
    {
        img.src="./assets/bulb on.png";
    }
    else{
        img.src="./assets/bulb off.png"
    }
}