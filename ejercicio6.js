/* Ejercicio 6
Crea una función llamada swap que reciba un array y dos parametros que sean indices del array.
La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Es decir, intercambiar el lugar de un elemento por otro dentro del array.
Retorna el array resultante. */
const fantasticFour = [
  'La antorcha humana',
  'Mr. Fantástico',
  'La mujer invisible',
  'La cosa'
]
console.log(fantasticFour)
function swap(array, index1, index2) {
  if (
    index1 < 0 ||
    index2 < 0 ||
    index1 >= array.length ||
    index2 >= array.length
  ) {
    throw new Error('Índices fuera de rango')
  }
  const temp = array[index1]
  array[index1] = array[index2]
  array[index2] = temp
  return array
}
swap(fantasticFour, 0, 3)
console.log(fantasticFour)
