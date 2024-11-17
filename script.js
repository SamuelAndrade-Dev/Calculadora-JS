const result = document.querySelector(".result"); // pegar o resultado
const buttons  = document.querySelectorAll(".buttons button"); // pegar todos os buttons (todos os td)

// criar variaveis de calculos

let currentNumber = "";       //numero atual
let firstOpe = null;          //primeiro numero
let operador = null;          //operador
let restart = false;          // Restart 

//funcoes: 

fuction addDigit(digit){    //funcao para add o digito no visor
    if (addDigit === "," && (currentNumber.includes(",") ))
}

//para cada botão (TD)

buttons.forEach(button) => {           //estudar forEach
    button.addEventListener("click", () => {
        const textoBotao = button.innertext;
        if (/^[0-9]+$/.test(textoBotao)){
            addDigit(textoBotao);
        }else if
    })
}