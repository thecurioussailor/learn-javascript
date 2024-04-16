const fs = require('fs');
// fs i.e. file system is in nodejs library
fs.readFile("a.txt", "utf-8", function(err, data) {
    console.log(data);
})

