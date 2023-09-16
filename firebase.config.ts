

import { initializeApp } from "firebase/app"



const {VITE__API_KEY,
    VITE__AUTH_DOMAIN,
    VITE__PROJECT_ID,
    VITE__STORAGE_BUCKET,
    VITE__MESSAGING_SENDER_ID,
    VITE__APP_ID} = import.meta.env


    const firebaseConfig = {
        apiKey: VITE__API_KEY,
        authDomain: VITE__AUTH_DOMAIN,
        projectId: VITE__PROJECT_ID,
        storageBucket: VITE__STORAGE_BUCKET,
        messagingSenderId: VITE__MESSAGING_SENDER_ID,
        appId: VITE__APP_ID
    };

initializeApp(firebaseConfig)
