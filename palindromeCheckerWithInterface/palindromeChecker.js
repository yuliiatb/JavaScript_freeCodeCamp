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
  
const buttonCheck = document.querySelector('#check-btn');
const enteredText = document.querySelector('#text-input');
const result = document.querySelector('#result');

buttonCheck.addEventListener('click', () =>{
  if (enteredText.value.trim() === ""){
      alert("Please input a value");
      return;
    }  
  if (palindrome(enteredText.value)){
    result.innerHTML = "<i>\"" + enteredText.value.toUpperCase() + "\"</i>" + " is a palindrome";
  }
  else {
    result.innerHTML = "<i>\"" + enteredText.value.toUpperCase() + "\"</i>" + " is not a palindrome";
  }
});