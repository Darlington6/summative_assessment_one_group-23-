// we pull data from html file
document.getElementById('registration_form').addEventListener('submit',function(event){
  event.preventDefault()
});

const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const phone_nbr = document.getElementById('phone_number').value;
const event_date = document.getElementById('event_date').value;
const tickets = document.getElementById('number_of_tickets').value;

const namePattern = /^ [a-zA-Z\s]+$/
const emailPattern = /^[^\s]+@[^\s@]+\.[^\s@]+$/
