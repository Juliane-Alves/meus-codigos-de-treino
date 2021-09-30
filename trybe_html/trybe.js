/*function multiplicaPorDois(numeros) {
    let novoArray = []
    for (var multiplica =0; multiplica < numeros.length; multiplica ++) {
        
        novoArray.push(numeros[multiplica] * 2)
        
    }
    return novoArray
}
*/

var letra = "a"
var frase = "as vezes costumo almoçar arroz com salsicha e feijão"

function vezesLetraAparece(frase, letra) {
    var numeroVezesLetra = 0

    for(var index = 0; index < frase.length; index++) {
        if(letra === frase[index]) {
            numeroVezesLetra = numeroVezesLetra + 1
        }
    }

    return numeroVezesLetra
}

var vezesLetra = vezesLetraAparece(frase, letra)
console.log(vezesLetra)