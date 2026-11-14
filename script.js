document.getElementById('calc-btn').addEventListener('click', function() {
  var input = document.getElementById('expr').value.trim();
  var resultEl = document.getElementById('result');
  
  if (!input) {
    resultEl.textContent = 'Введите выражение';
    return;
  }
  
  var parts = input.split(/\s+/);
  if (parts.length !== 3) {
    resultEl.textContent = 'Ошибка: формат — число оператор число';
    return;
  }
  
  var a = parseFloat(parts[0]);
  var op = parts[1];
  var b = parseFloat(parts[2]);
  
  if (isNaN(a) || isNaN(b)) {
    resultEl.textContent = 'Ошибка: неверные числа';
    return;
  }
  
  var res;
  switch (op) {
    case '+': res = a + b; break;
    case '-': res = a - b; break;
    case '*': res = a * b; break;
    case '/':
      if (b === 0) {
        resultEl.textContent = 'Ошибка: деление на ноль';
        return;
      }
      res = a / b;
      break;
    default:
      resultEl.textContent = 'Ошибка: неизвестный оператор';
      return;
  }
  
  resultEl.textContent = 'Результат: ' + res;
});