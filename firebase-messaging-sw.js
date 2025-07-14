self.addEventListener("push", e => {
  console.log(JSON.stringify(e));
  const tempData = e.data.json();
  console.log(JSON.stringify(tempData));
  const data = tempData.data
  console.log(data);
  self.registration.showNotification(
    tempData.notification.title, // title of the notification
    {
      body: tempData.notification.body, //the body of the push notification
      data: data,
      icon: tempData.notification.icon,
      badge: tempData.notification.badge,
      vibrate: tempData.notification.vibrate,
      sound: tempData.notification.sound,
      actions: tempData.notification.actions,
      tag: tempData.notification.tag,
    }
  );
});


self.addEventListener("notificationclick", event => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow(event.notification.data['alias'])
  );
})


//self.addEventListener("install", function (event) {
//  event.waitUntil(preLoad());
//});
//
//let preLoad = function () {
//  return caches.open("offline").then(function (cache) {
//    return cache.addAll(["../src/index.js"]);
//  });
//};

self.addEventListener("fetch", function (event) {

});