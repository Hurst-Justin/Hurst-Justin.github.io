function resetPage() {
	location.reload();
}

function appendListAfter() {
    var newItem = document.createElement("li");
    var textnode = document.createTextNode("Oranges");
    newItem.appendChild(textnode);
    document.getElementById("element1").appendChild(newItem);
}

function removeLast() {
    var list=document.getElementById("element1");
    var listItems = list.getElementsByTagName("li");
    var last=listItems[listItems.length-1];
    list.removeChild(last);
  }

function appendListBefore() {
    var newItem = document.createElement("li");
    var textnode = document.createTextNode("Oranges");
    newItem.appendChild(textnode);

    var list = document.getElementById("element2");
    list.insertBefore(newItem, list.childNodes[0]);
}

function removeFirst() {
    var list = document.getElementById("element2");
    list.removeChild(list.childNodes[0]);
  }

  