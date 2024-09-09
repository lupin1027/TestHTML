function readJson(filePath) {

  console.log(filePath);
  
  $.ajax({
  	// ajax読み込みの設定
  	type: "GET",
  	url: "data.json", // jsonまでのファイルパス
 	dataType: "json", // ファイル形式
 	async: false, // 非同期通信フラグ
  	}).then(
  	function (json) {
		return json;
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