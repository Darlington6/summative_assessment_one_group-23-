// we pull data from html file
document.getElementById('registration_form').addEventListener('submit',function(event){
  event.preventDefault()

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone_nbr = document.getElementById('phone_number').value;
  const event_date = document.getElementById('event_date').value;
  const tickets = document.getElementById('number_of_tickets').value;

  const namePattern = /^[a-zA-Z\s]+$/;
  const emailPattern = /^[^\s]+@[^\s@]+\.[^\s@]+$/;
  const phone_nbrPattern = /^(d{3}) \d{3}-\d{4}$/;
  const event_datePattern = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[0-1])\/(19|20)\d{2}$/;

  if (!namePattern.test(name)) {
    alert("Please enter a valid name (letters and spaces only.)")
    return false;
  }

  if (!emailPattern.test(email)) {
    alert("Please enter a valid email (someone@domain.com).")
    return false;
  }

  if (!phone_nbrPattern.test(phone_nbr)) {
    alert("Please enter a valid phone number in the format (123) 456-7890.")
    return false;
  }

  if (!event_datePattern.test(event_date)) {
    alert("Please enter a valid event_date in the format (MM/DD/YYYY.)")
    return false;
  }

  if (tickets <= 1 || tickets >= 10) {
    alert("Please enter a number of tickets between 1 and 10.")
    return false;
  }

  alert("Registration successful!")
});
