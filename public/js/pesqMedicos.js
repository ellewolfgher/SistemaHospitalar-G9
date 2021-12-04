function pesquisarMedico() {

  var input, filter, card, nomeMedico, i, txtValue;

  input = document.getElementById("input-pesquisa");
  filter = input.value.toUpperCase();
  card = document.getElementById("card-container");
  conteudo = card.getElementById("card-conteudo");

  for (i = 0; i < conteudo.length; i++) {

    nomeMedico = conteudo[i].getElementsByClassName("medicoEspec")[0];

    if (nomeMedico) {

      txtValue = nomeMedico.textContent || nomeMedico.innerText;

      if (txtValue.toUpperCase().indexOf(filter) > -1) {

        conteudo[i].style.display = "";

      } else {

        conteudo[i].style.display = "none";

      }
    }


  }
}

// $(() => {
//   $(".esconder").hide();
// });
