// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  protocol: 'https',
  host: 'bknd.surshree.com',
  port: '',
  context: '',
  // production: false,
  // protocol: 'http',  // Use 'http' for local development
  // host: 'localhost', // The host for local development
  // port: '8080',      // The port number you're using for the backend server
  // context: '/surshree',  // The context for the backend server
  firebase: {
    apiKey: "AIzaSyDlRh2wKSLHbBYlsZoVyenY85oEZR8DSqw",
  authDomain: "project-odoo13.firebaseapp.com",
  projectId: "project-odoo13",
  storageBucket: "project-odoo13.firebasestorage.app",
  messagingSenderId: "379220021748",
  appId: "1:379220021748:web:8e6ac9327eeeff003429a1",
  measurementId: "G-FQ52FQYYT7"
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
