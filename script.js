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
  closeButton.addEventListener('click', function () {
    modal.remove();
  });

  // Event listener to modal for closing when clicking outside content
  modal.addEventListener('click', function (event) {
    if (event.target === modal) {
      modal.remove();
    }
  });

  // Prevent default drag behavior
  modalImage.addEventListener('dragstart', function (event) {
    event.preventDefault();
  });

  // Variables for zoom and drag functionality
  let zoomed = false;
  let isDragging = false;
  let startX, startY, initialLeft, initialTop;

  modalImage.addEventListener('dblclick', function (event) {
    if (!zoomed) {
      const rect = modalImage.getBoundingClientRect();
      const offsetX = event.clientX - rect.left;
      const offsetY = event.clientY - rect.top;
      modalImage.style.transformOrigin = `${offsetX}px ${offsetY}px`;
      modalImage.style.transform = 'scale(2)'; // Adjust the zoom level as needed
      modalImage.style.cursor = 'move';
      modalImage.style.position = 'absolute';
      zoomed = true;
    } else {
      modalImage.style.transform = 'scale(1)';
      modalImage.style.left = '0px';
      modalImage.style.top = '0px';
      modalImage.style.position = 'static';
      modalImage.style.cursor = 'zoom-in';
      zoomed = false;
    }
  });

  modalImage.addEventListener('mousedown', function (event) {
    if (zoomed) {
      isDragging = true;
      startX = event.clientX;
      startY = event.clientY;
      initialLeft = modalImage.offsetLeft;
      initialTop = modalImage.offsetTop;
      modalImage.style.cursor = 'grabbing';
      event.preventDefault(); // Prevent default behavior
    }
  });

  modalImage.addEventListener('mouseup', function () {
    isDragging = false;
    modalImage.style.cursor = 'move';
  });

  modalImage.addEventListener('mousemove', function (event) {
    if (isDragging) {
      const offsetX = event.clientX - startX;
      const offsetY = event.clientY - startY;
      modalImage.style.left = `${initialLeft + offsetX}px`;
      modalImage.style.top = `${initialTop + offsetY}px`;
    }
  });

  modalImage.addEventListener('mouseleave', function () {
    if (isDragging) {
      isDragging = false;
      modalImage.style.cursor = 'move';
    }
  });
}

// To initialize the image click event listeners
function initImageClick() {
  const galleryItems = document.querySelectorAll('.gallery-item img');
  galleryItems.forEach(function (item) {
    item.addEventListener('click', function () {
      createModal(item.src);
    });
  });
}

// Initialize the click event listeners on page load
document.addEventListener('DOMContentLoaded', initImageClick);


