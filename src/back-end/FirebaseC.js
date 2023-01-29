import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc} from "firebase/firestore";

export default class Firebase {
    constructor() {
        this.config = {
            apiKey: "AIzaSyCxguflMT7KhYqkAk8H0fMJ_zW-amtMLdw",
            authDomain: "reac-se.firebaseapp.com",
            projectId: "reac-se",
            storageBucket: "reac-se.appspot.com",
            messagingSenderId: "207195802626",
            appId: "1:207195802626:web:e816d174a50a98a228eb1b",
            measurementId: "G-2L3Z24SP8K"
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