// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  thingSpeakUrlRead: 'https://api.thingspeak.com/channels/1795720/feeds.json?api_key=U8HCX4PLFO94KP3X&results=2',
  keyThingSpeak: 'LCSJ5M98PSD7T1YT',
  weather: 'https://api.openweathermap.org/data/2.5/weather?q=',
  keyWeather: '199d68e7f76ae10bb21eaf707adb3137',
  firebaseConfig : {
    apiKey: "AIzaSyCvBYw3fRrw4g290dqkdFzfFYyuhy1a_cM",
    authDomain: "agro-app-2aa55.firebaseapp.com",
    projectId: "agro-app-2aa55",
    storageBucket: "agro-app-2aa55.appspot.com",
    messagingSenderId: "125381019448",
    appId: "1:125381019448:web:69188de5e68a79eed523cd"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
