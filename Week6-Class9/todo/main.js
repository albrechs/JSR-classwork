'use strict';

var MyApp = {};

MyApp.compileItem = function(item){
	var source = $('#todo-template');
	var template = Handlebars.compile(source);
	return template(item);
} 

MyApp.addToList = function(list, item){
	var itemObject = {toDo: item.val};
	var compiledItem = MyApp.compileItem(itemObject);
	list.append(compiledItem);
}

MyApp.removeFromList = function(){

}

$(document).ready(function(){
	var $newTaskForm = $('#new_task');
	var $taskList = $('#task_list')
	$newTaskForm.submit(function(event){
		event.preventDefault();
		var $newTaskInput = $('#new_task_input');
		MyApp.addToList($taskList, $newTaskInput);
	});
});