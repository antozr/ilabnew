console.info('Hello world');

import { onAuthStateChanged } from 'firebase/auth';
import loginMethod from '../scripts/components/login';
import { auth } from './firebase';
import { login, logout, selectUser } from './storeManage/userStore';
import { store } from '../app/store';

document.querySelector('#clickme').addEventListener('click', () => {
    loginMethod();
    console.log('ta merer');
    onAuthStateChanged(auth, (autUser) => {
        console.log('L\'utilisateur est : ' + autUser);
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
bindEmail();

console.log(store.getState());
const user = store.getState().user;
console.table(user.user);
setTimeout(()=>{
    if (user.user != null){
        console.log(user.user.email);
    }
}, 200)

});

function bindEmail() {
    const user = selectUser
    document.querySelector('.nav__name').innerHTML = user.email;
}


/// initialiser les stores de redux pour faire la gesstion avec firebase ainsi que la récupérations des données. 
