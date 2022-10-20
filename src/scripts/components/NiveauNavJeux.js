// Faire la revieux des niveaux


export default function navNiveau() {
    let allRange = document.querySelectorAll('.nav__rangeINto');
    let valueRangePourcent = 30;
    let i = 0;
    let valueRangeTab = [50, 60, 30, 100];
    allRange.forEach(el => {
        console.log(el.title);

        if (valueRangeTab[i] < 40) {
            el.style.backgroundColor = '#FF0F00';
            el.style.width = valueRangeTab[i] + '%';
            //
            let boxPop = document.createElement('div');
            boxPop.classList.add('range__popUp');
            document.querySelector('body').appendChild(boxPop);
            let textBoxPop = document.createElement('p');
            textBoxPop.innerText = 'Vous allez être en pénurie dans '+el.title;
            boxPop.appendChild(textBoxPop);
            let btnClose = document.createElement('button');
            btnClose.classList.add('range__btn');
            btnClose.textContent = 'X';
            boxPop.appendChild(btnClose);

            btnClose.addEventListener('click', ()=>{
                boxPop.classList.add('range__animFin');
                setTimeout(()=>{
                    boxPop.style.display= 'none';   
                }, 600);
            });
           
            if (i === 3){
                i = 0;
            }else{
                i++;
            }
        } else {
            el.style.backgroundColor = '#A6DC61';
            el.style.width = valueRangeTab[i] + '%';
            if (i === 3){
                i = 0;
            }else{
                i++;
            }
        }
    });

    
    


}