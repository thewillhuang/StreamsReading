// This program should take input from standard in and output it to both standard out
//and a file specified at run time.
// ex:
// node tee outputfile.txt
// would both echo the user supplied input and copy it into the outputfile.txt file
// Submit a link to a PR on your own Github repo

var fs = require('fs');
var writeStream = fs.createWriteStream('file.txt');

process.stdin
  .pipe(writeStream);
process.stdin
  .pipe(process.stdout);

console.log('program started');
