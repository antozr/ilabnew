



export default function boxChoice(textMessage) {
    /// create box pop up
    let textMessage2 = textMessage;
    //let textMessage = 'Il y a le feu dans le district des mines.\n Allez les aider ?';

    new boxPopTeam(textMessage2);

    let allMessage = document.querySelectorAll('.popupChoice');
    let endMessage = document.querySelector('.popupChoice');
    if (allMessage.length > 4) {
        console.log(allMessage.length);
        let lastMSG = document.querySelector('.popupChoice__list');
        endMessage.parentNode.removeChild(endMessage.parentNode.firstChild)
    }


    // CREER un timer avec les résultat du vote 
    // envoyer le choix du vote sur le serveur 
    //  Faire réactif avec les event naturel 



}
const boxPopTeam = (textMessage) => {
    let boxPop = document.createElement('li');
    boxPop.classList.add('popupChoice');
    document.querySelector('.popupChoice__list').appendChild(boxPop);
    //
    let textBoxPop = document.createElement('p');
    textBoxPop.innerText = textMessage;
    boxPop.appendChild(textBoxPop);
    //
    let boxBtn = document.createElement('div');
    boxBtn.classList.add('popupChoice__btnBox');
    boxPop.appendChild(boxBtn);
    //
    let btnAccept = document.createElement('button');
    btnAccept.classList.add('popupChoice__btnChoice');
    btnAccept.classList.add('popupChoice__btnChoice--vert');
    btnAccept.textContent = 'Accepter';
    boxBtn.appendChild(btnAccept);

    btnAccept.addEventListener('click', (e) => {
        console.log('je ne suis pas un connard')
        boxPop.classList.add('popupChoice__animSortie');
        let target1 = e.target.parentNode.parentNode;
        let valueChoice = true;
        exitpopUp(target1, valueChoice)
    })
    //
    let btnrefu = document.createElement('button');
    btnrefu.classList.add('popupChoice__btnChoice');
    btnrefu.classList.add('popupChoice__btnChoice--rouge');
    btnrefu.textContent = 'Refuser';
    boxBtn.appendChild(btnrefu)
    //
    btnrefu.addEventListener('click', (e) => {
        console.log('Je refuse, je suis un connard');

        boxPop.classList.add('popupChoice__animSortie');
        let target1 = e.target.parentNode.parentNode;
        let valueChoice = false;
        exitpopUp(target1, valueChoice)



    })
}


function exitpopUp(target1, valueChoice) {

    localStorage.setItem('Choix de l\'utilisateur', valueChoice);
    setTimeout(() => {

        let endMessage = document.querySelector('.popupChoice');
        endMessage.parentNode.removeChild(target1);
        console.log('yes, un connard en moins ');
    }, 810);


}

function timerVote() {
    let boxTimer = document.createElement('div');

    let timerText = document.createElement('p');
    timerText.innerText = "Je suis le timer !!"
}