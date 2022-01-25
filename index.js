const info = {
  author: {
    firstName: "Asabeneh",
    lastName: "Yetayeh",
    titles: [
      ["🌱", "Educator"],
      ["💻", "Programmer"],
      ["🌐", "Developer"],
      ["🔥", "Motivator"],
      ["📔", "Content Creator"],
    ],
  },
  technologies: [
    "Python",
    "Numpy",
    "Pandas",
    "MongoDB",
    "JavaScript",
    "Node",
    "Redux",
    "React",
    "HTML",
  ],
  challenges: [
    "Javascript for everyone",
    "30Days of Python",
    "30Days of Javascript",
  ],
  bio: `I am Asabeneh Yetayeh educator, developer, motivator and content creator.`,
};

const authorName = document.getElementById("author-name");
authorName.textContent = `${info.author.firstName} ${info.author.lastName}`;

const challenges = document.querySelectorAll("#challenges div");
challenges.forEach((element, i) => {
  element.textContent = info.challenges[i].toUpperCase();
});

const techContainer = document.querySelector("#teach");
const tech = document.createElement("span");

let count = 0;

setInterval(() => {
  info.technologies.forEach((element, i) => {
    if (count == i) {
      tech.textContent = element;
      if (count == info.technologies.length - 1) {
        count = -1;
      }
    }
  });
  count++;
}, 3000);

techContainer.appendChild(tech);

const titleContainer = document.querySelector("#titles");
const titleIcon = document.querySelector("#titles span:first-child");
const titleText = document.querySelector("#titles span:last-child");
let titleCount = 1;

for ([icon, title] of info.author.titles) {
  titleIcon.textContent = icon;
  titleText.textContent = title;
  break;
}

setInterval(() => {
  info.author.titles.forEach(([icon, title], i) => {
    if (titleCount == i) {
      titleIcon.textContent = icon;
      titleText.textContent = title;
      if (titleCount == info.author.titles.length - 1) {
        titleCount = -1;
      }
    }
  });
  titleCount++;
}, 3000);

titleContainer.appendChild(titleIcon);
titleContainer.appendChild(titleText);
