console.log("A5.7_CW")
console.log("-----------------------")

console.log("Exercise 1")
console.log("-----------------------")

let numbersArray = [5, 12, 7, 25, 18,3]
console.log("1.1")
function printOriginalArray() {
console.log("original Array: ", numbersArray)
  
}
 printOriginalArray()

console.log("-----------------------")
console.log("1.2")

function addTenToArray() {
  let newArray = []
  for(let i = 0; i < numbersArray.length; i++){
    newArray.push(numbersArray[i] + 10)
  }
  return newArray
}
console.log(addTenToArray())

console.log("-----------------------")
console.log("1.3")

function convertOddToEven(numbers){
  let convertedArray = []
  for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 !== 0 ){
      convertedArray.push(numbers[i] + 1)
      
    }
    else {
      convertedArray.push(numbers[i])
    }
  }
  return convertedArray
}

console.log(convertOddToEven(numbersArray))

console.log("-----------------------")
console.log("1.4")

function findLargestNumbers(numbers) {
  let largestNumbers = numbers[0]
  for(let i = 0; i < numbers.length; i++){
    if(numbers[i] > largestNumbers){
      largestNumbers = numbers[i]
    }
  }
  return largestNumbers
}
console.log("Largest Number: ", findLargestNumbers(numbersArray))