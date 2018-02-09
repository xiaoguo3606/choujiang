

var total=14;
var imgInfo=new Array();
var result=new Array();
var begain=null;
var shuliang=0;
var list=new Array();



$(document).ready(function(){
    
	


    


});


function begainImg(){
    $('.checkBtn').attr('src','img/no.png');
    var b=0,
        tempId='';
    for(var a=0;a<5;a++){
        b=a+1;
        tempId='#changeImg'+b;
        if($(tempId).attr('src') == 'img/default.jpg'){
            // console.log($(tempId).attr('src'))
            continue;
        }
        console.log($(tempId).attr('src'));
        list.push($(tempId).attr('src'));
    }
    console.log(list)
    shuliang=list.length;
    document.getElementById('personNum').innerText='('+shuliang+')';


    begain=window.setInterval(function(){
        var tempResult=getSomeRandomNum(5);
        var imgId='';
        for(var i=1;i<6;i++){
            imgId='#changeImg'+i;
            $(imgId).attr('src','img/'+tempResult[i-1]);
        }
    },200);
}

function stopImg(){
    window.clearInterval(begain);
    $('.checkBtn').attr('src','img/ok.png');
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
    	// console.log(temp)
    	resultArray[k]=result[temp];
    	temp2=result[0];
    	result[0]=result[temp];
    	result[temp]=temp2;
    	result.shift();
    }
    // console.log(resultArray);
    return resultArray;
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
    $('#selectArea').css('display','none');
}

function checkResult(event){
    var confirmResult=window.confirm('取消后将无法撤回，确定吗？');
    if(confirmResult){
        event.target.src='img/no.png';
        var thisId=event.target.id[11];
        $('#changeImg'+thisId).attr('src','img/default.jpg');

    }
}


function deleteItem(item,array){
    
}