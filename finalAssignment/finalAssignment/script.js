// delcare variables
var addText = document.getElementById('addText');
var addBtn = document.getElementById('');

// Add a new list item when clicking the "Add" button and declare these variables
function addItem() {
    var li = document.createElement("li");
    var addText  = document.getElementById("addText").value;
    var text = document.createTextNode(addText);
    li.appendChild(text);
    // if there is no text entered show alert to enter some text else add text entered to list element
    if (addText  === '') {
      alert("Please enter some text!");
    } else {
      document.getElementById("myList").appendChild(li);
    }
    document.getElementById("addText").value = "";
    
  }
