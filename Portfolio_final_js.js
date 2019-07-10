// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 110 || document.documentElement.scrollTop > 110) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

let submit = document.getElementsByClassName("submitJS")[0];
submit.addEventListener("click",confirmation,false)
function confirmation() {
    Swal.fire({
    position: 'center', 
    type: 'success',  
    title: 'Your request has been submitted',
    showConfirmButton: false,
    timer: 2000
})   
}