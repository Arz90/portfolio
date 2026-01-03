// Scroll suave para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach((enlace) => {
  enlace.addEventListener("click", function (e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute("href"));
    if (destino) {
      destino.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Animación flip para Herramientas
function flipTo(category) {
  const card = document.getElementById("herramientas-card");
  const content = document.getElementById("flip-content");
  card.classList.add("flipped");

  let icons = "";
  let title = "";

  switch (category) {
    case "desarrollo":
      title = `<span data-lang="hab-desarrollo">${translations[currentLanguage]["hab-desarrollo"]}</span>`;
      icons = `
        <i class="devicon-vscode-plain colored fa-2x"></i>
        <i class="devicon-git-plain colored fa-2x"></i>
        <i class="devicon-prettier-plain colored fa-2x"></i>
        <i class="devicon-postman-plain colored fa-2x"></i>
        <i class="devicon-mongodb-plain colored fa-2x"></i>
      `;
      break;
    case "diseño":
      title = `<span data-lang="hab-diseno">${translations[currentLanguage]["hab-diseno"]}</span>`;
      icons = `
        <i class="devicon-figma-plain colored fa-2x"></i>
        <i class="devicon-bootstrap-plain colored fa-2x"></i>
        <i class="devicon-fontawesome-plain colored fa-2x"></i>
        <i class="devicon-devicon-plain colored fa-2x"></i>
        <i class="devicon-html5-plain colored fa-2x"></i> <!-- para AdminLTE -->
      `;
      break;
    case "colaboracion":
      title = `<span data-lang="hab-colaboracion">${translations[currentLanguage]["hab-colaboracion"]}</span>`;
      icons = `
        <i class="devicon-github-original colored fa-2x"></i>
        <i class="devicon-vercel-plain colored fa-2x"></i>
        <i class="devicon-jira-plain colored fa-2x"></i>
        <i class="devicon-slack-plain colored fa-2x"></i>
      `;
      break;
    case "entornos":
      title = `<span data-lang="hab-entornos">${translations[currentLanguage]["hab-entornos"]}</span>`;
      icons = `
        <i class="devicon-chrome-plain colored fa-2x"></i>
        <p class="mt-2" data-lang="hab-entornos-desc">${translations[currentLanguage]["hab-entornos-desc"]}</p>
      `;
      break;
  }

  content.innerHTML = `<h4>${title}</h4><div class="mt-3">${icons}</div>`;
}

// Flip Cards - Volteo
function flipBack() {
  const card = document.getElementById("herramientas-card");
  const front = card.querySelector(".front");
  const flipContent = document.getElementById("flip-content");

  // Limpia el contenido dinámico del reverso
  flipContent.innerHTML = "";

  // Reinicia animación de entrada en la cara frontal
  front.classList.remove("fade-in");
  void front.offsetWidth; // fuerza reflow
  front.classList.add("fade-in");

  // Ejecuta el giro
  card.classList.remove("flipped");
}

// Contacto - formulario para enviar email
(function () {
  emailjs.init("ud-FQw6PDoE2yXAxt"); // aquí va tu Public Key de EmailJS
})();

document
  .getElementById("form-contacto")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Generar fecha y hora en el idioma actual
    const ahora = new Date();
    const locale = currentLanguage === "es" ? "es-ES" : "en-US";
    document.getElementById("time").value = new Intl.DateTimeFormat(locale, {
      weekday: "long", // día de la semana
      year: "numeric", // año completo
      month: "long", // mes en texto
      day: "numeric", // día del mes
      hour: "2-digit", // hora con dos dígitos
      minute: "2-digit", // minutos con dos dígitos
    }).format(ahora);

    emailjs.sendForm("cv_adrianromero", "template_anxrjcu", this).then(
      () => {
        Swal.fire({
          icon: "success",
          title: translations[currentLanguage]["contacto-exito-titulo"],
          text: translations[currentLanguage]["contacto-exito-texto"],
          confirmButtonColor: "#fdd835",
        });
        this.reset();
      },
      (error) => {
        Swal.fire({
          icon: "error",
          title: translations[currentLanguage]["contacto-error-titulo"],
          text: translations[currentLanguage]["contacto-error-texto"],
          confirmButtonColor: "#fdd835",
        });
        console.error("EmailJS error:", error);
      }
    );
  });

// Cerrar menú hamburguesa al hacer click en cualquier enlace
document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
  link.addEventListener("click", function () {
    const navbarCollapse = document.getElementById("navbarNav");
    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
      toggle: false,
    });
    bsCollapse.hide();
  });
});

// Sistema de idiomas
let currentLanguage = "es";

function toggleLanguage() {
  currentLanguage = currentLanguage === "es" ? "en" : "es";
  document.getElementById("current-lang").textContent =
    currentLanguage === "es" ? "Es" : "En";
  translatePage();
}

function translatePage() {
  const elements = document.querySelectorAll("[data-lang]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-lang");
    if (translations[currentLanguage][key]) {
      // Usar innerHTML en lugar de textContent para permitir HTML
      el.innerHTML = translations[currentLanguage][key];
    }
  });
}
