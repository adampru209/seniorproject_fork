/**
 * Exposes a way to notify future job seekers of possible events
 * even if app is closed.
 * 
 * @author Matt
 * @version 0.1
 * 
 * TODO: [Tests, Look up conflicts with calendar plug-in default reminders]
 * LEARN: https://github.com/katzer/cordova-plugin-local-notifications/
 *
 * @param  {Date}   date
 * Point in time for notification to appear
 *
 * @param  {String} title
 * Text to display along side our app's logo
 *
 * @param  {String} msg
 * Main Text to display along side our app's logo
 *
 * @return {String}
 * Id for scenario in which event must be canceled. If the user does not have
 * the permissions set properly this will be undefined
 *
 * @example
 * // 5 seconds from now
 * var t = new Date(); t.setSeconds(t.getSeconds() + 5);
 * var id = notify(t, 'Meeting', 'Bring markers, and includes bill and sally.');
 */ 
app.factory('notify', ['$cordovaLocalNotification', function ($cordovaLocalNotification) {
 // ID's are incrementing and must be convertible to integers (Android quirk)
  var autoID = 0;

  return function notify(date, title, msg) {
   
    // Guard execution 
    document.addEventListener('deviceready', function (){
      var wasSucces = false;
      var local     = window.plugin.notification.local;

      // This will only prompt on first call, after 
      // user will have to set permissions manually (IOS only)
      local.registerPermission(function (granted) {
        wasSucces = granted;
        if (wasSucces) {
          console.log('Permission granted' + granted);
        }
      });

      // Bad permissions, bail
      if (!wasSucces) {return undefined};

      return local.add({
          id:     autoID++,
          date:   date,
          title:  title,
          message: msg
      });

    }) // end guard
  };

}])