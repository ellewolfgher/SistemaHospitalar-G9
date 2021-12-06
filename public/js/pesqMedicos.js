//pesquisa por médico
function pesquisarMedico() {

  let input, cardContainer, cards, title, i;

  input = document.getElementById('filter-medico').value.toUpperCase()
  cardContainer = document.getElementById('card-container')
  cards = cardContainer.getElementsByClassName('card')

  for(i = 0; i < cards.length; i++) {
    title = cards[i].querySelector('.card-body li.medico')
    if(title.innerText.toUpperCase().indexOf(input) > -1) {
      cards[i].style.display = "";
    }else{
      cards[i].style.display = "none";
    }
  }
}


//pesquisa por especialidade na página de médicos em User e ADM
function pesquisarEspec() {

  let input, cardContainer, cards, title,i;

  input = document.getElementById('filter-espec').value.toUpperCase()
  cardContainer = document.getElementById('card-container')
  cards = cardContainer.getElementsByClassName('card')

  for(i = 0; i < cards.length; i++) {
    title = cards[i].querySelector('.card-body li.espec')
    if(title.innerText.toUpperCase().indexOf(input) > -1) {
      cards[i].style.display = "";
    }else{
      cards[i].style.display = "none";
    }
  }
}

//pesquisar por especialidade na página de especialidade
function pesquisarPageEspec() {

  var input, filter, table, tr, td, i, txtValue;

  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}