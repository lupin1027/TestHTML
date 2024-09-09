function readJson(filePath) {

  console.log(filePath);

  var data;

  fetch(filePath)
	.then(response => response.text())
	.then(data => {
	 console.log(data);
	})
	.catch(error => {
	 console.error('Error:', error);
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