// scripts.js
let currentPage = 1;

document.addEventListener('DOMContentLoaded', () => {
    showPage(currentPage);
});

function showPage(page) {
    document.querySelectorAll('.form-page').forEach((pageElement, index) => {
        pageElement.style.display = (index + 1 === page) ? 'block' : 'none';
    });
}

function nextPage(page) {
    if (validatePage(page)) {
        currentPage++;
        showPage(currentPage);
    }
}

function prevPage(page) {
    currentPage--;
    showPage(currentPage);
}

function validatePage(page) {
    if (page === 1) {
        const phoneNumber = document.getElementById('phoneNumber').value;
        const phonePattern = /^[0-9]{10,15}$/;
        if (!phonePattern.test(phoneNumber)) {
            alert('Please enter a valid phone number.');
            return false;
        }
    } else if (page === 2) {
        const email = document.getElementById('email').value;
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return false;
        }
    }
    return true;
}

function submitForm(event) {
    event.preventDefault();
    if (document.getElementById('terms').checked) {
        alert('Form submitted successfully!');
        document.getElementById('multiStepForm').reset();
        currentPage = 1;
        showPage(currentPage);
    } else {
        alert('Please agree to the terms and conditions.');
    }
}
