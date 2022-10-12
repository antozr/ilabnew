console.info('Hello world');


import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from './firebase';

document.querySelector('#clickme').addEventListener('click', () => {
    console.log('hello');
    signInWithPopup(auth, provider)
        .then((result) => {
            console.log(result.user.email);
            const user = result.user;
            localStorage.setItem('user', JSON.stringify(user));
            return user;

        })
        .catch((error) => alert(error.message));
    console.log(JSON.parse(localStorage.getItem('user')));

    console.table(user)
    document.querySelector('#spane').innerHTML = user.email;
    document.querySelector('.nav__name').innerHTML = user.displayName;

});

/// initialiser les stores de redux pour faire la gesstion avec firebase ainsi que la récupérations des données. 
