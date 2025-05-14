/* 
Complete the function that accepts a string parameter, and reverses each word in the string.
All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/
export {}

function reverseString (initStr: string) {
  // TODO
  const spiltedBySpace = initStr.split(' ')
  let reversed: string[] = []
  spiltedBySpace.forEach(spilited =>{
      reversed.push(spilited.split('')
      .reverse().join(''))
  })


  return reversed.join(' ')
}

const  stringQQ = 'yżąrohC adeproT ot sa jendzeiwG ytolF'
console.log(reverseString(stringQQ))
// Expected result = 'Chorąży Torpeda to as Gwiezdnej Floty'