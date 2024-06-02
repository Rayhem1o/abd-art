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

function sendMail(){
  let parms = {
      name : document.getElementById("name").value,
      email : document.getElementById("email").value,
      message : document.querySelector("textarea[name='message']").value,
  }
        
        emailjs.send("service_p82k6zu","template_iejonzt",parms).then(alert("Form submitted successfully!")) 
}