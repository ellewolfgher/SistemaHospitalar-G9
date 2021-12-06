// function pesquisarMedico() {
//   var input, filter, card, nomeMedico, i, txtValue;

//   input = document.getElementById('input-pesquisa');
//   filter = input.value.toUpperCase();
//   card = document.getElementById('card-conteudo');
//   let conteudo = card.getElementsByTagName('div');

//   for (i = 0; i < conteudo.length; i++) {
//     nomeSpec = conteudo[i].getElementsByTagName('span')[0];
//     if (nomeSpec) {
//       txtValue = nomeSpec.textContent || nomeSpec.innerText;

//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         console.log(txtValue);
//         console.log(conteudo[i]);
//         conteudo[i].style.display = '';
//         console.log(conteudo[i]);
//       } else {
//         console.log(conteudo[i]);
//         conteudo[i].style.display = 'none';
//         console.log(conteudo[i]);
//       }
//     }
//   }
// }

function pesquisarMedico() {
  let input, filter, cards, cardContainer, i, txtValue;

  input = document.getElementById('input-pesquisa');
  filter = input.value.toUpperCase();
  cardContainer = document.getElementById('teste');
  cards = cardContainer.getElementsByClassName('card');

  for (i = 0; i < cards.length; i++) {
    let nomeMedico = cards[i].querySelector('.espec');
    if (nomeMedico.innerText.toUpperCase().indexOf(filter) > -1) {
      cards[i].style.display = '';
    } else {
      cards[i].style.display = 'none';
    }
  }
}
// }
