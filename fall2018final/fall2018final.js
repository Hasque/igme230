

$(".list").hide();



$('.top').click(function() {
    $(".list").show();
});


let content = $('article0.txt');



$('#choose-content').change(function(){
    content = $(this).val();
    $('#content').load(content);

});



