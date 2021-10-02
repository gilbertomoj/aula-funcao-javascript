//1
// function recebe_string(str){
//     var frase = "Comi batata e cebola"
//     var cont = 0
//     var fraseSplit = frase.split(' ')
//     for(var i = 0; i < fraseSplit.length ; i++){
//         if(fraseSplit[i] == str){
//             cont += 1
//         }
//     }
//     console.log(`A palavra "${str}" foi encontrada ${cont} vez na frase "${frase}"`)
// }
// recebe_string("Comi")

//2 
// var arr = [1,2,3,4,5]
// function recebe_array(arr){
//     var reversedArray = arr.reverse()
//     console.log(reversedArray)
// }
// recebe_array(arr)

//3 
function receb_nums(n1,n2,n3, n4){
    var soma = n1 + n2 + n3 + n4
    return soma
}
console.log(receb_nums(1,2,4,5))