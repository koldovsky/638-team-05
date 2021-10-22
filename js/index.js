const clockContainer = document.querySelector('.clock')

setInterval ( () => clockContainer.innerText = new Date().toLocaleTimeString(), 1000);
