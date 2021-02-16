  navigator.serviceWorker.register('./sw.js').then(function(swReg) {
    swReg.pushManager.getSubscription()
    .then(function(subscription) {
      if(subscription != null) {
        // register succeed
      }
    })//then
  })//then
  .catch(function(error) {
    console.error('Service Worker Error', error);
  });