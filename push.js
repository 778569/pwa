var push = require('web-push');

let vapidKeys = {
    publicKey: 'BGRXWH2ITv6jTBWNi2NnLSUpnQyCA478wBj_iGRQK4DIRGSwMxTBSB-uYcih5OVVnvMts0tVVOHA4AJOE4SMBq8',
    privateKey: 'ooQ86HW2BLqII0Ag7V5nf2v3C1eXMKlneXXYCmuKWr0'
  }

  webpush.setVapidDetails(
    'kavindabandara94@gmail.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
  );

  let sub = {};
  push.sendNotification(sub, 'Your Push Payload Text');