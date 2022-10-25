console.info('Hello world');

import { onAuthStateChanged } from 'firebase/auth';
import loginMethod from '../scripts/components/login';
import logoutMethod from '../scripts/components/logout';
import db, { auth } from './firebase';
import { login, logout, dataUser } from './storeManage/userStore';
import { store } from '../app/store';
import { dataJob, profil } from './storeManage/userDataStore';
import { collection, onSnapshot, setDoc, doc, query, addDoc, serverTimestamp } from 'firebase/firestore';
import popUpInfo from './components/popupcreacompte';
import navNiveau from './components/NiveauNavJeux';
import boxChoice from './components/boxChoiceUser';
import actionPerso from './components/ActionPerso';
import suivisTravail from './components/TravailGames';
import dbAllTime from './components/manageDB';

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
        //document.querySelector('#classProfil').innerHTML = store.getState().dataPerso.dataUser.pseudo;
        console.table(user.user);
    };
    onSnapshot(collection(db, "dataRange"), (snap) => {
        store.dispatch(
            dataJob(
                snap.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data()
                })),
                snap.docs.forEach((el) => {
                    console.log(el.data())
                })
            )
        )
    });
    let allRangeDiv = document.querySelectorAll('.nav__rangeINto');
    let indexRangeStart = 0;
    allRangeDiv.forEach((el) => {

        if (indexRangeStart == 0) {
            el.style.width = parseInt(store.getState().dataPerso.dataUser[0].data.nourriture, 10) + '%';
            indexRangeStart++;
        } else if (indexRangeStart == 1) {
            el.style.width = parseInt(store.getState().dataPerso.dataUser[0].data.materiaux, 10) + '%';
            indexRangeStart++;
        } else if (indexRangeStart == 2) {
            el.style.width = parseInt(store.getState().dataPerso.dataUser[0].data.bonheur, 10) + '%';
            indexRangeStart++;
        } else if (indexRangeStart == 3) {
            el.style.width = parseInt(store.getState().dataPerso.dataUser[0].data.argent, 10) + '%';
            indexRangeStart++;
        } else if (indexRangeStart == 4) {
            el.style.width = parseInt(store.getState().dataPerso.dataUser[0].data.nourriture, 10) + '%';
            indexRangeStart++;
        } else if (indexRangeStart == 5) {
            el.style.width = parseInt(store.getState().dataPerso.dataUser[0].data.materiaux, 10) + '%';
            indexRangeStart++;
        } else if (indexRangeStart == 6) {
            el.style.width = parseInt(store.getState().dataPerso.dataUser[0].data.bonheur, 10) + '%';
            indexRangeStart++;
        } else if (indexRangeStart == 7) {
            el.style.width = parseInt(store.getState().dataPerso.dataUser[0].data.argent, 10) + '%';
            indexRangeStart++;
        } else if (indexRangeStart == 8) {
            el.style.width = parseInt(store.getState().dataPerso.dataUser[0].data.nourriture, 10) + '%';
            indexRangeStart++;
        } else if (indexRangeStart == 9) {
            el.style.width = parseInt(store.getState().dataPerso.dataUser[0].data.materiaux, 10) + '%';
            indexRangeStart++;
        } else if (indexRangeStart == 10) {
            el.style.width = parseInt(store.getState().dataPerso.dataUser[0].data.bonheur, 10) + '%';
            indexRangeStart++;
        } else if (indexRangeStart == 11) {
            el.style.width = parseInt(store.getState().dataPerso.dataUser[0].data.argent, 10) + '%';
            indexRangeStart++;
        } else if (indexRangeStart == 12) {
            el.style.width = parseInt(store.getState().dataPerso.dataUser[0].data.nourriture, 10) + '%';
            indexRangeStart++;
        } else if (indexRangeStart == 13) {
            el.style.width = parseInt(store.getState().dataPerso.dataUser[0].data.materiaux, 10) + '%';
            indexRangeStart++;
        } else if (indexRangeStart == 14) {
            el.style.width = parseInt(store.getState().dataPerso.dataUser[0].data.bonheur, 10) + '%';
            indexRangeStart++;
        } else if (indexRangeStart == 15) {
            el.style.width = parseInt(store.getState().dataPerso.dataUser[0].data.argent, 10) + '%';
            indexRangeStart++;
        } else if (indexRangeStart == 16) {
            el.style.width = parseInt(store.getState().dataPerso.dataUser[0].data.nourriture, 10) + '%';
            indexRangeStart++;
        } else if (indexRangeStart == 17) {
            el.style.width = parseInt(store.getState().dataPerso.dataUser[0].data.materiaux, 10) + '%';
            indexRangeStart++;
        } else if (indexRangeStart == 18) {
            el.style.width = parseInt(store.getState().dataPerso.dataUser[0].data.bonheur, 10) + '%';
            indexRangeStart++;
        } else if (indexRangeStart == 19) {
            el.style.width = parseInt(store.getState().dataPerso.dataUser[0].data.argent, 10) + '%';
            indexRangeStart++;
        }

    })



});


// document.querySelector('#clickme').addEventListener('click', () => {

//     setDoc(doc(db, 'users', store.getState().user.user.uid), {
//         name: 'lololl'
//     })
//     // recupère la data 
//     onSnapshot(collection(db, 'works'), (snapshot) => {
//         store.dispatch(
//             profil(
//                 snapshot.docs.map((doc) => ({
//                     id: doc.id,
//                     channel: doc.data(),
//                 }))
//             ),

