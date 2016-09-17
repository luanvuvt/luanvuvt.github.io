importScripts('sw-precache.js');

/*
setInterval(function () {
  fetch('https://nameless-bastion-35871.herokuapp.com/api/account.json', {credentials: 'include'})
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      self.registration.showNotification('Woohooo!', {
        body: response.status,
        icon: 'images/icon.png',
        tag: 'my-tag',
        sticky: true
      });
    });
}, 1);
*/
