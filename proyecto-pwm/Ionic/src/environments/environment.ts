// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {

  production: false,

  firebaseDB: {
    projectId: 'elementos-multimedia',
    appId: '1:416783493915:web:744d16a6d65a5a1a7a41be',
    databaseURL: 'https://elementos-multimedia-default-rtdb.europe-west1.firebasedatabase.app',
    storageBucket: 'elementos-multimedia.appspot.com',
    apiKey: 'AIzaSyDOT-zYzciEV7WwMUQG2_OT4mKrdjKX3vU',
    authDomain: 'elementos-multimedia.firebaseapp.com',
    messagingSenderId: '416783493915',
  }

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
