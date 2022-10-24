/// faire en sorte que si 4 personnes travaille ensembles le projet se fait 

import { addDoc, collection, onSnapshot } from "firebase/firestore"
import { store } from "../../app/store"
import db from "../firebase"
import { dataJob } from "../storeManage/userDataStore"



export default function suivisTravail(){
    addDoc(collection(db, "works", 'mine'), {
        nbOuvrier : 0,
    });

    onSnapshot(collection(db,'works', 'mine'), (snapshot) =>{
        store.dispatch(
            dataJob(
                snapshot.docs.map((doc)=>({
                    id: doc.id,
                    statut : doc.data()
                   
                }))
            )
            
        )
    })
}

