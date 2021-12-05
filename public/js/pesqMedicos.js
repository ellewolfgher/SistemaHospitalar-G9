function pesquisarMedico() {
  var input, filter, card, nomeMedico, i, txtValue;

  input = document.getElementById('input-pesquisa');
  filter = input.value.toUpperCase();
  card = document.getElementById('card-conteudo');
  let conteudo = card.getElementsByTagName('div');

  for (i = 0; i < conteudo.length; i++) {
    nomeSpec = conteudo[i].getElementsByTagName('span')[0];
    if (nomeSpec) {
      txtValue = nomeSpec.textContent || nomeSpec.innerText;

      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        console.log(txtValue);
        console.log(conteudo[i]);
        conteudo[i].style.display = '';
        console.log(conteudo[i]);
      } else {
        console.log(conteudo[i]);
        conteudo[i].style.display = 'none';
        console.log(conteudo[i]);
      }
    }
  }
}
// function pesquisarMedico() {
//   var input, filter, card, nomeMedico, i, txtValue;

//   input = document.getElementById('input-pesquisa');
//   filter = input.value.toUpperCase();
//   card = document.getElementById('card-container');
//   conteudo = card.getElementById('card-conteudo');

//   for (i = 0; i < conteudo.length; i++) {
//     nomeMedico = conteudo[i].getElementsByClassName('medicoEspec')[0];

//     if (nomeMedico) {
//       txtValue = nomeMedico.textContent || nomeMedico.innerText;

//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         conteudo[i].style.display = '';
//       } else {
//         conteudo[i].style.display = 'none';
//       }
//     }
//   }
// }
