# Table Tennis Wala — Real Cloud Sync Setup

Your admin changes were still only appearing on one browser because the Firebase config was blank. A static website cannot sync admin changes across devices by itself. It needs a cloud database.

This version uses Firebase Firestore and syncs these items across all devices:

- uploaded/edited products
- website content changes
- orders

## Step 1 — Create Firebase project

1. Go to Firebase Console.
2. Create a project.
3. Add a Web App.
4. Copy the Firebase config.

## Step 2 — Edit `firebase-config.js`

Open the file `firebase-config.js` in the website root and paste the config:

```js
window.TTW_FIREBASE_CONFIG = {
  apiKey: "AIzaSyBs1ZPiUTFZtx7Qs5sLlNqtPJ3mDqKjtgM",
  authDomain: "tabletennis-wala-backend.firebaseapp.com",
  projectId: "tabletennis-wala-backend",
  storageBucket: "tabletennis-wala-backend.firebasestorage.app",
  messagingSenderId: "1097467538456",
  appId: "1:1097467538456:web:187c692f6e8b7ab8ec276d",
  measurementId: "G-1N2E7T9HEG"
};

window.TTW_CLOUD_SITE_ID = "tabletenniswala-live";
```

Then re-upload this file to the root of `tabletenniswala.com` in the same folder as `index.html`.

## Step 3 — Enable Firestore

In Firebase Console:

1. Go to Firestore Database.
2. Create database.
3. Start in test mode first.
4. Pick a region.

## Step 4 — Temporary Firestore rules

For testing only, you can use the included `firestore.rules` file. This allows the website to write admin changes to Firestore.

Important: These rules are not production-secure. For production, use Firebase Auth or a backend admin API.

## Step 5 — Test

1. Open `https://tabletenniswala.com/admin.html`.
2. Log in.
3. The admin panel should show `Connected across devices`.
4. Upload/edit a product.
5. Open the website on another device and refresh.
6. The product/content/order data should show there too.

## Important about images

Uploaded images are now automatically compressed before saving, because Firestore documents have a 1 MiB limit. For best results, use image URLs for product photos or upload medium-sized images.


## Config added

This ZIP already includes your Firebase config in `firebase-config.js`. You still need to enable Firestore Database and publish the rules in `firestore.rules` from Firebase Console.
