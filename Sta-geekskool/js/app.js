var x = 20;
var y = 20;
var texdata;
var PI = 3.14;
var commandArr = [];
var argsArr = [];
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");



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
        ctx.arc(temp[0], temp[1], temp[2], temp[3], temp[4] * 3.14);
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

    if (getCommand() === 'line' && getArgs().length === 2) {
        var temp = getArgs();
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(300, 150);
        ctx.stroke();

    }

    if (getCommand() === 'ellipse' && getArgs().length === 7) {


    var temp = getArgs(); 
    ctx.beginPath();
    ctx.ellipse(temp[0],temp[1],temp[2],temp[3],temp[4]*(PI/180),temp[5],temp[6]*PI);
    ctx.stroke(); 
    }







});
