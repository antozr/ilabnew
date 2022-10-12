console.info('Hello world');

import { onAuthStateChanged } from 'firebase/auth';
import loginMethod from '../scripts/components/login';
import { auth } from './firebase';
import { login, logout, selectUser } from './storeManage/userStore';
import { store } from '../app/store';

document.querySelector('.nav__button').addEventListener('click', () => {
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
    })


    console.log(store.getState());
    const user = store.getState().user;
    console.table(user.user);
    
    

});



/// initialiser les stores de redux pour faire la gesstion avec firebase ainsi que la récupérations des données. 

/* todo list */
/// problème de refresh des données 