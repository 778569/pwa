var push = require('web-push');

// let vapid = push.generateVAPIDKeys();

// console.log(vapid);

let vapidKeys = {
    publicKey: 'BDUh4lrm4axQVcXpyTZeoh_ZKPTlPNIAjXNfQcqnsk3y1xrGz7lPSOoCzSllLLnfwr7kuLCsOfNWonmpIQcDei0',
    privateKey: 'sx85dVt2C_bipATXBUB84OtW1C8f9YETMczWoY4mYfI'
  }

  push.setVapidDetails(
    'mailto:test@code.co.uk',
    vapidKeys.publicKey,
    vapidKeys.privateKey
  );

  let sub =
  
  {
    endpoint:"https://fcm.googleapis.com/fcm/send/eVOYZtW14KY:APA91bFeyTn7rThHgkiPhtJ-2taLO3vzctQCKSrXMsnHSCCxqXERwFi-Jl9I5U-Je2RUJ1TbfhB14fo3AiOYBOaJvNQ6LmCLbqUrgtzaEZRdf0cFRiQXHB8JrERxIpHoDvhW9uwvPl7I",
    expirationTime:null,
    keys:{
      p256dh:"BFN1JoJUp1teI3bsWRMunwWE5TpdxP3HEGK5ZURNye_1UuNNC-tYcSz47Y0ZGw3sJMJ2fzJQ5CTH_dNzKXXpsf4",
  auth:"pGJURRft5Cq7ajccrYAFsA"}}


push.sendNotification(sub,'test message')