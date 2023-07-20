document.addEventListener("DOMContentLoaded", function() {
  const frontendBtn = document.getElementById("frontend-btn");
  const backendBtn = document.getElementById("backend-btn");
  const reactBtn = document.getElementById("react-btn");
  const vueBtn = document.getElementById("vue-btn");
  const csharpBtn = document.getElementById("csharp-btn");
  const javaBtn = document.getElementById("java-btn");
  const specializeBtn = document.getElementById("specialize-btn");
  const fullstackBtn = document.getElementById("fullstack-btn");
  const addBtn = document.getElementById("add-btn");
  const technologyInput = document.getElementById("technology-input");
  const technologyList = document.getElementById("technology-list");
  const finalTechnologies = document.getElementById("final-technologies");
  const finishBtn = document.getElementById("finish-btn");

  let selectedArea = "";
  let selectedTechnology = "";
  let selectedChoice = "";

  frontendBtn.addEventListener("click", function() {
    selectedArea = "Front-End";
    hideElement(frontendBtn);
    hideElement(backendBtn);
    showElement("frontend-section");
  });

  backendBtn.addEventListener("click", function() {
    selectedArea = "Back-End";
    hideElement(frontendBtn);
    hideElement(backendBtn);
    showElement("backend-section");
  });

  reactBtn.addEventListener("click", function() {
    selectedTechnology = "React";
    hideElement(reactBtn);
    hideElement(vueBtn);
    showElement("choices-section");
  });

  vueBtn.addEventListener("click", function() {
    selectedTechnology = "Vue";
    hideElement(reactBtn);
    hideElement(vueBtn);
    showElement("choices-section");
  });

  csharpBtn.addEventListener("click", function() {
    selectedTechnology = "C#";
    hideElement(csharpBtn);
    hideElement(javaBtn);
    showElement("choices-section");
  });

  javaBtn.addEventListener("click", function() {
    selectedTechnology = "Java";
    hideElement(csharpBtn);
    hideElement(javaBtn);
    showElement("choices-section");
  });

  specializeBtn.addEventListener("click", function() {
    selectedChoice = "Especializar";
    hideElement(specializeBtn);
    hideElement(fullstackBtn);
    showElement("technologies-section");
  });

  fullstackBtn.addEventListener("click", function() {
    selectedChoice = "Fullstack";
    hideElement(specializeBtn);
    hideElement(fullstackBtn);
    showElement("technologies-section");
  });

  addBtn.addEventListener("click", function() {
    const technology = technologyInput.value.trim();
    if (technology !== "") {
      technologyList.innerHTML += `<li>${technology}</li>`;
      technologyInput.value = "";
      technologyInput.focus();
    }
  });

  technologyInput.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      addBtn.click();
    }
  });

  finishBtn.addEventListener("click", function() {
    const technologies = Array.from(document.querySelectorAll("#technology-list li")).map(li => li.textContent.trim());
    const message = `Área: ${selectedArea}, Tecnologia: ${selectedTechnology}, Escolha: ${selectedChoice}, Tecnologias Escolhidas: ${technologies.join(", ")}`;
    swal({
      title: "Finalizado!",
      text: message,
      icon: "success",
    }).then(() => {
      location.reload(); // Recarregar a página após o jogador clicar em "OK" no SweetAlert
    });
  });

  function hideElement(element) {
    element.classList.add("hidden");
  }

  function showElement(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove("hidden");
  }

});
