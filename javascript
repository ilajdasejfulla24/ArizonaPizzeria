// Smooth scroll
$(".navbar a").click(function(e){
  e.preventDefault();
  let target = $(this).attr("href");
  $("html, body").animate({
    scrollTop: $(target).offset().top
  }, 600);
});
 
// Form validation
$("#contact-form").submit(function(e){
  e.preventDefault();
  if($("#name").val()==="" || $("#email").val()==="" || $("#message").val()===""){
    $("#msg").text("Please fill all fields").css("color","red");
  } else {
    $("#msg").text("Message sent!").css("color","green");
    $("#contact-form")[0].reset();
  }
});
 
// API quote
fetch("https://api.adviceslip.com/advice?" + new Date().getTime())
.then(res => res.json())
.then(data => {
  document.getElementById("quote").innerText = data.slip.advice;
})
.catch(() => {
  document.getElementById("quote").innerText = "Good food is the foundation of genuine happiness.";
});
