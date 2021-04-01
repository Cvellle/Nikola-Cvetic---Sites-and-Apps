function showProjects() {
  const works = document.querySelector(".works-wrapper");
  const hoverPreview = document.querySelectorAll(".work div");

  const imgWrapper = document.querySelector(".imgDiv");
  const imagePrew = document.querySelector(".preview");
  const description = document.querySelector(".descrText");

  hoverPreview.forEach((w) => w.addEventListener("mouseover", showProject));
  works.addEventListener("mouseleave", hideProject);

  function showProject(e) {
    imgWrapper.classList.remove("dn");
    imgWrapper.classList.add("db");
    imagePrew.classList.add("tr03");
    imagePrew.classList.add("op1");
    imagePrew.src = this.parentElement.parentElement.dataset.route;
    description.innerHTML = this.parentElement.parentElement.dataset.descr;
  }

  function hideProject() {
    imagePrew.classList.remove("op1");
  }
}

showProjects();
