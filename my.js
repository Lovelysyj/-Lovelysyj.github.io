function adjustIframe(){
    var ifm= document.getElementById("bi_iframe");
    ifm.height=document.documentElement.clientHeight;
    ifm.width=document.documentElement.clientWidth;
}

function displayResult() {
    document.getElementById("myHeader").innerHTML = "You will see<br/>the most lovely beauty in your life  ";
}

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var image = new Image();
image.src = "pulboo48.png";

// 绘制原始大小的图像
ctx.drawImage(image, 0, 0);

// 绘制调整大小后的图像
ctx.drawImage(image, 0, 0, 400, 300);
