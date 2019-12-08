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

  $("#contact").submit(function(event) {
    document.getElementById("contact").submit();
    alert("We have received your message. Thank you for reaching out to us");

    
    event.preventDefault();
  })

  
})