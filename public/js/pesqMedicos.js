//pesquisa por médico
function pesquisarMedico() {

  let input, cardContainer, cards, i;

  input = document.getElementById('filter-medico').value.toUpperCase()
  cardContainer = document.getElementById('card-container')
  cards = cardContainer.getElementsByClassName('card')

  for(i = 0; i < cards.length; i++) {
    let title = cards[i].querySelector('.card-body h4.card-title')
    if(title.innerText.toUpperCase().indexOf(input) > -1) {
      cards[i].style.display = "";
    }else{
      cards[i].style.display = "none";
    }
  }
}


//pesquisa por especialidade
function pesquisarEspec() {
  let input, cardContainer, cards, i;

  input = document.getElementById('filter-espec').value.toUpperCase()
  cardContainer = document.getElementById('card-container')
  cards = cardContainer.getElementsByClassName('card')

  for(i = 0; i < cards.length; i++) {
    let title = cards[i].querySelector('.card-body li.espec')
    if(title.innerText.toUpperCase().indexOf(input) > -1) {
      cards[i].style.display = "";
    }else{
      cards[i].style.display = "none";
    }
  }
}