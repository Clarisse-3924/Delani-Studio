$(document).ready(function() {

  $("#design").click(function(){
    $("#hide-design").toggle();
  })

  $("#development").click(function(){
    $("#hide-development").toggle();
  })

  $("#productManagement").click(function(){
    $("#product-management").toggle();
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
  })
});

    event.preventDefault();
  })

  
})