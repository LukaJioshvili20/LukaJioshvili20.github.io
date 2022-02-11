const projects = [
    {
        'title': 'Dice Roll Game',
        'description':'This is dice roll game',
        'link':'https://lukajioshvili20.github.io/dice-roll-game/'
    },
    {
        'title': 'Guess My Number Game',
        'description':'Retro style simple game',
        'link':'https://lukajioshvili20.github.io/guess-number-game/'
    },
    {
        'title': 'Banking Application',
        'description':'Simple application using javascript functions',
        'link':'https://lukajioshvili20.github.io/banking-application/'
    },
    {
        'title': 'Bank Landing Page',
        'description':'Created Effects and animations for landing page',
        'link':'https://lukajioshvili20.github.io/banking-landing-page/'
    },
    {
        'title': 'Book Storage',
        'description':'University project for subject:web1 presentation',
        'link':'https://lukajioshvili20.github.io/book-storage/'
    },
    {
        'title': 'Movies',
        'description':'Using API and ajax to get information',
        'link':'https://lukajioshvili20.github.io/movies/'
    },
    {
        'title': 'Random Password Generator',
        'description':'',
        'link':'https://lukajioshvili20.github.io/random-password-generator/'
    },
    {
        'title': 'Quiz Application',
        'description':'Simple Quiz application',
        'link':'https://lukajioshvili20.github.io/quiz/'
    },
    {
        'title': 'To-Do application',
        'description':'Animated application using local storage',
        'link':'https://lukajioshvili20.github.io/to-do/'
    },
    {
        'title': 'Bookmarker',
        'description':'Bookmarker using localstorage , bootstrap and Jquery.',
        'link':'https://lukajioshvili20.github.io/bookmarking-application/'
    },
    {
        'title': 'Workout tracker',
        'description':'Leaflet and Geolocation with OOP sturcture.',
        'link':'https://lukajioshvili20.github.io/workout-tracker/'
    },
    /* 
     {
        'title': '',
        'description':'',
        'link':'https://lukajioshvili20.github.io/'
    },
    */
]

buildCards(projects)


function buildCards(data){
    const table = document.querySelector('.page-content')

    for (let i = 0; i < data.length; i++){
        let row = `
            <div class="card">
                <a href="${data[i].link}">
                <div class="content">
                  <h2 class="title">${data[i].title}</h2>
                  <p class="copy">${data[i].description}</p>
                  <button class="btn">View Project</button>
                </div>
                </a> 
            </div>
        `
        table.innerHTML += row
    }
}