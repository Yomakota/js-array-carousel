/* Consegna:
Dati tre array contenenti:
 - una lista ordinata di 5 immagini,
 - una lista ordinata dei relativi 5 luoghi e
 - una lista di 5 news,
creare un carosello come nella foto allegata.

MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo l’immagine grande a sinistra e le thumbnails sulla destra in modo da poter stilare lo slider; avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull’aspetto logico.

MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo le immagini dinamicamente servendoci dell’array fornito e un semplice ciclo for che concatena un template literal. Al termine di questa fase ci ritroveremo con lo stesso slider, ma costruito dinamicamente attraverso JavaScript.

MILESTONE 3
Al click dell’utente sulle frecce verso l’alto o verso il basso, l’immagine attiva diventa visibile in formato grande a sinistra e nel suo angolo in basso a destra dovranno essere aggiunti i relativi:
 - titolo e
 - testo.
Allo stesso tempo nelle miniature l’immagine attiva dovrà apparire in evidenza rispetto alle altre.

BONUS:
Aggiungere il ciclo infinito del carosello. Ovvero se la miniatura attiva è la prima e l’utente clicca la freccia verso l’alto, la miniatura che deve attivarsi sarà l’ultima e viceversa per l’ultima miniatura se l’utente clicca la freccia verso il basso.

Prima di partire a scrivere codice:
Non lasciamoci spaventare dalla complessità apparente dell’esercizio, ma analizziamo prima, come abbiamo fatto sempre, cosa ci potrebbe aspettare. Abbiamo completato ormai da qualche giorno la sessione HTML e CSS, se non ci ricordiamo qualcosa andiamo pure a riguardare alcuni argomenti. Non dedichiamo però al ripasso più di una mezz’ora, così da non perdere di vista il focus dell’esercizio. */

const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];

const listSlides = document.querySelector('.main-slide');
const listThumbs = document.querySelector('.thumbnails');

for (let index = 0; index < items.length; index++) {
    let slide;

    slide = `<li class="slide">
                    <img src="${items[index]}" alt="">
                    <div class="img-text">
                        <h1 class="title">${title[index]}</h1>
                        <p class="text">${text[index]}
                        </p>
                    </div>
                </li>`;
                
    listSlides.innerHTML += slide;

    let thumbnail;
    thumbnail = `<li class="thumb-img">
                    <img src="${items[index]}" alt="">
                    <div class="overlay"></div>
                </li>`;

    listThumbs.innerHTML += thumbnail;
}

const slides = document.querySelectorAll('.main-slide .slide');
const thumbs = document.querySelectorAll('.thumbnails .thumb-img');

slides[0].classList.add('first', 'active');
slides[items.length - 1].classList.add('last');
thumbs[0].classList.add('first', 'select');
thumbs[items.length - 1].classList.add('last');

//Click su Next

const next = document.querySelector('.thumbnails .btn.next');
const prev = document.querySelector('.thumbnails .btn.prev');

next.addEventListener('click', function () {

    const slideActive = document.querySelector('.main-slide .active');
    const thumbSelect = document.querySelector('.thumbnails .select');
    const imageNext = slideActive.nextElementSibling;
    imageNext.classList.add('active');
    const thumbNext = thumbSelect.nextElementSibling;
    thumbNext.classList.add('select');

    let slideClass = slideActive.classList;
    let last = false;


    for (let index = 0; index < slideClass.length; index++) {
        const element = slideClass[index];

        if (element == 'last') {
            last = true;
        }

    }

    if (last == false) {
        slideActive.classList.remove('active');
        thumbSelect.classList.remove('select');
    }
});

//Click su Prev

prev.addEventListener('click', function () {

    const slideActive = document.querySelector('.main-slide .active');
    const thumbSelect = document.querySelector('.thumbnails .select');
    const imageNext = slideActive.previousElementSibling;
    imageNext.classList.add('active');
    const thumbNext = thumbSelect.previousElementSibling;
    thumbNext.classList.add('select');

    let slideClass = slideActive.classList;
    let first = false;

    for (let index = 0; index < slideClass.length; index++) {
        const element = slideClass[index];

        if (element == 'first') {
            first = true;
        }
    }

    if (first == false) {
        slideActive.classList.remove('active');
        thumbSelect.classList.remove('select');
    }

});