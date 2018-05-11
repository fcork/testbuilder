/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
 
//describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 

 //it('Throws an error so it fails', function() {
    //throw new Error('Delete me!');
  //});

  //it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    //var even = function(num){
      //return num/2 === 0;
    //}
    //return even(10) === true;
  //});

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  //it('Throws an error when expected behavior does not match actual behavior', function() {
    //var even = function(num){
      //return num/2 === 0;
    //}

    //if(even(10) !== true) {
      //throw new Error('10 should be even!');
    //}
  //});
//});
describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
    //throw new Error('Delete me!');
 
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
 
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }
 
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var assert = chai.assert;
 

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var expect = chai.expect;
 
  it('has a prefix of 51 and a length of 16', function() {
    expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 52 and a length of 16', function() {
    expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 53 and a length of 16', function() {
    expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
  });
 

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 
  
  
  it('has a prefix of 54 and a length of 16', function() {
    expect(detectNetwork('5412345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    expect(detectNetwork('5512345678901234')).to.equal('MasterCard');
  })
 
});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  var expect = chai.expect;

  it('has a prefix of 6011 and a length of 16', function() {
    expect(detectNetwork('6011768574635275')).to.equal('Discover');
  });

  it('has a prefix of 6011 and a length of 19', function(){
    expect(detectNetwork('6011347568945674357')).to.equal('Discover');
  });

  for (var prefix = 644; prefix <= 649; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function(){
        expect(detectNetwork(prefix + '4534562678654')).to.equal('Discover');
      });
      it('has a prefix of ' + prefix + ' and a length of 19', function(){
        expect(detectNetwork(prefix + '4532478965439648')).to.equal('Discover');
      });
    })(prefix)
  }

  it('has a prefix of 65 and a length of 16', function(){
    expect(detectNetwork('6548374589348573')).to.equal('Discover');
  })
  it('has a prefix of 65 and a length of 19', function(){
    expect(detectNetwork('6548374589348573546')).to.equal('Discover');
  })

});

describe('Maestro', function() {
  // Write full test coverage for the Maestro card
  var expect = chai.expect;

  var numExtender = function(length){
    var numString = '';
    //iterate starting at 4 since there are already 4 digits listed
    for (var i = 4; i < length; i++){
      var digit = Math.floor(Math.random()*10).toString();
      numString += digit;
    }
    return numString;
  }
  
  for (var length = 12; length <= 19; length++) {
    (function(length) {
      it('has a prefix of 5018 and a length of ' + length, function(){
        expect(detectNetwork('5018' + numExtender(length))).to.equal('Maestro');
      });
      it('has a prefix of 5020 and a length of ' + length, function(){
        expect(detectNetwork('5020' + numExtender(length))).to.equal('Maestro');
      });
      it('has a prefix of 5038 and a length of ' + length, function(){
        expect(detectNetwork('5038' + numExtender(length))).to.equal('Maestro');
      });      
      it('has a prefix of 6304 and a length of ' + length, function(){
        expect(detectNetwork('6304' + numExtender(length))).to.equal('Maestro');
      });      
    })(length)
  }

});

describe('China UnionPay', function() {
  var expect = chai.expect;

  var numExtender = function(length){
    var numString = '';
    //iterate starting at 4 since there are already 4 digits listed
    for (var i = 0; i < length; i++){
      var digit = Math.floor(Math.random()*10).toString();
      numString += digit;
    }
    return numString;
  }

  for (var prefix = 622126; prefix <= 622925; prefix++) {
    //subtract 6 from length since prefix already has 6 numbers
    for (var length = 10; length <=13; length++){
      (function(prefix, length){
        it('has a prefix of ' + prefix + ' and a length of ' + (parseInt(length) + 6), function(){
          expect(detectNetwork(prefix + numExtender(length))).to.equal('China UnionPay')
        })
      })(prefix, length)
    }
  }

  for (var prefix = 624; prefix <= 626; prefix++) {
    //subtract 3 from length since prefix already has 3 numbers
    for (var length = 13; length <=16; length++){
      (function(prefix, length){
        it('has a prefix of ' + prefix + ' and a length of ' + (parseInt(length) + 3), function(){
          expect(detectNetwork(prefix + numExtender(length))).to.equal('China UnionPay')
        })
      })(prefix, length)
    }
  }  

  for (var prefix = 6282; prefix <= 6288; prefix++) {
    //subtract 4 from length since prefix already has 4 numbers
    for (var length = 12; length <=15; length++){
      (function(prefix, length){
        it('has a prefix of ' + prefix + ' and a length of ' + (parseInt(length) + 4), function(){
          expect(detectNetwork(prefix + numExtender(length))).to.equal('China UnionPay')
        })
      })(prefix, length)
    }
  }  
});

describe('Switch', function() {
  var expect = chai.expect;
  var prefixArray1 = [4903, 4905, 4911, 4936, 6333, 6759];
  var prefixArray2 = [564182, 633110]
  var lengthArray = [16, 18, 19];

  var numExtender = function(length){
    var numString = '';
    for (var i = 0; i < length; i++){
      var digit = Math.floor(Math.random()*10).toString();
      numString += digit;
    }
    return numString;
  }  

  for (var i = 0; i < prefixArray1.length; i++){
    for (var j = 0; j < lengthArray.length; j++){
      (function(i, j){
        it('has a prefix of ' + prefixArray1[i] + ' and a length of ' + (lengthArray[j]), function(){
          expect(detectNetwork(prefixArray1[i] + numExtender(lengthArray[j]-4))).to.equal('Switch')
        })        
      })(i, j)
    }
  }

   for (var i = 0; i < prefixArray2.length; i++){
    for (var j = 0; j < lengthArray.length; j++){
      (function(i, j){
        it('has a prefix of ' + prefixArray2[i] + ' and a length of ' + (lengthArray[j]), function(){
          expect(detectNetwork(prefixArray2[i] + numExtender(lengthArray[j]-6))).to.equal('Switch')
        })        
      })(i, j)
    }
  } 

});
