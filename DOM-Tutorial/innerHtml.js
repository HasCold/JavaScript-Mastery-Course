// Inner Html
// Header k andr jitna bhi kuch likha hua ha wo hamara inner html ha

const headline = document.querySelector(".headline");
console.log(headline.innerHTML);  // Hame sari inner Html mil gaye gi

headline.innerHTML = "<h1>Inner Html Changed </h1>";
headline.innerHTML += "<button class=\"btn\"> Learn More </button>";
console.log(headline.innerHTML);

