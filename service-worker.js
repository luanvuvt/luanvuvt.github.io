importScripts('sw-precache.js');

setInterval(function () {
  self.registration.showNotification('hello', {
    body: 'hi',
    icon: 'images/icon.png',
    tag: 'envato-web-app',
    sticky: true
  });

/*  fetch('https://nameless-bastion-35871.herokuapp.com/api/account.json')
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      var date = new Date();

      self.registration.showNotification('hello' + date.toTimeString(), {
        body: response.status,
        icon: 'images/icon.png',
        tag: 'my-tag',
        sticky: true
      });
    });*/
}, 10000);
