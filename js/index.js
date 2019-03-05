$(document).ready(function() {
    //submit function
    $('#submit').click(function(e) {
        var btn = $(this),
            spinner = btn.children('.spinner'),
            text = btn.children('.text');


        if ($("form")[0].checkValidity()) {
            e.preventDefault();

            text.hide(0);
            spinner.fadeIn();

            var userid = $('#userid').val();
            var mail = $('#email').val();
            if (userid.length >= 0 && mail.length >= 0) {
                $('#userid').val(null);
                $('#email').val(null);
                // console.log('validated!');
                spinner.fadeOut(300, function() {
                    text.html('Succcess!!!').show(0);
                    btn.prop('disabled', true);
                    $('.captchaDiv').toggleClass('close');
                    $('.formData').addClass('disabled');
                    window.location.href = '/Cp7Chat/chat.html?uid='+userid+'&email='+mail;
                });
            } else {
                spinner.fadeOut(300, function() {
                    text.html('登陆失败 :(').show(0);
                });
            }
        }
    });
});