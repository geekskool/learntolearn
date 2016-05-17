var x = 20;
var y = 20;
var texdata;
var commandArr = [];
var argsArr = [];
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var PI = 3.14;



function getCommand() {

    var command = '',
        i = 0;
    var str = texdata;
    commandArr = str.split("");
    while (commandArr[i] != '(') {
        command = command + commandArr[i];
        i++;
    }
    commandArr = [];
    return command;
}

function getArgs() {
    argsArr = texdata;
    var indx = 0;
    while (indx < argsArr.length) {
        if (argsArr.slice(indx, indx + 1) == '(') {
            argsArr = argsArr.slice(indx + 1, argsArr.length - 1);
        }
        indx++;
    }
    var temp = argsArr;
    argsArr = [];
    return temp.split(",");

}

$("button").click(function() {

    // console.log("user input command   " + command);
    // console.log(arr);


    texdata = $(".text").val();
    console.log(getCommand());
    console.log(getArgs());

    if (getCommand() === 'rectangle' && getArgs().length === 4) {

        var temp = getArgs();
        ctx.rect(temp[0], temp[1], temp[2], temp[3]);
        ctx.stroke();


    }
    if (getCommand() === 'circle' && getArgs().length === 5) {

        var temp = getArgs();
        ctx.beginPath();
        ctx.arc(temp[0], temp[1], temp[2], temp[3], temp[4] * PI);
        ctx.stroke();

    }

    if (getCommand() === 'triangle' && getArgs().length === 3) {
        var temp = getArgs();
        ctx.beginPath();
        ctx.moveTo(temp[0], temp[0]);
        ctx.lineTo(temp[0], temp[1]);
        ctx.lineTo(temp[1], temp[1]);
        ctx.closePath();
        ctx.stroke();

    }

    if (getCommand() === 'rotate' && getArgs().length === 1) {
        var temp = getArgs();
        ctx.rotate(temp[0]);        
    }
    if (getCommand() === 'translate' && getArgs().length === 2) {
        var temp = getArgs();
        ctx.translate(temp[0], temp[1]);        
    }
    if (getCommand() === 'transform' && getArgs().length === 6) {
        var temp = getArgs();
        ctx.transform(temp[0], temp[1], temp[2], temp[3], temp[4], temp[5]);
    }
    if (getCommand() === 'scale' && getArgs().length === 2) {
        var temp = getArgs();
        ctx.scale(temp[0], temp[1]);        
    }
    if (getCommand() === 'clearRect' && getArgs().length === 4) {

<<<<<<< HEAD
        var temp = getArgs();
        ctx.clearRect(temp[0], temp[1], temp[2], temp[3]);
    }
    if (getCommand() === 'fillRect' && getArgs().length === 4) {
||||||| merged common ancestors
=======
    if (getCommand() === 'pie' && getArgs().length === 5) {

        var temp = getArgs();
        ctx.beginPath();
        ctx.moveTo(temp[0], temp[1]);
        ctx.arc(temp[0], temp[1], temp[2], temp[3], temp[4] * PI);
        ctx.lineTo(temp[0],temp[1]);
        // ctx.lineTo(temp[1],temp[]);
        ctx.stroke();

    }

    if (getCommand() === 'text' && getArgs().length >= 3) {
        var temp = getArgs();
        var string = "";
        for(var i = 2; i<temp.length;i++) {
        	string += temp[i];
        }
        ctx.beginPath();
        ctx.font = "40px Arial";
        ctx.fillText(""+string,temp[0],temp[1]);
        ctx.stroke();

    }



>>>>>>> rahul

        var temp = getArgs();
        ctx.fillRect(temp[0], temp[1], temp[2], temp[3]);
    }
});
