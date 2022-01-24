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

const techContainer = document.querySelector("#teach")
const tech = document.createElement("span")


let count = 0;

setInterval(() => {
  info.technologies.forEach((element, i) => {
    if (count == i) {
      tech.textContent = element
      if (count == info.technologies.length - 1) {
        count = -1;
      }
    }
  });
  count++;
}, 3000);

techContainer.appendChild(tech)
