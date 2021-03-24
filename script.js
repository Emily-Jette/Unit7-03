// This code takes what age the user inputs and compares it to set values to decide what kind of movie they can see alone. 
let age = 0

document.getElementById('button').addEventListener('click', movieCalculation)

function movieCalculation () {
  age = document.getElementById('input').value
  age = parseInt(age)
  if (age >= 17) {
    document.getElementById('answer').innerHTML = 'You can go see R rated movies alone.'
  } else if (age >= 13) {
    document.getElementById('answer').innerHTML = 'You can go see PG13 movies alone.'
  } else if (age >= 5) {
    document.getElementById('answer').innerHTML = 'You can go see G rated movies alone.'
  } else {
    document.getElementById('answer').innerHTML = 'You are too young to watch movies and go anywhere alone.'
  }
  document.getElementById('thanks').innerHTML = 'Thank you for verifying your age!'
}