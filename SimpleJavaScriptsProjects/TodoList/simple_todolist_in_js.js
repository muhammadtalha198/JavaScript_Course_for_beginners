// create a list to hold our to-do items
var toDoList = [];

// function to add an item to our to-do list
function addToDo(toDo) {
  toDoList.push(toDo);
  console.log(toDo + " added to the list!");
}

// function to remove an item from our to-do list
function removeToDo(toDo) {
  var index = toDoList.indexOf(toDo);
  if (index > -1) {
    toDoList.splice(index, 1);
    console.log(toDo + " removed from the list!");
  } else {
    console.log(toDo + " not found in the list.");
  }
}

// function to display our to-do list
function displayToDoList() {
  console.log("To-do list:");
  toDoList.forEach(function(toDo) {
    console.log("- " + toDo);
  });
}

// test our functions
addToDo("Take out the trash");
addToDo("Do the dishes");
addToDo("Vacuum the house");
displayToDoList();
removeToDo("Do the dishes");
displayToDoList();
