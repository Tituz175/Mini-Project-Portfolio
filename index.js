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

const authorName = document.getElementById("author-name")
authorName.textContent = `${info.author.firstName} ${info.author.lastName}`
