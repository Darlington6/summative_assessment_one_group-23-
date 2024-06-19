// Get the registration form by its ID and add an event listener for the 'submit' event
document.getElementById('registration_form').addEventListener('submit', function(event) {
  // Prevent the form from submitting the traditional way (reloading the page)
  event.preventDefault();

  // Get the values from the form inputs by their respective IDs
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone_nbr = document.getElementById('phone_number').value;
  const event_date = document.getElementById('event_date').value;
  const tickets = document.getElementById('number_of_tickets').value;

  // Define regex patterns for validating the input values
  const namePattern = /^[a-zA-Z\s]+$/; // Letters and spaces only
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email format
  const phone_nbrPattern = /^\(\d{3}\) \d{3}-\d{4}$/; // Phone number in format (123) 456-7890
  const event_datePattern = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/; // Date in format MM/DD/YYYY

  // Validate the name input against the name pattern
  if (!namePattern.test(name)) {
    alert("Please enter a valid name (letters and spaces only).");
    return false; // Stop the form submission
  }

  // Validate the email input against the email pattern
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false; // Stop the form submission
  }

  // Validate the phone number input against the phone number pattern
  if (!phone_nbrPattern.test(phone_nbr)) {
    alert("Please enter a valid phone number in the format (123) 456-7890.");
    return false; // Stop the form submission
  }

  // Validate the event date input against the event date pattern
  if (!event_datePattern.test(event_date)) {
    alert("Please enter a valid date in the format MM/DD/YYYY.");
    return false; // Stop the form submission
  }

  // Validate the number of tickets is between 1 and 10
  if (tickets < 1 || tickets > 10) {
    alert("Please enter a number of tickets between 1 and 10.");
    return false; // Stop the form submission
  }

  // If all validations pass, display a success message
  alert("Registration successful!");
  this.requestFullscreen();
});
