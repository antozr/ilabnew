/// Creation du login avec firebase popup

import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';

export default function loginMethod() {
    console.log('hello');
    signInWithPopup(auth, provider)
        .then((result) => {
            console.log(result.user);
            const user = result

        })
        .catch((error) => alert(error.message));
    //console.log(JSON.parse(localStorage.getItem('user')));

    //console.table(user)
    // document.querySelector('#spane').innerHTML = user.email;
    // document.querySelector('.nav__name').innerHTML = user.displayName;


}


