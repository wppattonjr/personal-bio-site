"use strict"

let projects = [
    {  
        title: "Cool Project1", 
        screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux",

    },
    {
        title: "Cool Project2", 
        screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux",

    },
    {
        title: "Cool Project3", 
        screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux",
    },
    {
        title: "Cool Project4", 
        screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
    }
];

const printToDom = (elementId, textToPrint) => {
    const selectedDiv = document.getElementById(elementId);
    selectedDiv.innerHTML = textToPrint;

}

const createProjectCards = () => {
    let domString ="";

    for (let i=0; i < projects.length; i++) {
        domString += `<div class="projects">`;
        domString +=    `<div class="project-title">Project Name: ${projects[i].title}</div>`
        domString +=    `<div class="project-screenshot"><img src=${projects[i].screenshot}</div>`
        domString +=    `<div class="project-description">${projects[i].description}</div>`
        domString +=    `<div class="project-technologiesUsed">Technologies Used: ${projects[i].technologiesUsed}</div>`
        domString +=    `<div class="project-availability">Is Project Available: ${projects[i].available}</div>`
        domString +=    `<div class="project-url">${projects[i].url}</div>`
        domString +=    `<div class="project-githubUrl">GitHub Url: ${projects[i].githubUrl}</div>`
        domString += `</div>`

    }

    printToDom("projects", domString)
}

createProjectCards()