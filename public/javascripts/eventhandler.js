$(document).ready(function(){
	$('#title').keydown(function (e){
        if(e.keyCode == 13){
            e.preventDefault();
            handleGet(2);
        }
    });
	$('#author').keydown(function (e){
        if(e.keyCode == 13){
            e.preventDefault();
            handleGet(3);
        }
    });
	$('#newdataform').keydown(function (e){
        if(e.keyCode == 13){
            e.preventDefault();
            handlePut();
        }
    });
});