function palindrome(str) {
  
    //eliminate all the symbols that aren't aplhanumeric
    let alphNumStr = str.replace(/[^a-zA-Z0-9]+/g, '').toLowerCase().split("");
    
    //[...alphNumStr] - make a copy, as reverse() overwrites the original str
    let reversedStr = [...alphNumStr].reverse().join("");
    
    let isPalindrome = false;
  
    if (alphNumStr.join("") === reversedStr){
      isPalindrome = true;
    }
    else {
      isPalindrome = false;
    }
    
    return isPalindrome;
  }
  
  palindrome("race car"); //true
  palindrome("My age is 0, 0 si ega ym."); //true
  palindrome("1 eye for of 1 eye."); //false
  palindrome("five|\_/|four"); //false
  //examples above are taken from freeCodeCamp Test section for this project