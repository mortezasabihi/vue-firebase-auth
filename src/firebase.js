import firebase from "firebase";
const env = process.env;

const firebaseConfig = {
  apiKey: env.VUE_APP_API_KEY,
  authDomain: env.VUE_APP_AUTH_DOMAIN,
  databaseURL: env.VUE_APP_DATABASE_URL,
  projectId: env.VUE_APP_PROJECT_ID,
  storageBucket: env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: env.VUE_APP_MESSAGING_SENDER_ID,
  appId: env.VUE_APP_APP_ID,
  measurementId: env.VUE_APP_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
