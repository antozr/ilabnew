"use strict";

// capacité selon la classe du user
const classes = ['géologue', 'bucheron', 'mineur', 'fermier']
const userClass = classes[1]


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
const travailHover = document.querySelectorAll('.command__button--travail')
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
const reposHover = document.querySelectorAll('.command__button--repos')
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
const détenteHover = document.querySelectorAll('.command__button--détente')
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

