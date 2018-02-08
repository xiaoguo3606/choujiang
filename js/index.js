

var total=14;
var imgInfo=new Array();
var result=new Array();
var begain=null;



$(document).ready(function(){
    
	getSomeRandomNum(2)


    


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
    	console.log('Random Number Error!');
        return;
    }
    for(var i=0;i<total;i++){
    	result[i]=imgInfo[i];
    }
    var resultArray=new Array();
    var temp=0;
    var temp2='';
    var temp3=total;
    for(var k=0;k<num;k++){
    	console.log(result)
    	temp3--;
    	temp=Math.ceil(temp3*Math.random());
    	console.log(temp)
    	resultArray[k]=result[temp];
    	temp2=result[0];
    	result[0]=result[temp];
    	result[temp]=temp2;
    	result.shift();
//  	temp3--;
    }
    console.log(resultArray)
    
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