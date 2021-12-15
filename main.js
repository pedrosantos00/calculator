
(function() {
    "use strict";
  
// ELEMENTOS
    var el = function(element) {
      if (element.charAt(0) === "#") { 
        return document.querySelector(element); 
      }
  
      return document.querySelectorAll(element); 
    };
  
    // Vars
    var leitura = el("#leitura"), //Visor
      equals = el("#equals"), // igual
      nums = el(".botao"), // Numeros
      ops = el(".botao1"), // operadores
      theNum = "", // 1 numero
      oldNum = "", // 2 numero
      resultNum, // Resultado
      operator; 
  
    // 1 numero
    var setNum = function() {
      if (resultNum) { // resetar numero
        theNum = this.getAttribute("data-num");
        resultNum = "";
      } else { // add numeros
        theNum += this.getAttribute("data-num");
      }
  
      leitura.innerHTML = theNum; // Numero atual
  
    };
  
    // Clicar operador = guardar 1 numero 
    var moveNum = function() {
      oldNum = theNum;
      theNum = "";
      operator = this.getAttribute("data-ops");
  
      equals.setAttribute("data-result", ""); // resetar numero visor
    };
  
    // Clicar = dá numero
    var displayNum = function() {
  
      // Converter para var int
      oldNum = parseFloat(oldNum);
      theNum = parseFloat(theNum);
  
      // operaçoes
      switch (operator) {
        case "plus":
          resultNum = oldNum + theNum;
          break;
  
        case "minus":
          resultNum = oldNum - theNum;
          break;
  
        case "times":
          resultNum = oldNum * theNum;
          break;
  
        case "divided by":
          resultNum = oldNum / theNum;
          break;
  
          // Clicar = sem operador
        default:
          resultNum = theNum;
      }
  
      // Erros
      if (!isFinite(resultNum)) {
        if (isNaN(resultNum)) { 
          resultNum = "Erro!";
        } else { 
          resultNum = "Erro!";
          el('#calculator').classList.add("broken"); 
        }
      }
  
      // Resultado
      leitura.innerHTML = resultNum;
      equals.setAttribute("data-result", resultNum);
  
      // Reset
      oldNum = 0;
      theNum = resultNum;
  
    };
  
    // Botao Clear
    var clearAll = function() {
      oldNum = "";
      theNum = "";
      leitura.innerHTML = "0";
      equals.setAttribute("data-result", resultNum);
    };
  
    // Evento = numeros
    for (var i = 0, l = nums.length; i < l; i++) {
      nums[i].onclick = setNum;
    }
  
    // Evento = operadores
    for (var i = 0, l = ops.length; i < l; i++) {
      ops[i].onclick = moveNum;
    }
  
    // Evento = igual
    equals.onclick = displayNum;
  
    // Evento = clear
    el("#clear").onclick = clearAll;
  

  
  }());

























/*var buttons = document.getElementsByClassName("botao");
var input = document.getElementById("leitura")
var i = 0
if(i < buttons.length){
    i++
    (function(val){
        buttons[val].onclick = function(){
            
            console.log(i)
    }
})
    
}

for (var i=0 ; i < buttons.length ; i++){
    (function(val){
      buttons[val].onclick = function(){

input.value = val+1
      };
    })(i)
  } */
