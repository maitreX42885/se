import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc} from "firebase/firestore";

export default class Firebase {
    constructor() {
        this.config = {
            apiKey: "AIzaSyAajg7k3hb5kxcJJqTKGvDtj8ad5X681pg",
            authDomain: "react-lesson-01.firebaseapp.com",
            projectId: "react-lesson-01",
            storageBucket: "react-lesson-01.appspot.com",
            messagingSenderId: "1042803131009",
            appId: "1:1042803131009:web:6535c66fbaf24f6ab4c380",
            measurementId: "G-6EBEWZRY3B"
        }
    }

    init_firebase() {
        const app = initializeApp(this.config)
        return getFirestore(app)
    }

    async add_data(db, Collection, data) {
        try {
            const docRef = await addDoc(collection(db, Collection), data);
            // console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }
}