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

  // $("#contact").submit(function(event) {
  //   document.getElementById("contact").submit();
  //   alert("We have received your message. Thank you for reaching out to us");

  $("#Contact-Us").submit(function (event) {
    var name = $("input:name").val();
    var email = $("input:email").val();
    var message = $("input:comment").val();
    if (name || email || message != '') {
      alert("Thank you " + name + " your message is well received !");
    } else {
      alert('Invalid input');
    }
    event.preventDefault();

    $.ajax({
      type: "post",
      url: "www.example.com/subfolder/page.php",
      data: {
          myLuckyNumber: 13
      },
      success: function(response) {
          console.log(response);
      }
  });
  })
});


