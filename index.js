const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

function titleCased() {
  const exceptions = ['NaN', 'OO', 'JSONP']; // Define words to exclude from normal capitalization
  
  return tutorials.map((title) => {
    return title
      .split(' ') // Split title into words
      .map((word) => {
        // If word is in exceptions list, return as is
        if (exceptions.includes(word)) {
          return word;
        }
        // Capitalize the first letter and make the rest lowercase
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(' '); // Join the words back into a string
  });
}

console.log(titleCased());
