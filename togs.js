$(document).ready(function(){
    $('input[type="radio"]').click(function(){
        var inputValue = $(this).attr("value");
        var contact2box = $("." + inputValue);
        $(".contact2").not(contact2box).hide();
        $(contact2box).show();
    });
});