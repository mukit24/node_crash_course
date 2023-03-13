const fs = require('fs');
const path = require('path');

//create folder
// fs.mkdir(path.join(__dirname,'/test_folder'), {}, err => {
//     if (err) throw err;
//     console.log('Folder is created');
// })

//create file
// fs.writeFile(path.join(__dirname, '/test_folder', 'hello.txt'), 'Hello World!!!', {}, err => {
//     if (err) throw err;
//     console.log('File is written');

//     // append
//     fs.appendFile(path.join(__dirname, '/test_folder', 'hello.txt'), '\nI love node.js!!', {}, err => {
//         if (err) throw err;
//         console.log('new line appended...');
//     })
// })

//read file
fs.readFile(path.join(__dirname, '/test_folder', 'hello.txt'), 'utf-8', (err, data)=>{
    if (err) throw err;
    console.log(data);
})