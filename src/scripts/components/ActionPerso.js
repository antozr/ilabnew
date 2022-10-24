/// comprend les actions qui vont couté des points au perso 
import { setDoc, doc, addDoc, collection, serverTimestamp } from 'firebase/firestore';
import db from '../firebase';
import { store } from "../../app/store";
import boxChoice from "./boxChoiceUser";
import { dataJob } from '../storeManage/userDataStore';

export default function actionPerso() {

    let totalEnergie = 120;
    let nbTravailleur = 0; // set avec les actions perso data 
    let btnActionPerso = document.querySelector('#actionPerso');
    let barreenergieperso = document.querySelector('#enrgie');

    let btnDodo = document.querySelector('#dodo');
    barreenergieperso.innerHTML = totalEnergie;

    let btnBonheur = document.querySelector('#bonheur');

    ///
    /// text btn action perso
    setTimeout(() => {
        textBtnAction();
        verifTravailSecteur();
        // set les variable local 
        let tableEffectAction = 50;
        let titleRange = ['Nouriture', 'Materiaux', 'Satisfaction', 'Argent'];
        // faire le lien local 
        for (let i = 0; i < 3; i++) {
            localStorage.setItem(titleRange[i] + 'width', tableEffectAction);
        }
    }, 10);


    btnActionPerso.addEventListener('click', () => {
        let titleClass = document.querySelector('.slider__element--show');
        totalEnergie = totalEnergie - 20;

        if (nbTravailleur == 0) {
            nbTravailleur = 1;

            // set firebase data user
            addDoc(collection(db, "works", store.getState().user.user.uid, 'enCours'), {
                timestamp: serverTimestamp(),
                name: localStorage.getItem('pseudo'),
                uid: store.getState().user.user.uid,
                metier: localStorage.getItem('class'),
                lieux: titleClass.title,
                travail: true
            });
            addDoc(collection(db, "works", 'mine', 'enCours'), {
                timestamp: serverTimestamp(),
                name: localStorage.getItem('pseudo'),
                uid: store.getState().user.user.uid,
                travail: true
            });
            localStorage.setItem('valueBtnAction', btnActionPerso.innerHTML)
            btnActionPerso.innerHTML = 'Tu dois attendre pour travailler';
            setTimeout(() => {
                btnActionPerso.innerHTML = localStorage.getItem('valueBtnAction');
                nbTravailleur = 0;
                console.log(nbTravailleur);
            }, 30000);
            console.log(nbTravailleur);
            ////
            if (totalEnergie <= 0) {
                barreenergieperso.innerHTML = 0;
                alert('Tu nas plus dernergie !!');

            } else {
                barreenergieperso.innerHTML = totalEnergie;
                if (localStorage.getItem('class') == 'Paysans') {
                    var lieux = ' les champs';
                    var changeBox = [-1, 15, -1, -5];
                } else if (localStorage.getItem('class') == 'bucherons') {
                    var lieux = ' les bois';
                    var changeBox = [-1, 5, -1, -5];
                } else if (localStorage.getItem('class') == 'mineurs') {
                    var lieux = ' les mines';
                    var changeBox = [-3, -5, -1, 5];
                } else if (localStorage.getItem('class') == 'caristes') {
                    var lieux = ' les carrières';
                    var changeBox = [-3, 5, -1, -5];
                }
                let textMessage = "Tu es parti travailler dans" + lieux + "!";
                boxChoice(textMessage, false);
                let textMessage2 = localStorage.getItem('pseudo') + " +5 matériaux / -1 nourriture /-1 bonheur /-5 argent";
                boxChoice(textMessage2, false);
                verifTravailSecteur();
                avancerStatNav();

            }

        } else {
            alert('Tu travail déjà !!')
        }

    });


    /// ajout du bonheur
    let dodoActif = true;
    btnBonheur.addEventListener('click', () => {
        localStorage.setItem('rangeBonheur', 50);
        let valueBonheur = localStorage.getItem('rangeBonheur');
        valueBonheur = parseInt(valueBonheur) + 1;
        console.log(valueBonheur);
        localStorage.setItem('rangeBonheur', valueBonheur);
        allRangeDiv[2].style.width = valueBonheur + '%';
        //
        let textMessage = localStorage.getItem('pseudo') + " rend heureux le groupe.";
        boxChoice(textMessage, false);

        if (dodoActif === true) {
            dodoActif = false;
            setTimeout(() => {
                dodoActif = true;
                console.log('le dodo est fini');
            }, 100)
        }

    })
    /// temps de 6min pour reprendre 20 d'énergies

    btnDodo.addEventListener('click', () => {
        dodoPersoFc(totalEnergie);


    });


    /// vérif endroit du gas 
    let allItemNavDistric = document.querySelectorAll('.nav__item');

    allItemNavDistric.forEach((el) => {
        el.addEventListener('click', () => {
            setTimeout(() => {
                verifTravailSecteur();
                textBtnAction();
            }, 10)
        });
    });
}

