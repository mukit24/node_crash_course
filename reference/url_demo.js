const url = require('url');

const myUrl = new URL('https://www.w3schools.com/nodejs/nodejs_filesystem.asp?id=100&status=active');

console.log(myUrl.hostname);
console.log(myUrl.href);
console.log(myUrl.pathname);
console.log(myUrl.searchParams);