let el = document.querySelector('.nav');

el.className += 'is-open';

const children = el.querySelectorAll('li');
const textContents = children.map(child => child.textContent);

console.log(textContents); // should log an array of strings