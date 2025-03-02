// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the contact form element
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    
    // Add submit event listener to the form
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // Prevent the default form submission
            event.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Validate form (basic validation)
            if (!validateForm(name, email, subject, message)) {
                return;
            }
            
            // If using a real form submission, you would send data to server here
            // For demo purposes, we'll just show a success message
            
            // Show success message
            formStatus.textContent = "Thanks for contacting us! We'll get back to you soon.";
            formStatus.className = "form-status success-message";
            
            // Reset form after successful submission
            contactForm.reset();
            
            // Clear success message after 5 seconds
            setTimeout(function() {
                formStatus.textContent = "";
                formStatus.className = "form-status";
            }, 5000);
        });
    }
    
    // Form validation function
    function validateForm(name, email, subject, message) {
        // Reset previous error message
        formStatus.textContent = "";
        formStatus.className = "form-status";
        
        // Check if required fields are filled
        if (!name || !email || !subject || !message) {
            formStatus.textContent = "Please fill in all required fields.";
            formStatus.className = "form-status error-message";
            return false;
        }
        
        // Check email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            formStatus.textContent = "Please enter a valid email address.";
            formStatus.className = "form-status error-message";
            return false;
        }
        
        return true;
    }
});