function toggleMode() {
  /* funcao para alternar entre modo escuro e claro */
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./img/avatar-light.png")
  } else {
    //se estiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./img/Erik.png")
  }
  /* alert("Seja bem vindo")
  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
  */

  //agora, trocar a img com o modo claro
}
