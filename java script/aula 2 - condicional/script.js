var nome = "ESPURR";
var vida = 3;
var moeda = 100; 
var dano=1 ; 

function mostraPersonagem(){
   document.getElementById("ficha").innerHTML =` 
<img src="IMAGENS/ccf3bda2f7298f4602651223c3f5136f.gif" id="icone" alt="">  

  <h1> 🌟 ${nome} <h1/>
   <p> ❤️ ${vida} </p>
   <p> 🪙 ${moeda} </p>
   <p> 🔪 ${dano} </p>
`;

}
document.getElementById("vida").addEventListener("click", addVida)
function addVida(){

   if(vida>=20){
      alert("LIMITE DE VIDA MÁXIMA 20")
   }else{
       vida ++;
   }
  
   mostraPersonagem()
};

document.getElementById("moeda").addEventListener("click", addMoeda)
function addMoeda(){
   var quantoMoedas = confirm("deseja adicionar 1 ou  personalizado (cancelar)?");
      if(quantoMoedas){
     moeda ++;
      }else{
         moeda=Number(prompt("Qual a quantidade de  moedas?"))
      }
  
   mostraPersonagem()
};
document.getElementById("dano").addEventListener("click", addDano)
function addDano(){
   var arma= prompt ('Qual arma o ${nome} está segurando?')
   switch(arma){
      case "ESPADA":
         alert(" Você selecionou espada! 100 dano ")
         dano = 100;
         break;
         case "ARCO E FLECHA":
         alert ("Voce selecionou o arco e flecha! 50 dano")
         dano = 50;
         break;
         default:
            alert("Arma não encrontrada! Tente novamente!")
   }
   dano ++;
   mostraPersonagem()
};
mostraPersonagem()







