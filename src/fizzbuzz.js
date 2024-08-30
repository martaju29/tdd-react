/**
 * Write an algorithm that, given a number:
 * - Shows "fizz" if it is a multiple of 3
 * - Shows "buzz" if it is a multiple of 5
 * - Shows "fizzbuzz" if it is a multiple of both 3 and 5
 * - Shows the number if it is not a multiple of 3 or 5
 */

export const fizzbuzz = (number) => {
  if(typeof number !== 'number') throw new Error('number must be numeric')
  if(Number.isNaN(number)) throw new Error('number must be numeric')

  const multiplies = {
    3: 'fizz',
    5: 'buzz'
  }
  
  let output = ''

  Object
    .entries(multiplies)
    .forEach(([multiplier, word]) => {
      if(number % multiplier === 0) output += word
    })

  
  return output === '' ? number : output
}