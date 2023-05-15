//test en jest
const palindromo=(string)=>{ // metodo para revertir palabra
    return string.split('').reverse().join('')
}

const average=array=>{ //metodo para medida de la palabra
    let sum=0
    array.forEach(num =>  {sum += num})   //forEach recorre la variable num y suma numero por numero
    return sum/array.length
}

module.exports={
    palindromo, 
    average,
}