function avancerStatNav(changeBox) {
    let allRangeDiv = document.querySelectorAll('.nav__rangeINto');
    if (localStorage.getItem('class') == 'Paysans') {
        var changeBox = [-1, 15, -1, -5];
    } else if (localStorage.getItem('class') == 'bucherons') {
        var changeBox = [-1, 5, -1, -5];
    } else if (localStorage.getItem('class') == 'mineurs') {
        var changeBox = [-3, -5, -1, 5];
    } else if (localStorage.getItem('class') == 'caristes') {
        var changeBox = [-3, 5, -1, -5];
    };
    // let tableEffectAction = changeBox;
    let titleRange = ['Nouriture', 'Materiaux', 'Satisfaction', 'Argent'];
    // faire le lien local 
    let i = 0
    allRangeDiv.forEach((el) => {
        
            let widthEl = el.style.width;
            console.log(widthEl);
            widthEl = parseInt(widthEl, 10);
            console.log(widthEl);
            let valueWi = widthEl + changeBox[i];
            el.style.width = valueWi;
            i++;
        
    });
    // for (let i = 0; i <= 3; i++) {

    //     let widthEl = allRangeDiv[i].style.width;
    //     console.log(widthEl);
    //     widthEl = parseInt(widthEl, 10);
    //     console.log(widthEl);
    //     let valueWi = widthEl + changeBox[i];
    //     allRangeDiv[i].style.width = 50 + '%';
    //     console.log(allRangeDiv[i].style.width);
    //     localStorage.setItem(titleRange[i] + 'width', widthEl + changeBox[i]);

    // }
}


function verifTravailSecteur() {
    let classPerso = localStorage.getItem('class');
    let not__here = document.querySelector('.not__here');
    let titleClass = document.querySelector('.slider__element--show');
    let listAction = document.querySelector('.slide__command');
    //
    if (titleClass.title == 'bois' && classPerso == 'bucherons') {
        listAction.style.opacity = 1;
        not__here.style.opacity = 0
        let valueVrai = true
        return valueVrai
    } else {
        listAction.style.opacity = 0;
        not__here.style.opacity = 1
    }
    if (titleClass.title == 'Paysans' && classPerso == 'Paysans') {
        listAction.style.opacity = 1;
        not__here.style.opacity = 0
        let valueVrai = true
        return valueVrai
        console.log('good job');
    } else {
        listAction.style.opacity = 0;
        not__here.style.opacity = 1
    }
    if (titleClass.title == 'carrière' && classPerso == 'caristes') {
        listAction.style.opacity = 1;
        not__here.style.opacity = 0
        let valueVrai = true
        return valueVrai
    } else {
        listAction.style.opacity = 0;
        not__here.style.opacity = 1
    }
    if (titleClass.title == 'mine' && classPerso == 'mineurs') {
        listAction.style.opacity = 1;
        not__here.style.opacity = 0
        let valueVrai = true
        return valueVrai
    } else {
        listAction.style.opacity = 0;
        not__here.style.opacity = 1
    }




}

