str1 = "Always remember that you are absolutely unique.";
str2 = 'Just like everyone else.';

str3 = str1 + " " + str2;
console.log(str3)

// b. Did you remember to add a space between them?
// If so, how many characters is the final string?
console.log(str3.length)

// c. Did you know that you can also join strings and numbers together?
// Replace str2 with a new sentence that includes the total population count
// of the city of Luzern that you just computed. For example:
// "Just like other X persons in Luzern." (X to be replaced with the count)
// Then, join it with str1 and update finalStr.
// Important. String must end with a dot (needed for exercise below).


// d. Alternatively, you can specify strings using the backtick sign `
// which allows for in-string variable substitution.


// e. If you made it until now, you may prefer a more positive message
// in the finalStr variable. Extract a substring which contains only
// the first part.
// Hint: Use substring and the length property.
console.log(str3.substring(0, str1.length))

// f. Now shout it loud and make the it upper case.
// Hint: Use toUpperCase.
console.log(str3.substring(0, str1.length).toUpperCase())

// g. Let's be honest. An upper case sentence must end with an exclamation mark.
// Replace the dot at the end of the sentence with an exclamation mark.
console.log(str3.substring(0, str1.length - 1).toUpperCase() + "!")