//         )
//     })
//     onSnapshot(collection(db, 'works', store.getState().user.user.uid, 'enCours'), (snapshot) => {
//         store.dispatch(
//             dataJob(
//                 snapshot.docs.map((doc) => ({
//                     id: doc.id,
//                     statut: doc.data()

//                 }))
//             )

//         )
//     })
//     onSnapshot(collection(db, 'works', 'mine', 'enCours'), (snapshot) => {
//         store.dispatch(
//             dataJob(
//                 snapshot.docs.map((doc) => ({
//                     id: doc.id,
//                     statut: doc.data()

//                 }))
//             )

//         )
//     })
//     console.log(store.getState().dataPerso.dataUser);
// });

// document.querySelector('#addData').addEventListener('click', () => {

//     console.log('je suis les données ');
//     ///
//     //ajoute un document dans un élément de user 
//     // addDoc(collection(db, "users", store.getState().dataPerso.dataUser[0].id, 'datahub'), {
//     //     timestamp : serverTimestamp(),
//     //     data : 'je suis une chèvre ',
//     //     user : store.getState().user.user.displayName
//     // })
//     //crée un document 
//     // setDoc(doc(db, 'users', 'nain', 'data01'),{
//     //     name : 'lololl'
//     // })
//     suivisTravail();
// })
suivisTravail();
navNiveau();

// let boxJeu = document.querySelectorAll(".sect__el");

// boxJeu[0].addEventListener('click', ()=>{
//     boxChoice('je veux du miel')
// })
// boxJeu[1].addEventListener('click', ()=>{
//     boxChoice('je veux du pain')
// })

actionPerso();


//// code de jean //

// capacité selon la classe du user
const classes = ['caristes', 'bucherons', 'capital', 'mineurs', 'Paysans']
if (localStorage.getItem('class')) {
    if (localStorage.getItem('class') === 'Paysans') {
        var userClass = 4
    } else if (localStorage.getItem('class') === 'mineurs') {
        var userClass = 3
    } else if (localStorage.getItem('class') === 'bucherons') {
        var userClass = 1
    } else if (localStorage.getItem('class') === 'caristes') {
        var userClass = 0
    }
    var userClass = classes[userClass];
}



// nav et slider
const navi = document.querySelectorAll('.action')
const slide = document.querySelectorAll('.slider__element')


// set la slide de base
navi[classes.indexOf(userClass)].classList.add('action--active')
slide[classes.indexOf(userClass)].classList.add('slider__element--show')


// capacité selon la classe du user
for (let i = 0; i < navi.length; i++) {
    navi[i].addEventListener("click", metier);

    function metier() {
        for (let y = 0; y < slide.length; y++) {
            slide[y].classList.remove('slider__element--show')
            navi[y].classList.remove('action--active')

        }
        if (i == classes.indexOf(userClass)) {
            slide[i].classList.add('slider__main')
            console.log(classes.indexOf(userClass))
        }
        else {
            slide[classes.indexOf(userClass)].classList.remove('slider__main')
            console.log(i == classes.indexOf(userClass))

        }
        navi[i].classList.add('action--active')
        slide[i].classList.add('slider__element--show')
    }
}

//trigger hover de la map quand on hover les boutons

// trigger hover du travail
const travailHover = document.querySelectorAll('.zone--travail')
const travailMap = document.querySelectorAll('.oui--travail')

for (let u = 0; u < travailHover.length; u++) {
    travailHover[u].addEventListener('mouseover', thoverActivate)
    travailHover[u].addEventListener('mouseout', thoverDesactivate)

    function thoverActivate() {

        for (let w = 0; w < travailMap.length; w++) {
            travailMap[w].classList.add('oui--active')
        }
    }

    function thoverDesactivate() {
        for (let i = 0; i < travailMap.length; i++) {
            travailMap[i].classList.remove('oui--active')
        }
    }
}


// trigger hover du repos
const reposHover = document.querySelectorAll('.zone--repos')
const reposMap = document.querySelectorAll('.oui--repos')

for (let u = 0; u < reposHover.length; u++) {
    reposHover[u].addEventListener('mouseover', rhoverActivate)
    reposHover[u].addEventListener('mouseout', rhoverDesactivate)


    function rhoverActivate() {
        for (let i = 0; i < reposMap.length; i++) {
            reposMap[i].classList.add('oui--active')
        }
    }


    function rhoverDesactivate() {
        for (let i = 0; i < reposMap.length; i++) {
            reposMap[i].classList.remove('oui--active')
        }
    }
}

// trigger hover du détente
const détenteHover = document.querySelectorAll('.zone--détente')
const détenteMap = document.querySelectorAll('.oui--détente')

for (let u = 0; u < détenteHover.length; u++) {
    détenteHover[u].addEventListener('mouseover', dhoverActivate)
    détenteHover[u].addEventListener('mouseout', dhoverDesactivate)


    function dhoverActivate() {
        for (let i = 0; i < détenteMap.length; i++) {
            détenteMap[i].classList.add('oui--active')
        }
    }

    function dhoverDesactivate() {
        for (let i = 0; i < détenteMap.length; i++) {
            détenteMap[i].classList.remove('oui--active')
        }
    }
}
