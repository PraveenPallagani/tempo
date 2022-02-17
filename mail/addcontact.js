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
//                   url: 'https://www.zohoapis.in/crm/v2/Leads', /* replace 'your@email.com' with your email */
//                   dataType: "json",
//                   method: 'POST',
//                   headers: {
//                     'Authorization':'Zoho-oauthtoken 1000.7f35a9c8c2084a1cace25f728522f6cb.fca753922c69f6fd840f27e7a722c1e8',
//                     'Content-Type':'application/json'
//                 },
//                   data: JSON.stringify(
//                       {
//                           data:{
//                             "Last_Name": name,
//                             "phone": phone,
//                             "Email": email,
//                             "message": message,
//                             "cperson": cperson,
//                         }
//                       }
//                   ),
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
//                 error: function (XMLHttpRequest, textStatus, errorThrown) {
//                     console.log(XMLHttpRequest, textStatus, errorThrown);
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


function addLead() {
    var name = $("#contactForm input#name").val();
    var email = $("input#email").val();
    var phone = $("input#phone").val();
    var message = $("#message").val();
    var cperson = $("input[type='radio'][name='cperson']:checked").val();
    console.log(name, email, phone, message, cperson);

    // const data ={
    //     data:[
    //         {
    //             Company: "Razorpay",
    //             Last_Name: "Alyass",
    //             First_Name: "Jones",
    //             Email: "praveenpallagani999@gmail.com",
    //             State: "India"
    //         }
    //     ]
    // };


    // console.log(data);

    $.ajax({
        type:'GET',
        // crossDomain:true,
        url: 'https://www.zohoapis.in/crm/v2/Leads',
        headers: {
            'Authorization':'Zoho-oauthtoken 1000.cb605c4f0edb551f493a30af91fb6d78.f5cbf09c823a09f4d8f193342f9fc29e',
        },
        // contentType: 'application/json',
        // dataType:'json',
        // data: JSON.stringify({data:[{"Last_Name":"lastname"}]}),
        success: function(data){
          console.log('succes: '+data);
        },
        error: function(xhr, status, err) {
            console.log(xhr, status, err);
         }
      });
    return false;
}