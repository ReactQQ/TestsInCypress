/* 
Complete the function that accepts a string parameter, and reverses each word in the string.
All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/

function reverseString(initStr: string) {
  // TODO
  // const spiltedBySpace = initStr.split(' ')
  let reversed: string[] = []
  initStr.split(' ')
    .forEach(spilited => {
      reversed.push(spilited
        .split('')
        .reverse()
        .join('')
      )
    })


  return reversed.join(' ')
}


console.log(reverseString('yżąrohC adeproT ot sa jendzeiwG ytolF'))
// Expected result = 'Chorąży Torpeda to as Gwiezdnej Floty'