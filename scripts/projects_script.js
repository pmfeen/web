const projects = [
    {
      description: "SecureLLM: A Framework for Provably Secure Large Language Models",
      docUrl: "../assets/securellm.pdf",
      iconUrl: "../assets/securellm.png",
    },
    {
      description: "Improving Deep Learning Based Molecular Fingerprints Through Informed Resampling",
      docUrl: "../assets/NLP_Final_Paper.pdf",
      iconUrl: "../assets/nlp.png",
    },
    {
      description: "Using Compositionality for LLM Leak Detection and Source Identification",
      docUrl: "../assets/le.pdf",
      iconUrl: "../assets/plerplexity.png"

    }
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
  