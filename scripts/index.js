console.log("ARCHIVISTAS cargada correctamente.")
const form = document.getElementById("uploadForm");
const preview = document.getElementById("preview");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const usuario = document.getElementById("usuario").value;
  const url = document.getElementById("url").value;
  const archivo = document.getElementById("archivo").files[0];

  preview.innerHTML = `<h3>Partitura de ${usuario}</h3>`;

  if (url) {
    preview.innerHTML += `<iframe src="${url}" frameborder="0"></iframe>`;
  }

  if (archivo) {
    const tipo = archivo.type;
    const lector = new FileReader();
    lector.onload = (ev) => {
      if (tipo.startsWith("image/")) {
        preview.innerHTML += `<img src="${ev.target.result}" alt="Vista previa">`;
      } else if (tipo === "application/pdf") {
        preview.innerHTML += `<iframe src="${ev.target.result}" frameborder="0"></iframe>`;
      } else if (tipo.startsWith("audio/")) {
        preview.innerHTML += `<audio controls src="${ev.target.result}"></audio>`;
      }
    };
    lector.readAsDataURL(archivo);
  }

  alert("🎶 ¡Partitura subida (demo local)!");
  form.reset();
});