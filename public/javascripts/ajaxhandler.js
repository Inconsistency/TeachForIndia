function handleGet(num)
{
  var table = document.getElementById("tabla");
  $(table).fadeOut('slow');
  $('.message').fadeOut('slow');
  setTimeout(function(){}, 2000);
  
  var xmlhttp;
  if (window.XMLHttpRequest)// code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  else  // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  
  var tbody = document.getElementById('tabla').getElementsByTagName('tbody')[0]; // reconstruct table
  $('#tabla tbody tr').remove();

  switch(num){
    case 1: xmlhttp.open("POST", "/get", true);
            xmlhttp.send();
            $('#waitget').fadeIn('slow');
            break;
    case 2: var title = document.getElementById('title').value;
            if(validate(title)){
              xmlhttp.open("POST", "/title/" + title, true);
              xmlhttp.send();
              $('#waitget').fadeIn('slow');
            }
            else $('#validerrorget').fadeIn('slow');
            break;
    case 3: var author = document.getElementById('author').value;
            if(validate(author)){
              xmlhttp.open("POST", "/author/" + author, true);
              xmlhttp.send();
              $('#waitget').fadeIn('slow');
            }
            else 
              $('#validerrorget').fadeIn('slow');
            break;
  }

  xmlhttp.onreadystatechange=function(){
    if (xmlhttp.readyState==4 && xmlhttp.status==200){
      $('#waitget').fadeOut('slow');
      var obj =xmlhttp.responseText;
      obj = JSON.parse(obj);     
      if((obj=='Nothing Doing') || (obj.length < 1))
        $('#error').fadeIn('slow');
      else{
        document.getElementById('foundspan').innerHTML = "Found " + obj.length + " Records";
        $('#found').fadeIn('slow');
        for(i=obj.length-1; i>=0; i--){
          var row = tbody.insertRow(-1);
          var cell0 = row.insertCell(0);
          var cell1 = row.insertCell(1);
          var cell2 = row.insertCell(2);
          cell0.innerHTML = obj[i].title;
          cell1.innerHTML = obj[i].author;
          cell2.innerHTML = obj[i].description;
        }
        $(table).fadeIn('slow');
      }
   }
   else 
    $('connerrorget').fadeIn('slow');
  }
 }
	

 function handlePut(){
  var xmlhttp;
  $('.message').fadeOut('slow');
  $('#fail').fadeOut('slow');
  $('#success').fadeOut('slow');

  var xmlhttp;
  if (window.XMLHttpRequest)// code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  else  // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP"); 
  
  title = document.getElementById('form_title').value;
  author = document.getElementById('form_author').value;
  description = document.getElementById('form_description').value;

  if(validate(title) && validate(author) && validate(description)){
    xmlhttp.open("PUT", "/put", true);
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlhttp.send("title=" + title + "&author=" + author + "&description=" + description);
    $('#waitput').fadeIn('slow');
  }
  else
    $('#validerrorput').fadeIn('slow');



   xmlhttp.onreadystatechange=function(){
    if (xmlhttp.readyState==4 && xmlhttp.status==200){
      $('#waitput').fadeOut('slow');
      var obj =xmlhttp.responseText;        
      if(obj=='Success')
        $('#success').fadeIn('slow');
      else
        $('#fail').fadeIn('slow');
    }
    else
      $('connerrorsubmit').fadeIn('slow');
    }
};

function validate(key){
  if(typeof(key)!='string' || (key == "")) 
    return false;
  return true;
};