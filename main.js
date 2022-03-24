
// ### Knowledge round-up
//  - Give an example for each of the following methods in Javascript
// 1.map()
var array1 = [4, 2, 9, 15, 17, 34]

var result1 = array1.map(function (value, index, array) {
  return value * 2
})

console.log(result1)

// 2. filter()
var array2 = [4, 17, 65, 2, 33, 45]

var result2 = array2.filter(function (value, index, array) {
  return value > 20
})

console.log(result2)

// 3. reduce()
var array3 = [23, 2, 6, 10, 14]

var result3 = array3.reduce(function (accumulator, value, index, array) {
  return accumulator + value
}, 10)

console.log(result3)

// 4. some()
var array4 = [11, 22, 8, 9, 33]

var result4 = array4.some(function (value, index, array) {
  return value < 10
})

console.log(result4)

// 5. find()
var array5 = [22, 7, 5, 9, 11]

var result5 = array5.find(function (value, index, array) {
  return value < 10
})

console.log(result5)


// - Give an example for add a new element to an array[] (at the end)
var languages = ["Vietnamese", "Japanese", "English"]

languages.push("Spanish", "French")

console.log(languages)

//  - Give an example for add a new element to an array[] (at the beginning)
var animals = ["monkey", "buffalo", "frog"]

animals.unshift("chicken", "pig")

console.log(animals)

// - Give an example for removing an element in array[]
var clothes = ["trousers", "shirt", "skirt", "coat", "socks"]

clothes.splice(2, 2)

console.log(clothes)


// Playground
// 1. Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.
function sum(a, b) {
  if (a !== b) {
    console.log(a + b)
  } else {
    console.log((a + b) * 3)
  }
}

sum(5, 10)
sum(5, 5)

// 2. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19.
function difference(a) {
  if (a < 19) {
    console.log(19 - a)
  } else if (a === 19) {
    console.log(0)
  } else {
    console.log((a - 19) * 3)
  }
}

difference(12)
difference(19)
difference(22)

// 3. A masked number is a string that consists of digits and one asterisk (*) that should be replaced by exactly one digit. Given a masked number find all the possible options to replace the asterisk with a digit to produce an integer divisible by 3.
function divisible3(string) {
  array = string.split('')

  var answer = []

  var realElements = array.filter(num => {
    return num !== "*"
  })

  var numbers = realElements.map(num => {
    return Number.parseInt(num)
  })

  var total = numbers.reduce((acc, num) => {
    return acc += num
  }, 0)

  array.map(number => {
    if (number == "*") {
      for (var i = 0; i <= 9; i++) {
        if ((total + i) % 3 == 0) {
          var final = string.replace("*", i)
          answer.push(final)
        }
      }
    }
  })

  console.log(answer)
}

divisible3("1*9")
divisible3("1234567890*")

// 4. A masked number is a string that consists of digits and one asterisk(*) that should be replaced by exactly one digit.Given a masked number find all the possible options to replace the asterisk with a digit to produce an integer divisible by 6.

function divisible4(string) {
  array = string.split('')

  var answer = []

  var realElements = array.filter(num => {
    return num !== "*"
  })

  var numbers = realElements.map(num => {
    return Number.parseInt(num)
  })

  var total = numbers.reduce((acc, num) => {
    return acc += num
  }, 0)

  var lastNumber = string[string.length - 1]

  array.map(number => {
    if (number == "*") {
      if (lastNumber == "*") {
        var evenNumbers = [0, 2, 4, 6, 8]

        evenNumbers.map(evenNumber => {
          var sum = total + evenNumber

          if (sum % 3 == 0) {
            var final = string.replace("*", evenNumber)
            answer.push(final)
          }
        })
      } else {
        for (var i = 0; i <= 9; i++) {
          if (((total + i) % 3 == 0) && (lastNumber % 2 == 0)) {
            var final = string.replace("*", i)
            answer.push(final)
          } else {
            return []
          }
        }
      }
    }
  })

  console.log(answer)
}

divisible4("1*9")
divisible4("1234567890*")
