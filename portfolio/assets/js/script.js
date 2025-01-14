'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}




  // Select the form and the button
  const form = document.querySelector('.form');
  const button = document.querySelector('.form-btn');
  
  // Disable the submit button by default (for validation)
  button.disabled = true;

  // Event listener to enable the submit button when form fields are filled
  form.addEventListener('input', function() {
    const inputs = form.querySelectorAll('input, textarea');
    let isValid = true;

    // Check if all inputs are filled
    inputs.forEach(input => {
      if (!input.value) {
        isValid = false;
      }
    });

    // Enable or disable the button based on form validity
    button.disabled = !isValid;
  });

  // Event listener for form submission
  form.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the default form submission

    // Show the success message
    showSuccessMessage();

    // Submit the form after a short delay
    setTimeout(function() {
      form.submit();  // Submit the form to FormSubmit.co
    }, 3000);  // Wait for 2 seconds before submitting the form
  });

  // Function to show the success message
  function showSuccessMessage() {
    // Create success message element
    const successMessage = document.createElement('div');
    successMessage.textContent = 'The Message you sent has reached Tharun Sucessfully !!!';
    successMessage.style.backgroundColor = '#28a745';
    successMessage.style.color = 'white';
    successMessage.style.padding = '10px 20px';
    successMessage.style.marginTop = '20px';
    successMessage.style.borderRadius = '5px';
    successMessage.style.fontWeight = 'bold';
    successMessage.style.textAlign = 'center';

    // Insert the success message after the form
    form.parentNode.insertBefore(successMessage, form.nextSibling);

    // Hide the success message after 3 seconds
    setTimeout(function() {
      successMessage.style.display = 'none';
    }, 5000);
  }





// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}


// Counter Code Home
const counter = document. querySelector(".counter—number");
async function updateCounter() {
  let response= await fetch("https://irggo3rjtuepedqfqbjcv7nbu40fmfwd.lambda-url.ap-south-1.on.aws/");
  let data = await response.json();
  counter. innerHTML = ` No. of Visitors : ${data}`;
}

updateCounter() ;