function readJson(filePath) {

  console.log(filePath);

  var req = new XMLHttpRequest();
  var data;
  req.open('GET', filePath, true);

  req.onload = function() {
    data = JSON.parse(req.responseText);   
  };

  req.send(null);
 
  console.log(data);
  return data;

  /*
  $.getJSON(filePath, function(data) {
    return data;
  });
  */

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