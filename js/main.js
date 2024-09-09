var data;

window.addEventListener('DOMContentLoaded', function() {

    data = readJson('./data/data.json');

    if(data == null || data == undefined){
    	console.log('data読込失敗');
    }
    else{
	console.log('data読込成功');
    }

    console.log(data);
});

function myFunction() {
  // Declare variables
  var input, filter, ul, li, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    txtValue = li[i].textContent || li[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}