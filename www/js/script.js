$(function() {
    $('.card').click(function () {
        $('#dialog_img').attr('src', $(this).find('.card-img img').attr('src'));
        $('#dialog_title_description').html($(this).find('.t-title').html());
        $('#dialog_item_description').html($(this).find('.item_description').html());
        $('#dialog_price').html($(this).find('.tag span').html());
        $("#dialog").dialog({
            maxWidth: Math.min(320, $(window).width() * .8),
            modal: true,
            fluid: true,
            resizable: false
        });
    });
    $('#buy_now').click(function () {
        $("#dialog").dialog("close");
    });
});

