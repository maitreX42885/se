import { async } from '@firebase/util';
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc, setDoc, doc, query, where, getDoc} from "firebase/firestore";

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

    async add_data_register(db, num_stu, data) {
        let path_u = '/users'
        const check = await this.check_account(db, num_stu)
        // console.log(check)
        if (check === false) {
            document.getElementById('register-check').style.display = 'block';
            document.getElementById('num_stu').style.border = '1px solid #ff0000';
            document.getElementById('num_stu').style.animation = 'shake 120ms linear';

            // console.log('Account has exists');
            setTimeout(()=>{
                document.getElementById('num_stu').style.animation = undefined;
            }, 130)
        }else {
            document.getElementById('register-check').style.display = 'none';
            try {
                await setDoc(doc(db, path_u, num_stu), data);
                document.getElementById('form-register').reset()
                // console.log("Document written with ID: ", docRef.id);
            } catch (e) {
                console.error("Error adding document: ", e);
            }
            return 'success'

        }
        
    }

    async check_account(db, num_stu) {
        const pathRef = await doc(db, "/users", `${num_stu}`)
        const docsnap = await getDoc(pathRef)
        if (docsnap.exists()) {
            return false
            console.log('Account has exists')
        }else {
            return true
            console.log(docsnap.data())
        }
        
        
    }
}