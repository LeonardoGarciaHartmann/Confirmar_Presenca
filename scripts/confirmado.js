document.addEventListener("DOMContentLoaded", () => {
  const nome = localStorage.getItem("nomeUsuario");
  document.getElementById(
    "mensagem"
  ).textContent = `Obrigado, ${nome}, sua presença foi confirmada!`;
  localStorage.removeItem("nomeUsuario");
});
