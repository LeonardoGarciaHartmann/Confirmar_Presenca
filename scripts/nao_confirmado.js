document.addEventListener("DOMContentLoaded", () => {
  const nome = localStorage.getItem("nomeUsuario");
  document.getElementById(
    "mensagem"
  ).textContent = `Entendido, ${nome}, sentiremos sua falta`;
  localStorage.removeItem("nomeUsuario");
});
