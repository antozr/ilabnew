// Faire la revieux des niveaux


export default function navNiveau() {
    let allRange = document.querySelectorAll('.nav__rangeINto');
    let valueRangePourcent = 30;
    let i = 0;
    let valueRangeTab = [50, 50, 50, 50];

    setTimeout(() => {
        createNavBox();
    }, 10)
    allRange.forEach(el => {
        console.log(el.title);

        if (valueRangeTab[i] < 30) {
            el.style.backgroundColor = '#FF0F00';
            el.style.width = valueRangeTab[i] + '%';
            //
            let boxPop = document.createElement('div');
            boxPop.classList.add('range__popUp');
            document.querySelector('body').appendChild(boxPop);
            let textBoxPop = document.createElement('p');
            textBoxPop.innerText = 'Vous allez être en pénurie dans ' + el.title;
            boxPop.appendChild(textBoxPop);
            let btnClose = document.createElement('button');
            btnClose.classList.add('range__btn');
            btnClose.textContent = 'X';
            boxPop.appendChild(btnClose);

            btnClose.addEventListener('click', () => {
                boxPop.classList.add('range__animFin');
                setTimeout(() => {
                    boxPop.style.display = 'none';
                }, 600);
            });

            if (i === 3) {
                i = 0;
            } else {
                i++;
            }
        } else {
            el.style.backgroundColor = '#A6DC61';
            el.style.width = valueRangeTab[i] + '%';
            if (i === 3) {
                i = 0;
            } else {
                i++;
            }
        }
    });






}


function createNavBox() {
    let allRangeDiv = document.querySelectorAll('.game__boxNav');

    let titleRange = ['Nouriture', 'Materiaux', 'Satisfaction', 'Argent'];
    //let valueRangeTab = [localStorage.getItem('Nouriturewidth'), localStorage.getItem('Materiauxwidth'), localStorage.getItem('Satisfactionwidth'), localStorage.getItem('Nouriturewidth')];
    let valueRangeTab = [50, 50, 50,50];
    allRangeDiv.forEach((el) => {
        let createList = document.createElement('ul');
        createList.classList.add('nav__range');
        el.appendChild(createList);
        for (let i = 0; i <= 3; i++) {
            new navBoxRange(createList, titleRange[i], valueRangeTab[i]);
        }
    })
    

}


const navBoxRange = (createList, titleRange, valueRangeTab) => {

    let createRangeBox = document.createElement('li');
    createRangeBox.classList.add('nav__rangeBox');
    createList.appendChild(createRangeBox);
    //
    let pTextRange = document.createElement('p');
    pTextRange.classList.add('nav__txt');
    pTextRange.classList.add('nav__txt--range');
    pTextRange.innerText = titleRange;
    createRangeBox.appendChild(pTextRange);
    //
    let rangeOut = document.createElement('div');
    rangeOut.classList.add('nav__rangeIn');
    createRangeBox.appendChild(rangeOut);

    //
    let rangeIn = document.createElement('div');
    rangeIn.title = titleRange;
    rangeIn.classList.add('nav__rangeINto');
    rangeIn.style.width = valueRangeTab + '%';
    if (valueRangeTab < 20) {
        rangeIn.style.backgroundColor = '#FF0F00';
    } else {
        rangeIn.style.backgroundColor = '#A6DC61';
    }
    rangeOut.appendChild(rangeIn);
}