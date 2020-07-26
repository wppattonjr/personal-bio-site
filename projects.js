"use strict"

const projects = [
    {
        title: "Cool Project 1", 
        screenshot: "https://greenlightcorp.com/wp-content/uploads/2019/07/Shall-we-play-a-game.jpg", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"

    },
    {
        title: "Cool Project 2", 
        screenshot: "https://greenlightcorp.com/wp-content/uploads/2019/07/Shall-we-play-a-game.jpg", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"

    },
    {
        title: "Cool Project 3", 
        screenshot: "https://greenlightcorp.com/wp-content/uploads/2019/07/Shall-we-play-a-game.jpg", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
    },
    {
        title: "Cool Project 4", 
        screenshot: "https://greenlightcorp.com/wp-content/uploads/2019/07/Shall-we-play-a-game.jpg", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
    },
    {
        title: "Cool Project 5", 
        screenshot: "https://greenlightcorp.com/wp-content/uploads/2019/07/Shall-we-play-a-game.jpg", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
    },
    {
        title: "Cool Project 3", 
        screenshot: "https://greenlightcorp.com/wp-content/uploads/2019/07/Shall-we-play-a-game.jpg", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
    }
    
    
    

    
]

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
}

const buildProjectCards = () => {
    let domString = '';

    for (let i = 0; i < projects.length; i++) {
        domString += `<div class='projectCards'>`
        domString +=    `<h1>${projects[i].title}</h1>`;
        domString +=    `<div><img src=${projects[i].screenshot}></div>`;
        domString +=    `<h2>${projects[i].description}</h2>`;
        domString +=    `<h3>Technologies Used: ${projects[i].technologiesUsed}</h3>`;
        domString +=    `<h4>Available: ${projects[i].available}</h4>`;
        domString +=    `<h5>${projects[i].url}</h5>`;
        domString +=    `<h6>My gitHub URL: <a href=${projects[i].githubUrl}>HERE</a></h6>`;
        domString += `</div>`
    }

    printToDom('projectsPage', domString);

}

buildProjectCards()