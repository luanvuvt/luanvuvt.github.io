self.addEventListener('push', function(event) {
	self.registration.showNotification('Notification title', {
	  icon: 'http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png',
	  body: "Hey there! You've been notified!"
	});
});