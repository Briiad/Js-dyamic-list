const ul = document.querySelector('ul');
const inputText = document.querySelector('input');
const inputButton = document.querySelector('button');

inputButton.addEventListener('click', function(){
    console.log('The button works!');

    let inputValue = inputText.value;
    inputText.value = '';

    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = inputValue;
    const newBtn = document.createElement('button');
    newBtn.textContent = 'Delete';

    ul.appendChild(li);
    li.appendChild(span);
    li.appendChild(newBtn);

    newBtn.addEventListener('click', function(){
        li.remove();
    });

    inputText.focus();
});