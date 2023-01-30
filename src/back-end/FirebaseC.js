import { async } from '@firebase/util';
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc, setDoc, doc, query, where, getDocs, getDoc} from "firebase/firestore";
import bcrypt from 'bcryptjs';

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
        let path_u = '/users';
        const check = await this.check_account(db, num_stu);
        const numStu = document.getElementById('num_stu');
        // console.log(check)
        if (check === false) {
            document.getElementById('register-check').style.display = 'block';
            numStu.style.border = '1px solid #ff0000';
            numStu.style.animation = 'shake 120ms linear';

            // console.log('Account has exists');
            setTimeout(()=>{
                numStu.style.animation = undefined;
            }, 130)
        }else {
            document.getElementById('register-check').style.display = 'none';
            let salt = bcrypt.genSaltSync(10);
            let hash = bcrypt.hashSync(`${data.password}`, salt);
            // console.log(hash)
            data.password = hash
            // console.log('new', data)
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
        }
    }
    async login(db, data) {
        const loading = document.getElementById('loading-wrapper');
        loading.style.display = 'block';
        // const check = await this.check_account(db, data[0])
        const pathRef = await doc(db, "/users", `${data[0]}`);
        const docsnap = await getDoc(pathRef);
        loading.style.display = 'none';
        // console.log(docsnap.exists())
        if (docsnap.exists()) {
            loading.style.display = 'block';
            document.getElementById('num-incorrect').style.visibility = 'hidden';
            // console.log(docsnap.data())
            const valueUser = docsnap.data();
            let check2 = bcrypt.compareSync(data[1], valueUser.password); 
            // console.log(valueUser.password)
            if (check2) {
                loading.style.display = 'none';
                document.getElementById('password-incorrect').style.visibility = 'hidden';
                // alert('welcome');
            }else {
                loading.style.display = 'none';
                document.getElementById('password-incorrect').style.visibility = 'visible';
            }
            
        }else {
            loading.style.display = 'none';
            document.getElementById('num-incorrect').style.visibility = 'visible';
        }
    }
    // async login2(db, data) {
    //     const citiesRef = collection(db, "/users");
    //     const q = query(citiesRef, where('password', "==", `${data[1]}`));
    //     const querySnapshot = await getDocs(q)

    //     console.log('q: ')
    //     querySnapshot.forEach((doc) => {
    //         // doc.data() is never undefined for query doc snapshots
    //         console.log(doc.id, " => ", doc.data());
    //     });
    //     console.log('g')
    // }
}