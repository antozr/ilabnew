/// faire en sorte que si 4 personnes travaille ensembles le projet se fait 

import { addDoc, collection, onSnapshot } from "firebase/firestore"
import Log from "laravel-mix/src/Log";
import { store } from "../../app/store"
import db from "../firebase"
import { dataJob } from "../storeManage/userDataStore"



export default function suivisTravail(){
    let i = 0;
    // addDoc(collection(db, "dataRange"), {
    //     nourriture : 50,
    //     materiaux : 50,
    //     bonheur : 50,
    //     argent : 50

    // });

    onSnapshot(collection(db,"dataRange"), (snap)=>{
        store.dispatch(
            dataJob(
                snap.docs.map((doc)=>({
                    id : doc.id,
                    data : doc.data()
                })),
                snap.docs.forEach((el)=>{
                    console.log(el.data())
                })
            )
        )
    })

}

