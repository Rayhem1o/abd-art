//-------About/tab-titles----------------------------------------------------------------------------//
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (let tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (let tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

//-------Submit-Form----------------------------------------------------------------------------------//
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        let params = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value,
        };

        emailjs.send("service_p82k6zu", "template_iejonzt", params)
            .then(function(response) {
                console.log("SUCCESS!", response.status, response.text);
                alert("Form submitted successfully!");
            }, function(error) {
                console.log("FAILED...", error);
                alert("Form submission failed. Please try again.");
            });
    });
});
//---------Hamburger-Meneu-Clicking-Outside-to-close--------------------------------------------------//
document.addEventListener('DOMContentLoaded', function() {
  const toggler = document.querySelector('.toggler');
  const menu = document.querySelector('.menu');

  document.addEventListener('click', function(event) {
    const isClickInsideMenu = menu.contains(event.target);
    const isClickOnToggler = toggler.contains(event.target);

    if (!isClickInsideMenu && !isClickOnToggler && toggler.checked) {
      toggler.checked = false;
    }
  });
});
