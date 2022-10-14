console.info('Hello world');

import { onAuthStateChanged } from 'firebase/auth';
import loginMethod from '../scripts/components/login';
import logoutMethod from '../scripts/components/logout';
import db, { auth } from './firebase';
import { login, logout, dataUser } from './storeManage/userStore';
import { store } from '../app/store';
import popUpInfo from './components/popupcreacompte';
import { profil } from './storeManage/userDataStore';
import { collection, onSnapshot } from 'firebase/firestore';


document.querySelector('.nav__button').addEventListener('click', (e) => {
    // loginMethod();
    // onAuthStateChanged(auth, (autUser) => {
    //     if (autUser) {
    //         console.log(autUser.email);
    //         store.dispatch(
    //             login({
    //                 uid: autUser.uid,
    //                 photo: autUser.photoURL,
    //                 email: autUser.email,
    //                 displayName: autUser.displayName
    //             })
    //         )
    //         console.log(autUser.email);
    //     } else {
    //         store.dispatch(
    //             logout()
    //         )
    //     }
    // })


    // console.log(store.getState());
    // const user = store.getState().user;
    // console.table(user.user);

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
                )
                console.log(autUser.email);
            } else {
                store.dispatch(
                    logout()
                )
            }
        });

        console.log(store.getState());
        const user = store.getState().user;
        console.table(user.user);
    }



});

popUpInfo();


document.querySelector('#clickme').addEventListener('click', ()=>{
    console.log('haaaaaaaaaaaaaaaaaaaaaaa');

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
})


/// initialiser les stores de redux pour faire la gesstion avec firebase ainsi que la récupérations des données.

/* todo list */
/// problème de refresh des données 