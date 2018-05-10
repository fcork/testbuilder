// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  var prefix = cardNumber.split('').slice(0,2).join('');
  var threeDigitPrefix = cardNumber.split('').slice(0,3).join('');
  var fourDigitPrefix = cardNumber.split('').slice(0,4).join('');
  console.log(prefix[0])

  if ((prefix === '38' || prefix === '39') && cardNumber.length === 14){
  	return 'Diner\'s Club'
  }
  if ((prefix === '34' || prefix === '37') && cardNumber.length === 15){
  	return "American Express";
  }
  if ((prefix[0] === '4') && (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19)){
  	return 'Visa';
  }
  if ((Number(prefix) >= 51 && Number(prefix) <=55) && cardNumber.length === 16){
  	return 'MasterCard';
  }
  if ((fourDigitPrefix === '6011' || (Number(threeDigitPrefix) >= 644 && Number(threeDigitPrefix) <= 649) || prefix === '65') && (cardNumber.length === 16 || cardNumber.length === 19)){
  	return 'Discover';
  }
  if ((fourDigitPrefix === '5018' || fourDigitPrefix === '5020' || fourDigitPrefix === '5038' || fourDigitPrefix === '6304') && (cardNumber.length >=12 && cardNumber.length <= 19)){
  	return 'Maestro';
  }
  // Once you've read this, go ahead and try to implement this function, then return to the console.
};


console.log(detectNetwork('5212345678901234'));