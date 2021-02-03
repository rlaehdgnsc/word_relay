var word = document.createElement('div')
var sButton = document.createElement('button');
var inputText = document.createElement('input');
var form = document.createElement('form');

sButton.textContent = "send";
word.textContent = "시작";

document.body.append(form);
form.append(inputText);
form.append(sButton);
document.body.append(word);

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    if(word.textContent[word.textContent.length-1] === inputText.value[0]){
        alert('R');
        word.textContent = inputText.value;
        inputText.value = "";
    }else{
        alert('W');
        inputText.value = "";
    }
    inputText.focus();
});