function textBtnAction() {
    let titleClass = document.querySelector('.slider__element--show');
    let btnActionPerso = document.querySelector('#actionPerso');

    if (titleClass.title == 'mine') {
        btnActionPerso.innerHTML = 'Aller fracasser des cailloux';
    } else if (titleClass.title == 'carrière') {
        btnActionPerso.innerHTML = 'Aller fracasser des pierres';
    } else if (titleClass.title == 'Paysans') {
        btnActionPerso.innerHTML = 'Aller travailler la terre ';
    } else if (titleClass.title == 'bois') {
        btnActionPerso.innerHTML = 'Aller couper des arbres ';
    }

}


function dodoPersoFc(totalEnergie) {
    if (totalEnergie <= 100 && totalEnergie >= 80) {
        setTimeout(() => {
            totalEnergie = totalEnergie + 20;
            barreenergieperso.innerHTML = totalEnergie;
        }, 600000)
        setTimeout(() => {
            totalEnergie = totalEnergie + 20;
            barreenergieperso.innerHTML = totalEnergie;
        }, 1200000)
    } else if (totalEnergie == 100) {
        setTimeout(() => {
            totalEnergie = totalEnergie + 20;
            barreenergieperso.innerHTML = totalEnergie;
        }, 600000)
    } else {
        if (totalEnergie <= 80 && totalEnergie >= 60) {
            setTimeout(() => {
                totalEnergie = totalEnergie + 20;
                barreenergieperso.innerHTML = totalEnergie;
            }, 600000)
            setTimeout(() => {
                totalEnergie = totalEnergie + 20;
                barreenergieperso.innerHTML = totalEnergie;
            }, 1200000)
            setTimeout(() => {
                totalEnergie = totalEnergie + 20;
                barreenergieperso.innerHTML = totalEnergie;
            }, 1800000)
        } else if (totalEnergie <= 60 && totalEnergie >= 40) {
            setTimeout(() => {
                totalEnergie = totalEnergie + 20;
                barreenergieperso.innerHTML = totalEnergie;
            }, 600000)
            setTimeout(() => {
                totalEnergie = totalEnergie + 20;
                barreenergieperso.innerHTML = totalEnergie;
            }, 1200000)
            setTimeout(() => {
                totalEnergie = totalEnergie + 20;
                barreenergieperso.innerHTML = totalEnergie;
            }, 1800000)
            setTimeout(() => {
                totalEnergie = totalEnergie + 20;
                barreenergieperso.innerHTML = totalEnergie;
            }, 2400000)
        } else if (totalEnergie <= 40 && totalEnergie >= 20) {
            setTimeout(() => {
                totalEnergie = totalEnergie + 20;
                barreenergieperso.innerHTML = totalEnergie;
            }, 600000)
            setTimeout(() => {
                totalEnergie = totalEnergie + 20;
                barreenergieperso.innerHTML = totalEnergie;
            }, 1200000)
            setTimeout(() => {
                totalEnergie = totalEnergie + 20;
                barreenergieperso.innerHTML = totalEnergie;
            }, 1800000)
            setTimeout(() => {
                totalEnergie = totalEnergie + 20;
                barreenergieperso.innerHTML = totalEnergie;
            }, 2400000)
            setTimeout(() => {
                totalEnergie = totalEnergie + 20;
                barreenergieperso.innerHTML = totalEnergie;
            }, 3000000)
        } else if (totalEnergie <= 20 && totalEnergie >= 0) {
            setTimeout(() => {
                totalEnergie = totalEnergie + 20;
                barreenergieperso.innerHTML = totalEnergie;
            }, 600000)
            setTimeout(() => {
                totalEnergie = totalEnergie + 20;
                barreenergieperso.innerHTML = totalEnergie;
            }, 1200000)
            setTimeout(() => {
                totalEnergie = totalEnergie + 20;
                barreenergieperso.innerHTML = totalEnergie;
            }, 1800000)
            setTimeout(() => {
                totalEnergie = totalEnergie + 20;
                barreenergieperso.innerHTML = totalEnergie;
            }, 2400000)
            setTimeout(() => {
                totalEnergie = totalEnergie + 20;
                barreenergieperso.innerHTML = totalEnergie;
            }, 3000000)
            setTimeout(() => {
                totalEnergie = totalEnergie + 20;
                barreenergieperso.innerHTML = totalEnergie;
            }, 3600000)
        }


    }
}

