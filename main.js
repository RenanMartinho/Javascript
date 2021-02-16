//var nome = "Renan Martinho";
//var idade = 24;
//var idade2 = 25;
//alert ("meu pri");
//var frase = "japao é o melhor time do mundo ";

//console.log(nome);
//console.log(idade);
//console.log(frase.replace("japao", "corinthians"));


//alert(frase.replace)

//console.log(frase.toUpperCase());  //informa no console

//console.log(frase.toLowerCase());

//var lista = ["maça", "pera", "laranja"];
//lista.push("uva");
//lista.pop(); //retira o ultimo elemento
//console.log(lista);
//alert(lista[1]);

//console.log(lista.length); //exige quantidade de elementos
///console.log(lista.reverse()); //exige os elementos ao contrario

//console.log(lista.toString()); //CONVERTE EM STRING


//console.log(lista.join(" - ")); // converter em string e separa com o caracter escolhido


//var fruta = {nome: "maça", cor: "vermelha"} //dicionario

//console.log(fruta. nome);
//alert(fruta.cor);


//var frutas = [{nome: "maça", cor: "vermelha"}, {nome: "uva", cor: "roxa"}]//lista de dicionario

//console.log(frutas); 
//alert(frutas[1].nome);


//var idade = prompt ("Qual sua idade");


//var idade = 18;

//if (idade >= 18){

    //alert ("maior de idade");
//} else {

  //  alert("menor de idade");
//}

/* var cont = 0;
 
while ( cont <=5) {

    console.log(cont);
    alert(cont);
    cont = cont +1;
    // cont++;
}; 
*/

/*
var count ;

for (count=0; count <= 5; count ++ ){

    alert(count);
};
*/



//var d = new Date();

//alert (d.getMonth()+1);
//alert(d.getHours());

//function soma(N1,N2){
  //  return N1+N2;

//}

//alert(soma(5,10));

//function setReplace(frase,nome, novo_nome){
  // return frase.replace(nome,novo_nome)

//}

//alert(setReplace("vai japao", "japao", "brasil"));

/*
function validaIdade(idade){
   var validar;
   if (idade >= 18){
        validar = true
   }else {
      validar = false
   }
    return validar;

}
var idade = prompt ("Qual sua idade");
    console.log(validaIdade(idade));
*/

function botao (){
    //alert("obrigado por clicar");
    document.getElementById("agradecimento").innerHTML = "<b>obrigadoo</b>";
    //console.log(document.getElementById("agradecimento"));
}

function redicionar () {

//window.open("https://github.com/RenanMartinho/Javascript"); // em pagina diferentes
window.location.href = "https://github.com/RenanMartinho/Javascript"; //abre na mesma pagina
}

function trocar ( ){
    document.getElementById("mousemove").innerHTML = "<b>sdsdsds</b>";
   //alert ("trocar texto"); 
}

function voltar( ){

    document.getElementById("mousemove").innerHTML = "passe o mouse aqui"

}

function load ( ) {
    alert("pagina caerreacfdo");
}


function funcaoChance (elemento)
{
    console.log(elemento.value)
}