
let peso;
let altura;



document.getElementById("botão-enviar-IMC").onclick = function calculaIMC(){

    peso = document.getElementById("peso").value;

    console.log(peso);

    altura = document.getElementById("altura").value;

    console.log(altura);

    if(altura > 1 && peso > 1){
        
        let IMC = peso / (altura * altura);

        console.log(IMC);

        document.getElementById("valor-final-IMC").innerHTML = `O seu IMC é: ${IMC}`;
    }


}
