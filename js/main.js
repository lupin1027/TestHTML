
const dataPath = './data/data.json';
var data;

window.addEventListener('DOMContentLoaded', function() {

    fetch(dataPath)
    .then(response => response.text())
    .then(json => {
     console.log(json);
     data = JSON.parse(json);

     if(data == null)
     {
      console.log('data read failed.');
     }
     else
     {
      console.log('data read success.');
     }

     console.log(data);

     count = this.document.getElementById('itemcount');
     count.textContent = 'アイテム数: ' + data.length;
    })
    .catch(error => {
     console.error('Error:', error);
    });
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