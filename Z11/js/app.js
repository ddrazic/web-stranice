$(document).foundation();

$('#gumb1').click(function(){

    $('#os').css('background-color','yellow')
    
    return false;
});

$("#naslov").hover(function(){
    $('div').css('border','1px solid purple');
  },
  function(){
    $('div').css('border','none');

    return false;
  });


$('#gumb2').dblclick(function(){

    $('#polozaj').fadeOut();
    
    return false;
});

$("#gumb3").click(function(){
    alert("To je sve!");

    return false;
  });