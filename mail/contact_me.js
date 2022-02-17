// $(function () {
//     $(
//         "#contactForm input,#contactForm textarea,#contactForm button"
//     ).jqBootstrapValidation({
//         preventSubmit: true,
//         submitError: function ($form, event, errors) {
//             // additional error messages or events
//         },
//         submitSuccess: function ($form, event) {
//             event.preventDefault(); // prevent default submit behaviour
//             // get values from FORM
//             var name = $("#contactForm input#name").val();
//             var email = $("input#email").val();
//             var phone = $("input#phone").val();
//             var message = $("#message").val();
//             var cperson = $("input[type='radio'][name='cperson']:checked").val();
//             // var interested = $("select#interested").val();
//            // var contactform = $("input#contactmailform").val();
//             var firstName = name; // For Success/Failure Message
//             // Check for white space in name for Success/Fail message
//             if (firstName.indexOf(" ") >= 0) {
//                 firstName = name.split(" ").slice(0, -1).join(" ");
//             }
//             $this = $("#sendMessageButton");
//             $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages
//              $.ajax({
//                   url: 'https://pinklemonadedigital.com/kalvi/mail/contact_me.php', /* replace 'your@email.com' with your email */
//                   dataType: "text",
//                   method: 'POST',
//                   data: {
//                     name: name,
//                     phone: phone,
//                     email: email,
//                     message: message,
//                     cperson: cperson,
//              },
//                 cache: false,
//                 success: function () {
//                     // Success message
//                     $("#contactForm .success").html("<div class='alert alert-success'>");
//                     $("#contactForm .success > .alert-success")
//                         .html(
//                             "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;"
//                         )
//                         .append("</button>");
//                     $("#contactForm .success > .alert-success").append(
//                         "<strong>Your message has been sent. </strong>"
//                     );
//                     $("#contactForm .success > .alert-success").append("</div>");
//                     //clear all fields
//                     $("#contactForm").trigger("reset");
//                 },
//                 error: function () {
//                     // Fail message
//                     $("#contactForm .success").html("<div class='alert alert-danger'>");
//                     $("#contactForm .success > .alert-danger")
//                         .html(
//                             "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;"
//                         )
//                         .append("</button>");
//                     $("#contactForm .success > .alert-danger").append(
//                         $("<strong>").text(
//                             "Sorry " +
//                                 firstName +
//                                 ", some error occurred. Please try again later!"
//                         )
//                     );
//                     $("#contactForm .success > .alert-danger").append("</div>");
//                     //clear all fields
//                     $("#contactForm").trigger("reset");
//                 },
//                 complete: function () {
//                     setTimeout(function () {
//                         $this.prop("disabled", false); // Re-enable submit button when AJAX call is complete
//                     }, 1000);
//                 },
//             });
//         },
//         filter: function () {
//             return $(this).is(":visible");
//         },
//     });

//     $('a[data-toggle="tab"]').click(function (e) {
//         e.preventDefault();
//         $(this).tab("show");
//     });
// });


/*When clicking on Full hide fail/success boxes */
$("#name").focus(function () {
    $(".success").html("");
});

$(function () {
    $(
        "#webinarForm input,#webinarForm textarea,#webinarForm button"
    ).jqBootstrapValidation({
        preventSubmit: true,
        submitError: function ($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function ($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var name = $("#webinarForm input#webinar_name").val();
            var email = $("input#webinar_email").val();
            var phone = $("input#webinar_phone").val();
            // var interested = $("select#interested").val();
           // var contactform = $("input#contactmailform").val();
            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(" ") >= 0) {
                firstName = name.split(" ").slice(0, -1).join(" ");
            }
            $this = $("#sendFormButton");
            $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages
             $.ajax({
                  url: 'https://pinklemonadedigital.com/kalvi/mail/contact_webinar.php', /* replace 'your@email.com' with your email */
                  dataType: "text",
                  method: 'POST',
                  data: {
                    name: name,
                    phone: phone,
                    email: email,
             },
                cache: false,
                success: function () {
                    // Success message
                    $("#webinarForm .success").html("<div class='alert alert-success'>");
                    $("#webinarForm .success > .alert-success")
                        .html(
                            "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;"
                        )
                        .append("</button>");
                    $("#webinarForm .success > .alert-success").append(
                        "<strong>Your message has been sent. </strong>"
                    );
                    $("#webinarForm .success > .alert-success").append("</div>");
                    //clear all fields
                    $("#webinarForm").trigger("reset");
                },
                error: function () {
                    // Fail message
                    $("#webinarForm .success").html("<div class='alert alert-danger'>");
                    $("#webinarForm .success > .alert-danger")
                        .html(
                            "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;"
                        )
                        .append("</button>");
                    $("#webinarForm .success > .alert-danger").append(
                        $("<strong>").text(
                            "Sorry " +
                                firstName +
                                ", some error occurred. Please try again later!"
                        )
                    );
                    $("#webinarForm .success > .alert-danger").append("</div>");
                    //clear all fields
                    $("#webinarForm").trigger("reset");
                },
                complete: function () {
                    setTimeout(function () {
                        $this.prop("disabled", false); // Re-enable submit button when AJAX call is complete
                    }, 1000);
                },
            });
        },
        filter: function () {
            return $(this).is(":visible");
        },
    });

    $('a[data-toggle="tab"]').click(function (e) {
        e.preventDefault();
        $(this).tab("show");
    });
});