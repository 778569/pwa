var push = require('web-push');

let vapidKeys = {
    publicKey: 'BGRXWH2ITv6jTBWNi2NnLSUpnQyCA478wBj_iGRQK4DIRGSwMxTBSB-uYcih5OVVnvMts0tVVOHA4AJOE4SMBq8',
    privateKey: 'ooQ86HW2BLqII0Ag7V5nf2v3C1eXMKlneXXYCmuKWr0'
  }

  // push.setVapidDetails(
  //   'kavindabandara94@gmail.com',
  //   vapidKeys.publicKey,
  //   vapidKeys.privateKey
  // );

  let sub =
  {
  endpoint:"https://fcm.googleapis.com/fcm/send/eVOYZtW14KY:APA91bFeyTn7rThHgkiPhtJ-2taLO3vzctQCKSrXMsnHSCCxqXERwFi-Jl9I5U-Je2RUJ1TbfhB14fo3AiOYBOaJvNQ6LmCLbqUrgtzaEZRdf0cFRiQXHB8JrERxIpHoDvhW9uwvPl7I",
  expirationTime :null,
  keys:{
    p256dh:"BFN1JoJUp1teI3bsWRMunwWE5TpdxP3HEGK5ZURNye_1UuNNC-tYcSz47Y0ZGw3sJMJ2fzJQ5CTH_dNzKXXpsf4",
    auth:"pGJURRft5Cq7ajccrYAFsA"
  }
}

push.sendNotification(sub,'test message')