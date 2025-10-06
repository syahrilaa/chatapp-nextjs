import { cert, getApp, getApps, initializeApp, AppOptions } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { getDatabase } from "firebase-admin/database";
import { getStorage } from "firebase-admin/storage";

export const options: AppOptions = {
  credential: cert({
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: (process.env.FIREBASE_PRIVATE_KEY as string).replace(/\\n\//g, "\n"),
    projectId: process.env.FIREBASE_PROJECT_ID,
  }),
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  storageBucket: process.env.FIREBASE_BUCKET_URL,
};

const app = getApps().length > 1 ? getApp() : initializeApp(options);
export const firestore = getFirestore(app, "default");
export const storage = getStorage(app);
export const database = getDatabase(app);
