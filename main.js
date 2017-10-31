let numbers = [];
let pincode = '';

const input = function(e) {
  const value = e.target.id;
  document.getElementById('pin').value += '*';
  pincode += value;
  shuffle(numbers);
  addToForm(numbers);
}

const shuffle = function(a) {
  for(let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
}

for (let i = 0; i < 10; i++) {
  const button = document.createElement("button");
  button.id = i;
  const text = document.createTextNode(''+i);
  button.appendChild(text);
  button.onclick = input;
  numbers.push(button);
}

const addToForm = function(numbers) {
  numbers.forEach(function(number) {
    document.getElementById('numbers').appendChild(number);
  })
}
shuffle(numbers);
addToForm(numbers);

document.getElementById('cancel').onclick = function() {
  pincode = pincode.slice(0, pincode.length - 1);
  const value = document.getElementById('pin').value;
  document.getElementById('pin').value = value.slice(0, value.length - 1);
}

document.getElementById('clear').onclick = function() {
  pincode = '';
  document.getElementById('pin').value = '';
}

document.getElementById('enter').onclick = function() {
  alert(pincode);
}
