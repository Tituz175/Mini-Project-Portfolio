const info = {
  author: {
    firstName: "Asabeneh",
    lastName: "Yetayeh",
    titles: [
      ["🌱", "Educator"],
      ["👨‍💻", "Programmer"],
      ["🌐", "Developer"],
      ["🔥", "Motivator"],
      ["📔", "Content Creator"],
      ["👨‍🏫", "Instructor"],
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

let techCount = 1;

for (element of info.technologies) {
  tech.textContent = element;
  tech.setAttribute("id", "python");
  break;
}

setInterval(() => {
  info.technologies.forEach((element, i) => {
    if (techCount == i) {
      tech.textContent = element;
      if (
        element.toLowerCase().includes("java") ||
        element.toLowerCase().includes("html")
      ) {
        tech.setAttribute("id", "javascript");
      } else if (
        element.toLowerCase().includes("node") ||
        element.toLowerCase().includes("mongo")
      ) {
        tech.setAttribute("id", "node");
      } else if (element.toLowerCase().includes("react")) {
        tech.setAttribute("id", "react");
      } else if (element.toLowerCase().includes("red")) {
        tech.setAttribute("id", "redux");
      } else {
        tech.setAttribute("id", "python");
      }
      if (techCount == info.technologies.length - 1) {
        techCount = -1;
      }
    }
  });
  techCount++;
}, 6255);

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
}, 5000);

titleContainer.appendChild(titleIcon);
titleContainer.appendChild(titleText);
