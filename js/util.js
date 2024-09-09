function readJson(filePath) {

  console.log(filePath);

  let xhr = new XMLHttpRequest();
  xhr.open('GET', filePath);

  xhr.onload = () => {
    let responseJson = JSON.parse(xhr.response);
    return responseJson;
  };

  xhr.send();
  
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