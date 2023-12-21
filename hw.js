// 1)
function calculateVolumeAndArea(edgeCube) { // создаем функцию с параметром "ребро куба"
  if (Number.isInteger(edgeCube) && edgeCube > 0) { // проверяем что это целое число
    const volume = edgeCube ** 3 // вычисляем объем
    const area = 6 * (edgeCube ** 2) // вычисляем площадь
    return (`Объем куба: ${volume}, площадь всей поверхности: ${area}`) //возвращаем знаение параметра
  } else {
    return ('При вычислении произошла ошибка') // выводится, если был введен неверный параметр
  }
}
  console.log(calculateVolumeAndArea(77)) // задаем значение ребра куба и выводим в консоль ответ

// 2)
function getCoupeNumber(seat) { // создаем функцию
    if (typeof seat !== 'number' || !Number.isInteger(seat) || seat < 0)  { // проверяем, является ли полученный параметр не числом, не целым числом, не отрицательным
      return "Ошибка. Проверьте правильность введенного номера места" // если является,  выводим ошибку
    } if (seat == 0 || seat > 36){ // проверяем что это число от 0 до 36
      return "Таких мест в вагоне не существует" // если нет, то выводим ошибку
    } else {
      return Math.ceil(seat/4) // высчитываем какое купе: делим на 4 и кругляем вверх
    }
  }
  console.log(getCoupeNumber(13)) // выводим в консоль номер купе при вводе места
  
// 3)
  const mas = [5, 10, 'Shopping', 20, 'Homework'] // создаем массив
  for(let i = 0; i < mas.length; i++) {  // перебираем каждый элемент массива
  if (typeof mas[i] === 'number') { // если элемен массива число
    mas[i] *= 2; // увеличиваем его в 2 раза
  } else if (typeof mas[i] === 'string') { // если элемент строка 
    mas[i] += ' - done'; // Добавляем ' - done'
  }
}
console.log(mas) // выводим в консоль получившийся массив

// 4)
const data = [5, 10, 'Shopping', 20, 'Homework'] 
const result = []

for (let i = data.length - 1; i >= 0; i--) { // цикл перебирает каждый элемент массива data с конца 
  result.push(data[i]) // добавляет новый элемент в конец массива
}
console.log(result) // выводит в консоль массив result

// 5)
function showFamily(family) { // создаем функцию 
    if (family.length === 0) { // проверяем равны ли нулю элементы массива
      return 'Семья пуста' // если да - выводим сообщение
    } else { // если в массиве есть элементы
      const names = family.join(' ') // объединяем все элементы массива в одну строку
      return `Семья состоит из: ${names}`// возвращаем сообщение с подставленными именами
    }
  }
  const family = ['Peter', 'Ann', 'Alex', 'Linda']
  console.log(showFamily(family))

  const family1 = []
  console.log(showFamily(family1))

  