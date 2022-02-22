let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));
console.log(buttons);

buttons.forEach( button => {
  button.addEventListener('click', (e) => {
      if (e.target.innerText == 'C'){
        display.innerText = '';
      }
      else if(e.target.innerText == '←'){
        display.innerText = display.innerText.slice(0,-1);
      }
      else if(e.target.innerText == '=')
      { 
        try{
            display.innerText = eval(display.innerText);
        }
        catch(err){
          display.innerText = "Error";
        }
      }
      else
        display.innerText += e.target.innerText;
  });
});