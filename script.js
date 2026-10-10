(function () {
  const dragElement = document.getElementById("ex3_element");
  const dropZone1 = document.getElementById("ex3_one")
  const dropZone2 = document.getElementById("ex3_two");

  dragElement.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", e.target.id);
  });

  dropZone1.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  dropZone2.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  dropZone1.addEventListener("drop", (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("text/plain");
    const element = document.getElementById(id);
    dropZone1.appendChild(element);
  });

  dropZone2.addEventListener("drop", (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("text/plain");
    const element = document.getElementById(id);
    dropZone2.appendChild(element);
  });

})();
