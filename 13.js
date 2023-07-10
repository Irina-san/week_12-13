function calculateDaysToBirthday() {
  let birthdayInput = document.getElementById('birthday');
  let birthday = new Date(birthdayInput.value);
  let today = new Date();

  // Устанавливаем год рождения таким же, как текущий год
  birthday.setFullYear(today.getFullYear());

  // Если день рождения уже был в этом году, устанавливаем день рождения на следующий год
  if (today > birthday) {
    birthday.setFullYear(today.getFullYear() + 1);
  }

  // Вычисляем разницу в днях между текущей датой и днем рождения
  let daysToBirthday = Math.ceil((birthday - today) / (1000 * 60 * 60 * 24));

  let result = document.getElementById('result');
  let daysLabel;

   // Определяем склонение слова "день" в соответствии с количеством дней
  if (daysToBirthday % 10 === 1 && daysToBirthday % 100 !== 11) {
    daysLabel = 'день';
  } else if ((daysToBirthday % 10 === 2 && daysToBirthday % 100 !== 12) ||
             (daysToBirthday % 10 === 3 && daysToBirthday % 100 !== 13) ||
             (daysToBirthday % 10 === 4 && daysToBirthday % 100 !== 14)) {
    daysLabel = 'дня';
  } else {
    daysLabel = 'дней';
  }

  result.textContent = `До вашего дня рождения осталось ${daysToBirthday} ${daysLabel}.`;
}
/*
if (birthdayInput.value === '') {
  document.getElementById('error-message');
 .innerHTML += 'Введите дату рождения'<br>
} else {
errorMessage.style.display = 'none';
}*/
