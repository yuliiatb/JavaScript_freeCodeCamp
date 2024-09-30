/*Return true if the string is a valid US phone number; otherwise return false

Explanation:
^ - match at the beginning of the string
1? - country code may be written or not
\s* - there might be or might not be a space 
\d{3} - three digits from 0 to 9 (equal to [0-9])
(\(\d{3}\)|\d{3}) - escaping the parentheses; there are two options: add both parentheses or none of them; 
    only one isn't allowed
[\s-]? - there might be one space and "-" or the number might not be followed by these symbols
$ - match at the end of the string
*/

function telephoneCheck(str) {
    const validNum = /^1?\s*(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;
    return validNum.test(str);
  }
  
  telephoneCheck("555-555-5555"); //true
  telephoneCheck("1 (555) 555-5555"); //true
  telephoneCheck("555-5555"); //false
  telephoneCheck("1 555)555-5555"); //false
  telephoneCheck("2 (757) 622-7382"); //false
  telephoneCheck("123**&!!asdf#"); //false
  //examples above are taken from freeCodeCamp Test section for this project