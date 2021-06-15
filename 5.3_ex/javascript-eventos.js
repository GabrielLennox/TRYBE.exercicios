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

function createMonthDays(daysArray) {
  for (const day of daysArray) {
    const monthDay = document.createElement('li');
    monthDay.innerHTML = day;
    monthDay.className = 'day';

    if (day === 24 || day === 25 || day === 31) {
      monthDay.classList.add('holiday');
    }

    if (day === 4 || day === 11 || day === 18 || day === 25) {
      monthDay.classList.add('friday');
    }

    document.getElementById('days').appendChild(monthDay);
  }
}

createMonthDays(dezDaysList);

function createHolidayButton(buttonName) {
  const button = document.createElement('button');

  button.type = 'button';
  button.className = 'btn-holiday';
  button.innerHTML = buttonName;

  document.querySelector('.buttons-container').appendChild(button);
}

createHolidayButton('Feriados');

document.querySelector('.btn-holiday').addEventListener('click', function() {
  const holidays = document.querySelectorAll('.holiday');

  holidays.forEach(holiday => {
    if (holiday.style.color !== 'red') {
      holiday.style.color = 'red';
    } else {
      holiday.style.color = '#777';
    }
  });

});

function createFridayButton(buttonName) {
  const button = document.createElement('button');

  button.type = 'button';
  button.className = 'btn-friday';
  button.innerHTML = buttonName;

  document.querySelector('.buttons-container').appendChild(button);
}

createFridayButton('Sexta-feira');

document.querySelector('.btn-friday').addEventListener('click', function() {
  const fridays = document.querySelectorAll('.friday');

  fridays.forEach(friday => {
    if (friday.style.color !== 'blue') {
      friday.style.color = 'blue';
    } else {
      friday.style.color = '#777';
    }
  });

});

const days = document.getElementById('days');

days.addEventListener('mouseover', function(event) {
  event.target.style.fontSize = '40px';
});

days.addEventListener('mouseout', function(event) {
  event.target.style.fontSize = '20px';
})

document.getElementById('btn-add').addEventListener('click', function() {
  const task = document.createElement('span');
  const taskInput = document.getElementById('task-input');

  task.innerText = taskInput.value;
  document.querySelector('.my-tasks').appendChild(task);
  taskInput.value = '';
})
