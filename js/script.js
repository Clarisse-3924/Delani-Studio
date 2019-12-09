$(document).ready(function() {

  $(".hide-design-image").click(function(){
    $("#design-showing").toggle();
    $(".hide-design-image").toggle();
  })

  $(".hide-development-image").click(function(){
    $("#development-showing").toggle();
    $(".hide-development-image").toggle();
  })

  $(".hide-product-management").click(function(){
    $("#product-management-showing").toggle();
    $(".hide-product-management").toggle();
  })

  $(document).ready(function () {
    $('.submit').click(function () {
        var Name = $('#mce-FNAME').val();
        var Email = $('#mce-EMAIL').val();
        var Message = $('#mce-MESSAGE');
        var key ='c8fbd9a0cf3958e02be2822e55cfbfc5-us4';
        if (Name == '' || Email == '' || Message == '') {
            alert('Please make sure you have filled in the form correctly!');
        } else {
            alert(' Hi ' + Name + ' We have received your message. Thank you for reaching out to us.');
        }
  
    event.preventDefault();

    curl --request GET();
--url https://<dc>.api.mailchimp.com/3.0/";
--user "c8fbd9a0cf3958e02be2822e55cfbfc5-us4";

    // $.ajax({
    //   type: "post",
    //   url: 'https://<dc>.api.mailchimp.com/3.0/',
    //   c8fbd9a0cf3958e02be2822e55cfbfc5-us4
    //   success: function(response) {
    //       console.log(response);
    //   }
  });
  })
});


