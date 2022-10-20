console.info('Hello world');

import { onAuthStateChanged } from 'firebase/auth';
import loginMethod from '../scripts/components/login';
import logoutMethod from '../scripts/components/logout';
import db, { auth } from './firebase';
import { login, logout, dataUser } from './storeManage/userStore';
import { store } from '../app/store';
import { profil } from './storeManage/userDataStore';
import { collection, onSnapshot, setDoc, doc, query, addDoc, serverTimestamp } from 'firebase/firestore';
import popUpInfo from './components/popupcreacompte';
import navNiveau from './components/NiveauNavJeux';
import boxChoice from './components/boxChoiceUser';

document.querySelector('.nav__button').addEventListener('click', (e) => {


    if (e.target.classList.contains('nav__button--logout')) {
        logoutMethod();
    } else {
        loginMethod();
        onAuthStateChanged(auth, (autUser) => {
            if (autUser) {
                console.log(autUser.email);
                store.dispatch(
                    login({
                        uid: autUser.uid,
                        photo: autUser.photoURL,
                        email: autUser.email,
                        displayName: autUser.displayName
                    })
                    
                ),
                console.log(autUser.email);
            } else {
                store.dispatch(
                    logout()
                )
            }
            
        });
        console.log(store.getState());
        const user = store.getState().user;
        document.querySelector('#classProfil').innerHTML = store.getState().
        console.table(user.user);
    }



});







document.querySelector('#clickme').addEventListener('click', ()=>{
    
    setDoc(doc(db, 'users', store.getState().user.user.uid),{
        name : 'lololl'
    })

    onSnapshot(collection(db,'users'), (snapshot) =>{
        store.dispatch(
            profil(
                snapshot.docs.map((doc) =>({
                    id: doc.id,
                    channel : doc.data(),
                }))
            )
        )
    })
});

document.querySelector('#addData').addEventListener('click', ()=>{
    
    console.log('je suis les données ');
    ///
    //ajoute un document dans un élément de user 
    addDoc(collection(db, "users", store.getState().dataPerso.dataUser[0].id, 'datahub'), {
        timestamp : serverTimestamp(),
        data : 'je suis une chèvre ',
        user : store.getState().user.user.displayName
    })
    //crée un document 
    // setDoc(doc(db, 'users', 'nain', 'data01'),{
    //     name : 'lololl'
    // })
})

navNiveau()

let boxJeu = document.querySelectorAll(".sect__el");

boxJeu[0].addEventListener('click', ()=>{
    boxChoice()
})
