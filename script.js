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
//script for arrow buttons//
document.getElementById('scroll-to-sculptures').addEventListener('click', function() {
  document.getElementById('sculpture').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('scroll-to-paintings').addEventListener('click', function() {
  document.getElementById('paintings-sketches').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('scroll-to-text').addEventListener('click', function() {
  document.getElementById('My Art').scrollIntoView({ behavior: 'smooth' });
});

//-------JavaScript to handle the image click event and display the image in a larger size---------//

// Function to create a modal
function createModal(imageSrc) {
  // Modal elements
  const modal = document.createElement('div');
  modal.classList.add('modal');

  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');

  const closeButton = document.createElement('span');
  closeButton.classList.add('close-button');
  closeButton.innerHTML = '&times;';

  const modalImage = document.createElement('img');
  modalImage.src = imageSrc;
  modalImage.classList.add('modal-image');

  // Append elements to modal
  modalContent.appendChild(closeButton);
  modalContent.appendChild(modalImage);
  modal.appendChild(modalContent);

  // Append modal to body
  document.body.appendChild(modal);

  // Event listener to close button
  closeButton.addEventListener('click', function() {
    modal.remove();
  });

  // Event listener to modal for closing when clicking outside content
  modal.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.remove();
    }
  });

  // Zoom functionality
  let zoomed = false;
  modalImage.addEventListener('click', function() {
    if (zoomed) {
      modalImage.style.transform = 'scale(1)';
      modalImage.classList.remove('zoom-in');
      zoomed = false;
    } else {
      modalImage.style.transform = 'scale(2)';
      modalImage.classList.add('zoom-in');
      zoomed = true;
    }
  });
}

// To initialize the image click event listeners
function initImageClick() {
  const galleryItems = document.querySelectorAll('.gallery-item img');
  galleryItems.forEach(function(item) {
    item.addEventListener('click', function() {
      createModal(item.src);
    });
  });
}

// Initialize the click event listeners on page load
document.addEventListener('DOMContentLoaded', initImageClick);
