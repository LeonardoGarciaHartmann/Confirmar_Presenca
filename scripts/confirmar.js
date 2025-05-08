function confirmar() {
  let nome = document.getElementById("nomeInput").value;
  let seletor = document.getElementById("seletor").value;

  localStorage.setItem("nomeUsuario", nome);

  if (seletor === "Vou Comparecer") {
    window.location.href = "./pages/confirmado.html";
  } else if (seletor === "") {
    window.alert("Escolha alguma opção");
  } else {
    window.location.href = "./pages/nao_confirmado.html";
  }
}
