/* Independent Practice

Making a favorites list: DOM manipulation


- When the user clicks the submit button, take the value they've typed 
  into the input box and add it to the list (remember: appendChild)

- Also, when a new item is added to the list, clear the input box.  

*/

function addToList(list, newThing) {
	if (newThing != '') {
		var li = document.createElement('li');
		li.setAttribute('class', 'fav-thing')
		li.innerHTML = newThing
		list.appendChild(li)
	} else {
		alert('You must type in a value!')
	}
}

window.onload = function() {
  // when someone clicks the button...
  var button = document.getElementById('new-thing-button');
  var thingList = document.getElementById('fav-list');
  var newThingInput = document.getElementById('new-thing');

  button.onclick = function(event) {
    event.preventDefault();
    var newThing = newThingInput.value;
    addToList(thingList, newThing); 
    newThingInput.value = "";
  };
  // https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
};

/*

Bonus:

When they click submit without typing anything, alert the user 
"you must type in a value!"
  (Hint: the `value` property of the input box, before anyone types in it,
  is the empty string.)

*/


