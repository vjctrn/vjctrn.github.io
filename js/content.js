const techStack = [
  ["mysql-plain", "SQL"],
  ["python-plain", "Python"],
  ["php-plain", "PHP"],
  ["html5-plain", "HTML5"],
  ["css3-plain", "CSS3"],
  ["javascript-plain", "JavaScript"],
  ["bootstrap-plain", "Bootstrap"],
  ["csharp-plain", "C#"],
  ["cplusplus-plain", "C++"],
  ["flask-original", "Flask"],
];

const tools = [
  ["fa-solid fa-code", "VS Code"],
  ["fa-solid fa-palette", "Canva"],
  ["fa-solid fa-pen-nib", "Figma"],
  ["fa-solid fa-cube", "Blender"],
  ["fa-brands fa-git-alt", "Git"],
  ["fa-brands fa-github", "GitHub"],
];

const achievements = [
  [
    "2024 - Present",
    "DOST Scholar",
    "Passed the DOST Scholarship examination and granted financial support for my academic pursuits.",
  ],
  [
    "2024 - 2026",
    "Technical Committee Member",
    "Computer Society - Polytechnic University of the Philippines Santo Tomas.",
  ],
  [
    "2024 - 2025",
    "Jr. Web Developer",
    "ISKOnnovators Student Community - Polytechnic University of the Philippines Santo Tomas.",
  ],
  ["2024 - 2025", "Dean's Lister", "Academic excellence recognition."],
  [
    "2024 - 2025",
    "Vice President External",
    "Provided leadership and coordination for external relations within the class.",
  ],
];

const activities = [
  [
    "https://github.com/vjctrn/academic",
    "fa-solid fa-folder-open",
    "All Academic Projects",
    "See the complete collection of my academic projects on GitHub.",
    "View repository",
  ],
  [
    "https://vjctrn.github.io/academic/webdev/activities/a01/index.html",
    "fa-solid fa-file-code",
    "Web Development Activity 01",
    "View my bento layout work.",
    "Open activity",
  ],
  [
    "https://vjctrn.github.io/academic/webdev/activities/a02/index.html",
    "fa-solid fa-file-code",
    "Web Development Activity 02",
    "View my JS for loop and JSON work.",
    "Open activity",
  ],
  [
    "https://vjctrn.github.io/academic/webdev/activities/midterm/index.html",
    "fa-solid fa-file-code",
    "Web Development Midterm",
    "View my API work.",
    "Open activity",
  ],
  [
    "https://github.com/vjctrn/academic/tree/main/webdev",
    "fa-solid fa-window-maximize",
    "Web Development Projects",
    "Browse the source code for my web development coursework.",
    "View projects",
  ],
  [
    "https://github.com/vjctrn/academic/tree/main/dba",
    "fa-solid fa-database",
    "Database Administration Projects",
    "Explore my database administration and database-related coursework.",
    "View projects",
  ],
];

const iconCard = (icon, label) => `
  <span class="tech-icon d-flex justify-content-center align-items-center"
    data-bs-toggle="tooltip" data-bs-title="${label}">
    <i class="${icon}" aria-hidden="true"></i>
  </span>`;

document
  .getElementById("tech-stack-list")
  ?.replaceChildren(
    ...techStack.map(([icon, label]) =>
      document
        .createRange()
        .createContextualFragment(iconCard(`devicon-${icon}`, label)),
    ),
  );

document
  .getElementById("tools-list")
  ?.replaceChildren(
    ...tools.map(([icon, label]) =>
      document.createRange().createContextualFragment(iconCard(icon, label)),
    ),
  );

document.getElementById("achievements-list")?.replaceChildren(
  ...achievements.map(([year, title, description]) =>
    document.createRange().createContextualFragment(`
      <div class="col-md-6">
        <div class="achievement-card">
          <div class="year">${year}</div>
          <h5>${title}</h5>
          <p class="mb-0">${description}</p>
        </div>
      </div>`),
  ),
);

document.getElementById("activities-list")?.replaceChildren(
  ...activities.map(([href, icon, title, description, action]) =>
    document.createRange().createContextualFragment(`
      <div class="col-md-6">
        <a class="activity-card d-block h-100" href="${href}"
          target="_blank" rel="noopener noreferrer">
          <i class="${icon} activity-icon" aria-hidden="true"></i>
          <h2>${title}</h2>
          <p class="mb-0">${description}</p>
          <span class="activity-link">${action}
            <i class="fa-solid fa-arrow-up-right"></i>
          </span>
        </a>
      </div>`),
  ),
);
