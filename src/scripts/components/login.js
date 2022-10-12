/// Creation du login avec firebase popup

import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';

export default function loginMethod() {
    console.log('hello');
    signInWithPopup(auth, provider)
        .then((result) => {
            console.log(result.user);
            const user = result
            //injecter la function pour les data ici 
            document.querySelector('.nav__el--name').innerHTML = user.user.displayName;
            changeBtnConnection(user);
        })
        .catch((error) => alert(error.message));
}

function changeBtnConnection(user) {
    if (user.user != null) {
        let btnConnection = document.querySelector('.nav__button');
        btnConnection.innerHTML = "Se déconnecter";
        btnConnection.classList.add('nav__button--logout');
    }
}
