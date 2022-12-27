var toggleButton = document.getElementById('buttonClick');
var circleButton = document.getElementById('circleClick');
var getHeading = document.getElementById('heading');

var count = 0;
toggleButton.addEventListener('click',function(){


    if(count%2 == 0)
    {
        var getBodyColor = document.getElementsByTagName("BODY")[0];
        getBodyColor.style.backgroundColor = "black";
        getHeading.style.color ="white";
        toggleButton.style.backgroundColor ="white";
        toggleButton.style.border = "1px solid white";
        circleButton.style.float = "right";
        count++;
    }
    else{
        var getBodyColor = document.getElementsByTagName("BODY")[0];
        getBodyColor.style.backgroundColor = "white";
        getHeading.style.color ="black";
        toggleButton.style.backgroundColor ="white";
        toggleButton.style.border = "1px solid black";
        circleButton.style.float = "left";
        count++;
    }
});