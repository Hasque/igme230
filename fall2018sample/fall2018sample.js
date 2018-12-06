
$('.submenu').hide();

$('.menubox').click(function() {
    $(this).find('.submenu').toggle();
});


let content = ('content1.txt'); // put ur stuff in a variable

$('#choose-content').change(function(){
    content = $(this).val();
    $('#content').load(content);

});


let content = ("content1.txt");

$("#choose-content").val(content);

$("#content").load(content);

$("#choose-content").change(function() {
    content = $(this).val();
    $("#content").load(content);
    
});
