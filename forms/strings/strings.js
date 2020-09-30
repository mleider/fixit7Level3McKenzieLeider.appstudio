let quoteString = "Failure is simply the opportunity to begin again this time more intelligently.";
 quoteString = quoteString.toUpperCase()
alert(`Upper case string is: ${quoteString}`)

let authorString = "- Henry Ford"
alert(authorString)

let completeString = quoteString + authorString
alert(completeString)


let found = completeString.includes(authorString)
switch (found) {
case (true):
  alert("Henry Ford is in the quote string")
  break
case(false):
  alert("Henry Ford was not in the quote string!")
  break
  }


let secondQuote = "Talent is cheaper than table salt. What separates the talented individual from the successful one is a lot of hard work. - Stephen King"
secondQuote = secondQuote.toLowerCase()
console.log(`The Lower Case string is: ${secondQuote}`)

let user = prompt("Enter a number:")
let y = 10
let x = user
alert("The number X + 10 is " + (Number(x) + Number(y)))