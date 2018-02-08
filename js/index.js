

var total=14;
var imgInfo=[];
var result=[];
var begain=null;



$(document).ready(function(){
    



    


});


function begainImg(){
    begain=window.setInterval(function(){
        var i=Math.ceil(total*Math.random());
        $('#changeImg').attr('src','img/'+imgInfo[i]);
        result[0]=imgInfo[i];
    },200);
}

function stopImg(){
    window.clearInterval(begain);
}

function getSomeRandomNum(num){
    if(num<=0 || num>total){
        return;
    }
    
}

function readFiles(){
    var fileInput=document.getElementById('selectFile');
    var files=fileInput.files;
    total=files.length;
    console.log(files);
    for(var j=0;j<total;j++){
        imgInfo[j]=files[j].name;
    }
    console.log(imgInfo);
}