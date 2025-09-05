const scriptURL = 'https://script.google.com/macros/s/AKfycbzb-ZaJgKZs3xERNxD8Kf6ex4Ke0qYGdo_bxmUtTk3LL7p7yRYE-5uCkmix0avNCJSVDw/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})