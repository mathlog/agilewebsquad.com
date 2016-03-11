$(function() {
    $('#contactform').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true
            },
            answer: {
                required: true,
                answercheck: true
            }
        },
        messages: {
            name: {
                required: "Please enter your name",
                minlength: "your name must consist of at least 2 characters"
            },
            email: {
                required: "Provide and e-mail address to contact you"
            },
            message: {
                required: "Message is empty",
                minlength: "Kindly provide enough information"
            },
            answer: {
                required: "A required field is missing"
            }
        },
        submitHandler: function(form) {
            $(form).ajaxSubmit({
                type:"POST",
                data: $(form).serialize(),
                url:"http://localhost/php/process.php",
                success: function() {
                    $('#contacto :input').attr('disabled', 'disabled');
                    $('#contacto').fadeTo( "slow", 0.15, function() {
                        $(this).find(':input').attr('disabled', 'disabled');
                        $(this).find('label').css('cursor','default');                     
                        $('#success').fadeIn();
                    });
                },
                error: function() {
                    $('#contacto').fadeTo( "slow", 0.15, function() {
                        $('#error').fadeIn();
                    });
                }
            });
        }
    });
});
