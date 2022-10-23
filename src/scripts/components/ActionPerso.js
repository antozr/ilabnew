/// comprend les actions qui vont couté des points au perso 

export default function actionPerso() {

    let totalEnergie = 60;
    let nbTravailleur = 0;
    let btnActionPerso = document.querySelector('#actionPerso');
    let barreenergieperso = document.querySelector('#enrgie');

    let btnDodo = document.querySelector('#dodo');
    barreenergieperso.innerHTML = totalEnergie;

    btnActionPerso.addEventListener('click', () => {
        totalEnergie = totalEnergie - 20;
        nbTravailleur++;
        popListTravailleur(nbTravailleur)
        if (totalEnergie <= 0) {
            barreenergieperso.innerHTML = 0;
            alert('Tu nas plus dernergie !!')
        } else {
            barreenergieperso.innerHTML = totalEnergie;

        }
    });

    /// temps de 6min pour reprendre 20 d'énergies
    btnDodo.addEventListener('click', () => {
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
    })
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


