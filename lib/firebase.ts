import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import { getAuth, Auth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, Firestore, connectFirestoreEmulator } from "firebase/firestore";

let app: FirebaseApp;
let auth: Auth;
let db: Firestore;

const firebaseConfig = {
    apiKey: "AIzaSyPreviewModeKey",
    authDomain: "beton-benny.firebaseapp.com",
    projectId: "beton-benny",
    storageBucket: "beton-benny.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:abcdef",
};

// Check if window is defined (client-side) to avoid SSR issues with some SDKs if needed,
// but firebase generic SDK is SSR safe usually.
// However, we want to simulate properly.

try {
    if (!getApps().length) {
        app = initializeApp(firebaseConfig);
    } else {
        app = getApp();
    }
    auth = getAuth(app);
    db = getFirestore(app);

    // Optional: Connect to emulators if needed or simulate
    // For this environment, we just assume it works or fails gracefully
} catch (e) {
    console.warn("Firebase Init Error", e);
}

export { auth, db };
