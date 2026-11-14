document.getElementById('calc-btn').addEventListener('click', function() {
  var input = document.getElementById('expr').value.trim();
  var resultEl = document.getElementById('result');
  
  if (!input) {
    resultEl.textContent = 'Р’РІРµРґРёС‚Рµ РІС‹СЂР°Р¶РµРЅРёРµ';
    return;
  }
  
  var parts = input.split(/\s+/);
  if (parts.length !== 3) {
    resultEl.textContent = 'РћС€РёР±РєР°: С„РѕСЂРјР°С‚ вЂ” С‡РёСЃР»Рѕ РѕРїРµСЂР°С‚РѕСЂ С‡РёСЃР»Рѕ';
    return;
  }
  
  var a = parseFloat(parts[0]);
  var op = parts[1];
  var b = parseFloat(parts[2]);
  
  if (isNaN(a) || isNaN(b)) {
    resultEl.textContent = 'РћС€РёР±РєР°: РЅРµРІРµСЂРЅС‹Рµ С‡РёСЃР»Р°';
    return;
  }
  
  var res;
  switch (op) {
    case '+': res = a + b; break;
    case '-': res = a - b; break;
    case '*': res = a * b; break;
    case '/':
      if (b === 0) {
        resultEl.textContent = 'РћС€РёР±РєР°: РґРµР»РµРЅРёРµ РЅР° РЅРѕР»СЊ';
        return;
      }
      res = a / b;
      break;
    default:
      resultEl.textContent = 'РћС€РёР±РєР°: РЅРµРёР·РІРµСЃС‚РЅС‹Р№ РѕРїРµСЂР°С‚РѕСЂ';
      return;
  }
  
  resultEl.textContent = 'Р РµР·СѓР»СЊС‚Р°С‚: ' + res;
});