import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import changeBtnConnection from './login';

export default function logoutMethod() {
    console.log('bye amigos');
    signOut(auth)
        .then((result) => {
           // document.querySelector('.nav__el--name').innerHTML = " ";
            // changeBtnConnection(result);
            let btnConnection = document.querySelector('.nav__button');
            btnConnection.innerHTML = "Se connecter";
            btnConnection.classList.remove('nav__button--logout');
            localStorage.clear();
        })
        .catch((error) => {
            console.error(error.message);
            console.log(error.message);
        })
}