"use strict";

const projects = [
  {
    screenshot: "bio-site-project-images/Pet Adoption Screenshot.png",
    title: "Pet Adoption",
    description:
      "This site shows pets that are available for adoption. You can also sort by button click to for the site to show only the type of pet that you select.", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed:
      "HTML, CSS, Vanilla JavaScript, Bootstrap, Version Control with Github",
    url: "https://wendellp-petadoption.netlify.app/", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/wppattonjr/pet-adoption",
  },
];

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const buildProjectCards = () => {
  let domString = "";

  for (let i = 0; i < projects.length; i++) {
    domString += `<div class="card my-2" style="width: 25rem;" id="${i}">
                        <div class="img-container" style="background-image"><img src=${projects[i].screenshot}></div>
                        <h3 class=project-title">${projects[i].title}</h3>
                        <p class="project-description">${projects[i].description}</p>
                        <p class="project-technologies">${projects[i].technologiesUsed}</p>
                        <h5>Project URL: <a href=${projects[i].url}>Project Site</a></h5>
                        <h6>My gitHub URL: <a href=${projects[i].githubUrl}>HERE</a></h6>
                    </div>`;
  }

  printToDom("project-cards", domString);
};

buildProjectCards();
