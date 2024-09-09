function readJson(filePath) {

  console.log(filePath);
  
  $.get(filePath, function(data) {
    var data = $.parseJson(data);
    return data;
  });
}

function isExistFile(file) {
   try {
     const fs = require('fs');
     fs.statSync(file);
     console.log('true');
     return true;
   } catch (err) {
     if (err.code === 'ENOENT') {
       console.log('false');
       return false;
     }
   }
}