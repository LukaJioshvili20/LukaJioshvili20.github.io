'use strict';

const projects = [
    {
        'title': 'Dice Roll Game',
        'description':'Two player game , dice the roll and increase your score to beat oponent.',
        'link':'https://lukajioshvili20.github.io/dice-roll-game/',
        'image': '/navigation-images/dice-roll-game.png',
        'tools':'HTML CSS JAVACRIPT'
    },
    {
        'title': 'Guess My Number Game',
        'description':'Single Player retro style Guessing the number game, anyways what is my number ?',
        'link':'https://lukajioshvili20.github.io/guess-number-game/',
        'image': '/navigation-images/guess-number-game.png',
        'tools':'HTML CSS JAVACRIPT'
    },
    {
        'title': 'Banking Application',
        'description':'Dummy Banking Application ',
        'link':'https://lukajioshvili20.github.io/banking-application/',
        'image': '/navigation-images/banking-application.png',
        'tools':'HTML CSS JAVACRIPT'
    },
    {
        'title': 'Bank Landing Page',
        'description':'Animated the TEMPLATE added smooth transistions and scrolls.',
        'link':'https://lukajioshvili20.github.io/banking-landing-page/',
        'image': '/navigation-images/banking-landing-page.png',
        'tools':'HTML CSS JAVACRIPT'
    },
    {
        'title': 'Book Storage',
        'description':'The First University project/presentation of managing book storage ',
        'link':'https://lukajioshvili20.github.io/book-storage/',
        'image': '/navigation-images/book-storage.png',
        'tools':'HTML CSS JAVACRIPT JQUERY'
    },
    {
        'title': 'Movies',
        'description':'Trending Movies on the market using the public API and asynchronous Javascript',
        'link':'https://lukajioshvili20.github.io/movies/',
        'image': '/navigation-images/movies.png',
        'tools':'HTML CSS JAVACRIPT API AJAX'
    },
    {
        'title': 'Random Password Generator',
        'description':'The project generates random and strong passwords.',
        'link':'https://lukajioshvili20.github.io/random-password-generator/',
        'image': '/navigation-images/random-password-generator.png',
        'tools':'HTML CSS JAVACRIPT'
    },
    {
        'title': 'Quiz Application',
        'description':'Choosing the correct answer and getting result.',
        'link':'https://lukajioshvili20.github.io/quiz/',
        'image': '/navigation-images/quiz.png',
        'tools':'HTML CSS JAVACRIPT'
    },
    {
        'title': 'To-Do application',
        'description':'Animated to-do application using Local Storage.',
        'link':'https://lukajioshvili20.github.io/to-do/',
        'image': '/navigation-images/to-do.png',
        'tools':'HTML CSS JAVACRIPT LOCALSTORAGE'
    },
    {
        'title': 'Bookmarker',
        'description':'Create Your favorite website bookmarks and store them in localstorage.',
        'link':'https://lukajioshvili20.github.io/bookmarking-application/',
        'image': '/navigation-images/bookmarking-application.png',
        'tools':'HTML CSS JAVACRIPT JQUERY BOOTSTRAP LOCALSTORAGE'
    },
    {
        'title': 'Workout tracker',
        'description':'Workout Tracker using Leaflet and Geolocation with OOP sturcture.',
        'link':'https://lukajioshvili20.github.io/workout-tracker/',
        'image': '/navigation-images/workout-tracker.png',
        'tools':'HTML CSS JAVASCRIPT API OOP'
    },
    /* 
     {
        'title': '',
        'description':'',
        'link':'https://lukajioshvili20.github.io/',
        'image': '/navigation-images/',
        'tools':''
    },
    */
]

buildCards(projects)

function buildCards(data){
    const table = document.querySelector('.page-content')

    for (let i = 0; i < data.length; i++){
        let row = `
         <div class="xl:w-1/4 md:w-1/2 w-full p-4">
            <a href="${data[i].link}">
            <div class="card bg-gray-100 p-6 rounded-lg">
                <img class="h-40 rounded w-full object-cover object-center mb-6" src="${data[i].image}" alt="content">
                <h3 class="tracking-widest text-yellow-500 pb-1 text-xs font-medium title-font">${data[i].tools}</h3>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">${data[i].title}</h2>
                <p class="leading-relaxed text-base">${data[i].description}</p>
            </div>
            </a>
         </div>
        `
        table.innerHTML += row
    }
}
