$(function(){
    $('#modal-form').submit(function(e){
        e.preventDefault(); //это чтобы форма не отправлялась через браузер, только по AJAX
        var formdata='name='+$('#name').val()+'&phone='+$('#phone').val()+'&message='+$('#message').val();
        //запишем все данные формы в переменную data
        $.ajax({
            url: 'send.php',
            data: formdata,
            type: 'post',
            success: function(respond){
                $(".modal-content").css('display', 'none') &&
                $(".modal-background").css('display', 'block') &&
                $(".success-message").css('display', 'block') && $("#name").val("") && $("#phone").val("") && $("#message").val("");
            },
            error: function(){
                alert('Произошла ошибка. Повторите попытку позже.');
            }
        });
    });
});

$(function () {
    $('#introForm').submit(function (e) {
        e.preventDefault(); //это чтобы форма не отправлялась через браузер, только по AJAX
        var formdata = 'introName=' + $('#introName').val() + '&intro-form-tel=' + $('#intro-form-tel').val();
        //запишем все данные формы в переменную data
        $.ajax({
            url: 'sendIntro.php',
            data: formdata,
            type: 'post',
            success: function (respond) {
                $(".modal-background").css('display', 'block') && $(".success-message").css('display', 'block') && $("#introName").val("") && $("#intro-form-tel").val("");
            },
            error: function () {
                alert('Произошла ошибка. Повторите попытку позже.');
            }
        });
    });
});

$(function () {
    $('#form-btm').submit(function (e) {
        e.preventDefault(); //это чтобы форма не отправлялась через браузер, только по AJAX
        var formdata = 'name-btm=' + $('#name-btm').val() + '&intro-form-tel-bottom=' + $('#intro-form-tel-bottom').val();
        //запишем все данные формы в переменную data
        $.ajax({
            url: 'sendBtm.php',
            data: formdata,
            type: 'post',
            success: function (respond) {
                $(".modal-background").css('display', 'block') && $(".success-message").css('display', 'block') && $("#introName").val("") && $("#intro-form-tel").val("");
            },
            error: function () {
                alert('Произошла ошибка. Повторите попытку позже.');
            }
        });
    });
});