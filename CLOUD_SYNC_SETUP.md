# Table Tennis Wala — Cloud Admin Sync Setup

Right now, the website is a static site. `localStorage` saves data only in the same browser, so admin changes do not automatically appear on other devices.

This updated version adds Firebase Firestore cloud sync support for:

- admin uploaded products
- website content edits
- order records

## Steps

1. Create a Firebase project.
2. Enable Firestore Database.
3. Add a Web App in Firebase project settings.
4. Copy the Firebase config.
5. Open `script.js` and fill:

```js
const FIREBASE_CONFIG = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

6. Upload the updated files to your hosting again.
7. Open `https://tabletenniswala.com/admin.html` and login. The top of the admin panel should show **Connected across devices**.

## Temporary Firestore rules for testing

For testing only, you can use:

```txt
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /ttw-sites/{siteId}/state/{docId} {
      allow read, write: if true;
    }
  }
}
```

For real production, use a backend or authenticated admin rules. Public write rules are not secure.

## Important image note

If you upload very large images directly through the admin panel, Firestore may reject them because each document has a size limit. For live products, use image URLs or connect Firebase Storage later.
