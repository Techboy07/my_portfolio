

import { initializeApp } from "firebase/app"

import { getFirestore , collection,getDocs} from 'firebase/firestore'   
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


    /*const firebaseConfig = {
        apiKey: "AIzaSyDnIeL5X1aDhmUmMhBW6GFuL2hIjbzcDd0",
        authDomain: "my-portfolio-9ca80.firebaseapp.com",
        projectId: "my-portfolio-9ca80",
        storageBucket: "my-portfolio-9ca80.appspot.com",
        messagingSenderId: "110572981281",
        appId: "1:110572981281:web:757f28b1bb293805116760"
    };
*/

    const app = initializeApp(firebaseConfig);


    export function getItems(path:string){

        const db = getFirestore(app)

        const projectRef = collection(db, path)
        const collected= getDocs(projectRef)
        .then((snapShot)=> snapShot.docs.map((doc) => {
            return {...doc.data()}  
        })) .then(<T extends object>(res: T) => res)
    
        return collected;
    }
