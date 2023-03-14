// self.addEventListener('push', () => {
//   self.registration.showNotification('Hello world!',{});
// });

self.addEventListener('push', function(event) {
  var options= {

    body: 'This is notification was generated from a push',
    icon: 'images/example.png',
    vibrate:[100,50,100],
    date: {
      dateOfArrival:Date.now(),
      primaryKey: '2'
      },
  
  actions: [
    {action:'explore',title:'Explore this new world',icon :'images/checkmark.png'},
    {action:'close',title:'close',icon :'images/xmark.png'},
  ]
};

event.waitUntil(
  self.registration.showNotification('Hello world!',options)
);
});
