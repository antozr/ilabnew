/// Creation du login avec firebase popup

import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';
import popUpInfo from '../components/popupcreacompte';
import dbAllTime from './manageDB';

export default function loginMethod() {
    console.log('hello');
    signInWithPopup(auth, provider)
        .then((result) => {
            console.log(result.user);
            const user = result
            //injecter la function pour les data ici 
            //document.querySelector('.nav__el--name').innerHTML = user.user.displayName;
            localStorage.setItem('displayname', user.user.displayName);

            if (localStorage.getItem('class') == ' ' || localStorage.getItem('class') == undefined || localStorage.getItem('class') == '') {
                openBoxPopup(user);
            } else {
                document.querySelector('#classeProfil').innerHTML = localStorage.getItem('class');
                document.querySelector('.navProfil__name').innerHTML = localStorage.getItem('pseudo');
            }
            changeBtnConnection(user);
            afficheProfil(user);
            dbAllTime();

        })
        .catch((error) => alert(error.message));
}

// faire une fonction signOut et la lier au statut du btn 



function changeBtnConnection(user) {
    if (user.user != null) {
        let btnConnection = document.querySelector('.nav__button');
        btnConnection.innerHTML = "Se déconnecter";
        btnConnection.classList.add('nav__button--logout');
    } else {
        let btnConnection = document.querySelector('.nav__button');
        btnConnection.innerHTML = "Se connecter";
        btnConnection.classList.remove('nav__button--logout');
    }
}

function afficheProfil(user) {
    let profil = document.querySelector('#profilBox');
    if (user.user == null) {
        profil.classList.add('nav__el--none');
    } else {
        profil.classList.remove('nav__el--none');
    }
}

function openBoxPopup(user) {


    if (user.user != null) {
        popUpInfo();
    } else {
        console.log('c\'est mort li pop');
    }
}

// addEventListener('')