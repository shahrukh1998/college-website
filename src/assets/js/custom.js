function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
    document.querySelector('.navbar-barIcon').style ='display:none';

}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginRight= "0";
    document.querySelector('.navbar-barIcon').style ='display:block';

}


$(document).ready(function() {
//     $(".fancybox").fancybox({
//         openEffect: "none",
//         closeEffect: "none"
//     });

    $(".zoom").hover(function () {

        $(this).addClass('transition');
    }, function () {

        $(this).removeClass('transition');
    });

    $('#enquiry-form').on('submit', function (e) {

        e.preventDefault();
        $.ajax({

            type: "POST",
            url: '/enquiry-form',
            data: $(this).serialize(),
            dataType: 'json',
            success: function (data) {

                if (data.errors) {
                    if (data.errors.hasOwnProperty('email')){

                        $('input[name="email"]').addClass('error-border');

                    }
                    if (data.errors.hasOwnProperty('phone')){
                        $('input[name="phone"]').addClass('error-border');

                    }
                    if (data.errors.hasOwnProperty('name')){
                        $('input[name="name"]').addClass('error-border');
                    }

                }else {

                    $('#success').css('display','block');
                    $("input[type=text],input[type=email],input[type=phone], textarea,select").val("");
                }

            },
            error: function (data) {

            }


        })
    });


//

    $('#closeIcon').click(function(){
        $('#success').css('display','none');
        $('#error').css('display','none');
    })

});
// When the user clicks anywhere outside of the modal, close it


$('.EnquiryShow').click(function(){
    if($('section.Enquiry2019').css('right')=='0px'){
        $('section.Enquiry2019').css('right','-400px');

    } else {
        $('section.Enquiry2019').css('right','0px');
    }


});

$('.whatsappButton').click(function(){
    if($('.whatsappCall').css('right')=='-115px'){
        $('.whatsappCall').css('right','0px');

    }
    else {
        $('.whatsappCall').css('right','-115px');
    }
});
$('.callingButton').click(function(){
    if($('.callingCall').css('right')=='-115px'){
        $('.callingCall').css('right','0px');

    }
    else {
        $('.callingCall').css('right','-115px');
    }
});
