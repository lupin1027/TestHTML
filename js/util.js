function readJson(filePath) {

  console.log(filePath);
  
  fetch(filePath)
	.then(function(response){
		return response.json();
	})
	.then(function(data){
		// JSON全体
		console.log(data);	
	});
  
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