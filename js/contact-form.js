(function () {
    const form = document.querySelector('.my-form');
    
    async function handleSubmit(event) {
      event.preventDefault();
      const status = document.querySelector('.my-form-status');
      //const data = new FormData(event.target);//
      const data = JSON.stringify({
        name: document.querySelector('my-form input[name=user name]').value,
        phoneNumber: document.querySelector('my-form input[name=user phone]').value,
        email: document.querySelector('my-form input[name=user email]').value,
      });
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
      }).then(response => {
        status.innerHTML = "Thanks for your submission!";
        form.reset()
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    form.addEventListener("submit", handleSubmit)
    
})();