

import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js'

import { getFirestore , collection, getDocs} from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js'   

const firebaseConfig = {
    apiKey: "AIzaSyDnIeL5X1aDhmUmMhBW6GFuL2hIjbzcDd0",
    authDomain: "my-portfolio-9ca80.firebaseapp.com",
    projectId: "my-portfolio-9ca80",
    storageBucket: "my-portfolio-9ca80.appspot.com",
    messagingSenderId: "110572981281",
    appId: "1:110572981281:web:757f28b1bb293805116760"
};


const app = initializeApp(firebaseConfig);


export function getItems(path:string){

    const db = getFirestore(app)

    const projectRef = collection(db, path)
    const collected= getDocs(projectRef)
    .then(snapShot => snapShot.docs.map(doc => {
        return {...doc.data()}  
    }))

    .then(res => res)

    return collected;
}
