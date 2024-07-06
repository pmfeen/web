const projects = [
    {
      description: "Project 1: Description of the first project.",
      docUrl: "path/to/project1-doc.pdf",
      iconUrl: "path/to/doc-icon1.png",
    },
    {
      description: "Project 2: Description of the second project.",
      docUrl: "path/to/project2-doc.pdf",
      iconUrl: "path/to/doc-icon2.png",
    },
    // Add more projects as needed
  ];
  
  let currentProjectIndex = 0;
  
  const projectDescriptionElement = document.getElementById("project-description");
  const projectDocIconElement = document.getElementById("project-doc-icon");
  const projectDocLinkElement = document.getElementById("project-doc-link");
  
  const updateProjectContent = () => {
    projectDescriptionElement.textContent = projects[currentProjectIndex].description;
    projectDocIconElement.src = projects[currentProjectIndex].iconUrl;
    projectDocLinkElement.href = projects[currentProjectIndex].docUrl;
  };
  
  document.getElementById("prev-project").addEventListener("click", () => {
    currentProjectIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
    updateProjectContent();
  });
  
  document.getElementById("next-project").addEventListener("click", () => {
    currentProjectIndex = (currentProjectIndex + 1) % projects.length;
    updateProjectContent();
  });
  
  // Initialize with the first project content
  updateProjectContent();
  