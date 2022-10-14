import { doc, setDoc } from "firebase/firestore";
import db from "../firebase";
// push data
import { collection, addDoc } from "firebase/firestore";
import { store } from "../../app/store";



export default function popUpInfo() {
    console.log('je suis une chie');
    let boxpopup = document.createElement('div');
    boxpopup.classList.add('popup');
    document.querySelector('body').appendChild(boxpopup);
    // creattion des listes 
    let title01pop = document.createElement('h2');
    title01pop.classList.add('popup__title');
    title01pop.innerText = 'Crée ton compte';
    boxpopup.appendChild(title01pop);
    // creation input to pseudo
    let labelInput01pop = document.createElement('label');
    let inputPseudoPop = document.createElement('input');
    inputPseudoPop.classList.add('popup__input');
    inputPseudoPop.type = 'texte';
    inputPseudoPop.value = 'Ex : LeNain';
    inputPseudoPop.addEventListener('click', (e) => {
        e.target.value = " ";
    });
    labelInput01pop.textContent = "Rentre ton pseudo :";
    labelInput01pop.classList.add('popup__label');
    boxpopup.appendChild(labelInput01pop);
    boxpopup.appendChild(inputPseudoPop);

    // le selecteur de classe 
    let selectinputpop = document.createElement('select');
    let labelSelectpop = document.createElement('label');
    let optionSelectpop = document.createElement('option');
    optionSelectpop.classList.add('popup__option');
    let optionSelectpop1 = document.createElement('option');
    optionSelectpop1.classList.add('popup__option');
    let optionSelectpop2 = document.createElement('option');
    optionSelectpop2.classList.add('popup__option');
    let optionSelectpop3 = document.createElement('option');
    optionSelectpop3.classList.add('popup__option');
    //
    labelSelectpop.classList.add('popup__label');
    labelSelectpop.innerText = "Choisi ton district";
    // 
    optionSelectpop.value = "mineurs";
    optionSelectpop.text = "mineurs";
    // 
    optionSelectpop1.value = "Paysans";
    optionSelectpop1.text = "Paysans";
    // 
    optionSelectpop2.value = "bucherons";
    optionSelectpop2.text = "bucherons";
    // 
    optionSelectpop3.value = "caristes";
    optionSelectpop3.text = "caristes";

    selectinputpop.classList.add('popup__select');
    boxpopup.appendChild(labelSelectpop);
    boxpopup.appendChild(selectinputpop);
    selectinputpop.appendChild(optionSelectpop);
    selectinputpop.appendChild(optionSelectpop1);
    selectinputpop.appendChild(optionSelectpop2);
    selectinputpop.appendChild(optionSelectpop3);


    /// le btn pour envoyer les datas 
    let btnpopdata = document.createElement('button');
    btnpopdata.textContent = 'confirmer les infos';
    btnpopdata.classList.add('popup__btn');

    btnpopdata.addEventListener('click', (e) => {
        let dataPseudo = document.querySelector('.popup__input');
        localStorage.setItem('pseudo', dataPseudo.value);
        let dataClass = document.querySelector('.popup__select');
        localStorage.setItem('class', dataClass.value);



        try {
            const docRef = addDoc(collection(db, "users"), {
                utilisateur: store.getState().user.user.displayName,
                email : store.getState().user.user.email,
                pseudo: dataPseudo.value,
                metier: dataClass.value
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    })
    boxpopup.appendChild(btnpopdata);



}