importScripts('sw-precache.js');

function showNotification() {
  self.registration.showNotification('Woohooo!', {
    body: 'test',
    icon: 'images/icon.png',
    tag: 'my-tag',
    sticky: true
  });
}

showNotification();

setInterval(showNotification, 1000 * 60 * 3);

/*setInterval(function () {
  fetch('https://nameless-bastion-35871.herokuapp.com/api/account.json', {credentials: 'include'})
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {

    });
}, 1);*/
