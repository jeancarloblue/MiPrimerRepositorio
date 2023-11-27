/* let contador=10
while (contador>=1){
alert(contador);
contador=contador-1 ;

} */

/*
let suma=0;
let numero=0;
 
numero= parseInt(prompt("ingrese un número(ingrese un número negativo para terminar)"));
 while (numero>=0){
suma= suma + numero;

//alert(suma);
numero=parseInt(prompt("ingrese un número(ingrese un número negativo para terminar)"));

}
alert ("la suma de los números es: " + suma);

*/
/* let numero=0

numero=parseInt(prompt("ingrese un número "));
while (numero>0){
	if (numero%2==0){
		//alert("El número " + numero + " Es par");
		console.log("El número " + numero + " Es par");
	}
	numero=numero-1;
}

*/
let multiplicar=1;
numero=parseInt(prompt("ingrese un número "));

//if ((numero>=0) && numero<=10){
if (numero>=0){

	while (multiplicar<=10){
		resultado= numero*multiplicar;
		console.log(numero + " * " + multiplicar + " = " + resultado);
		multiplicar++;

	}
}
//else{
	//alert("hay que introducir un numero del 1 al 10");
	//console.log("Hay que introducir un número correcto")
//}





