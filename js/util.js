function readJson(filePath) {

  console.log(filePath);

/*
  var req = new XMLHttpRequest();
  req.open('GET', filePath, true);

  req.onload = function() {
    var jsonResponse = JSON.parse(req.responseText);
    console.log(jsonResponse);
    return jsonResponse;
  };

  req.send(null);
*/  
  
  $.getJSON(filePath, function(data) {
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