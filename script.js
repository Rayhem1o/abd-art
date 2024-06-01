var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) 
{
  for (let tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (let tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

//<!-------Message Form------->

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.querySelector("textarea[name='message']").value;

        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);

        // You can perform further actions here, such as sending the data to a server
        // For demonstration purposes, we'll just log the form data to the console

        alert("Form submitted successfully!");
    });
});
