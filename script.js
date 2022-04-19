function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
DaysOfMonth(dezDaysList)

function DaysOfMonth(array) {
    let days = document.getElementById('days');
    
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      let listOfDays = document.createElement('li');
      listOfDays.innerText = element;
    
      if(array[index] === 24 || array[index] === 25 || array[index === 31]) {
        listOfDays.className = 'days holiday'
      }
      if ( array[index] === 4 || array[index] === 11 || array[index] === 18 || array[index] === 25) { 
        listOfDays.className = 'days friday'
      } 
      else {
        listOfDays.className = 'days'
        
      }
      days.appendChild(listOfDays)

       
    }  
}
CreateButton()
function CreateButton() {

  let butao = document.querySelector('div');
  butao.className = 'buttons-container'

  let button = document.createElement('button');
  button.innerText = 'Feriados'
  button.setAttribute('id', 'btn-holiday');
  button.style.width = '100px'
button.addEventListener('mouseover', function () {
  button.style.backgroundColor = "rgb( 238, 238, 238)"
})
butao.appendChild(button)
  


}
itsFriday()
function itsFriday () {
  botao = document.querySelector('div');
  button = document.createElement('button'); 
  button.className = 'buttons-container';
  button.setAttribute('id','btn-friday')
  button.innerText = 'Sexta-feira';
  botao.appendChild(button);
  button.style.width ='100px'


}

FridayDay()
function FridayDay() {
let bottonFriday = document.getElementById('btn-friday');
let clicks = 0
bottonFriday.addEventListener('click', function lala (){
clicks = clicks + 1;
let sextas = document.getElementsByClassName('friday');
for(let i = 0 ; i < sextas.length; i++) {
  if(clicks % 2 === 0) {
    let nums = [4,11,18,25]
    for(let index = 0 ; index<nums.length; index++) {
      sextas[i].innerText = nums[i]
    }
  } else {
    sextas[i].innerText = 'sextou!'
  }
}

})

}
days()
  function days () {
    let dias = document.getElementsByClassName('days');
    let clicks = 0
    for (let index = 0; index < dias.length; index++) {
      dias[index].addEventListener('mouseover', function day(element) {
        clicks = clicks + 1
        if(clicks%2 ===0) {
          dias[index].style.fontSize= '50px' 
        }else {
          dias[index].style.fontSize = '20px'
        }
      })
      
    }
    
  }
  let text = 'blablalbalblalblablalbalblalblbalblablalbablabalalblablablablablabalblabla'
  makeSomething(text)
  function makeSomething(entrada){
    let local = document.querySelector('.my-tasks')
    let p = document.createElement('span');
    p.innerText = entrada;
    local.appendChild(p)

  }
  