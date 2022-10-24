/// comprend les actions qui vont couté des points au perso 

import boxChoice from "./boxChoiceUser";

export default function actionPerso() {

    let totalEnergie = 120;
    let nbTravailleur = 0; // set avec les actions perso data 
    let btnActionPerso = document.querySelector('#actionPerso');
    let barreenergieperso = document.querySelector('#enrgie');

    let btnDodo = document.querySelector('#dodo');
    barreenergieperso.innerHTML = totalEnergie;
    /// text btn action perso
    setTimeout(()=>{
        textBtnAction();
    },10)
    btnActionPerso.addEventListener('click', () => {

        totalEnergie = totalEnergie - 20;
        nbTravailleur++;
        popListTravailleur(nbTravailleur)
        if (totalEnergie <= 0) {
            barreenergieperso.innerHTML = 0;
            alert('Tu nas plus dernergie !!');

        } else {
            barreenergieperso.innerHTML = totalEnergie;
            if (localStorage.getItem('class') == 'Paysans'){
                var lieux = ' les champs';
            }else if (localStorage.getItem('class') == 'bucherons'){
                var lieux = ' les bois';
            }else if (localStorage.getItem('class') == 'mineurs'){
                var lieux = ' les mines';
            }else if (localStorage.getItem('class') == 'caristes'){
                var lieux = ' les carrières';
            }
            let textMessage = "Tu es parti travailler dans"+ lieux +"!";
            boxChoice(textMessage, false);
            verifTravailSecteur();
           

        }
    });

    /// temps de 6min pour reprendre 20 d'énergies
    btnDodo.addEventListener('click', () => {
        dodoPersoFc(totalEnergie)
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


function popListTravailleur(nbPrs) {

    let boxPopup = document.createElement('div');
    boxPopup.classList.add('popup__Travail');
    document.body.appendChild(boxPopup);

    let textBoxPopUp = document.createElement('p');
    textBoxPopUp.classList.add('popup__txtTravail');
    textBoxPopUp.textContent = 'Travailleur :   ';
    boxPopup.appendChild(textBoxPopUp);

    let textNbPerso = document.createElement('p');
    textNbPerso.classList.add('popup__txtTravail--big');
    textNbPerso.textContent = nbPrs + ' / 4';
    boxPopup.appendChild(textNbPerso);
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

