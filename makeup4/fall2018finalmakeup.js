
/* first part */


$(".submenu").hide();

$(".menu").click(function(){
    $(this).next(".submenu").toggle();
});


//$(".menu").click(function(){
  //  $(".submenu").toggle();
// });




let content = ('story0.txt'); /* create a variable for ur content text file */ 

$('#story').load(content); /* load your text from your text file into the div #content */ 


$('.submenu li').click(function(){
    
    let theid = $(this).attr('id');
    $('#story').load(theid);
});


$('.submenu li').click(function(){
    let newcolor = $(this).attr('id');
    $("#source").css("background-color", newcolor);
});

