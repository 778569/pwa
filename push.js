var push = require('web-push');

let vapidKeys = {
    publicKey: 'BGRXWH2ITv6jTBWNi2NnLSUpnQyCA478wBj_iGRQK4DIRGSwMxTBSB-uYcih5OVVnvMts0tVVOHA4AJOE4SMBq8',
    privateKey: 'ooQ86HW2BLqII0Ag7V5nf2v3C1eXMKlneXXYCmuKWr0'
  }

  push.setVapidDetails(
    'kavindabandara94@gmail.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
  );

  let sub =
  
    {
      endpoint:"https://wns2-sg2p.notify.windows.com/w/?token=BQYAAAARnSLCI240GFkdxUDpLyTLCjPnOqnQYHaFzjAh53Ir0GO8iUUdJaq4UmwQrYNGqcKD5HuSxbbLqOerWwfVbRlkp9x8pKqE0UbDI8AhMMYVMO6SE1CwdrfTlFHy3d5R%2f8OTmLIQyYSwb4TukW8JoaUIdDM1VRV1rSoL8AHjeyO%2fRSqsBykdOGXVjmfcgRSuOUh1bwvdvfGk%2fs03qu86l1qCjz8vEYlCWW37cf3jf1hk3mF2y1I4df9InHv0kV0y1deQ6%2bWq7KHBcugR2h2nfkM6%2bJrRavhzvIwf8RRV6HrJ4N28tFARCNqIcv82Fs29IWngZq4Bh8%2b9yiULtY%2b6aFGpzVwutot53%2bcSkXkDUUzpbA%3d%3d",
      expirationTime:null,
      keys:{
        p256dh:"BHqyHLs4MzhIQRaRonlol5YHfDZy8pDMysBrraE7t5L63g4MgOgul-3e-Bw-SiHXV0kYCeuzWJJbR6oR8fTyZ0Y","auth":"6KFYpnQFkMgFkSAKyD8QHQ"}}


push.sendNotification(sub,'test message')