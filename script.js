(function () {
  const dragElement = document.getElementById("ex3_element");
  const dropZone = document.getElementById("ex3_two");

  dragElement.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", e.target.id);
  });

  dropZone.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  dropZone.addEventListener("drop", (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("text/plain");
    const element = document.getElementById(id);
    dropZone.appendChild(element);
  });
})();
