//I=string
//O=integer representing length of longest substring w/o repeating chars
//C=
//E=

//strategy=
//recursive function to create substrings with unique characters
  //use an object to keep track of char uniqueness inside this function
  //the value of object at current char > 1
  //push substring into results array of 0-current char
  //call recursive function on the input minus its first char

//call recursive function on initial input
//sort results array by length and return last value

function lengthOfLongestSubstring(s) {
//results array:
let results = [];

if(s.length === 0){
  return 0;
}

//helper function:
lengthFinder = (string) => {
  //storage for unique chars only:
  let obj = {};
  //iterate through input check for uniques:
  for(let x = 0; x < string.length; x++){
    if(obj[string[x]] === undefined){
      obj[string[x]] = 1;
      //console.log(string[x]);
      if (x === string.length-1) {
        results.push(x+1);
      }
    }else{
      //console.log(obj,x);
      results.push(x);
      lengthFinder(string.substring(1));
      return;
    }
  }

}

lengthFinder(s);

//sort results:
results.sort((a,b) => {
  return a-b;
});

//return last item in sorted array
return results[results.length-1];

};
