function addTodoItem (todoItem) { //Check if todoItem is valid and if yes, add it to todoItems array. Function should return the result of validity check (text field is not empty, all fields are present and id is unique). 
	var isValid = true;
	if (todoItem.text === "string" && todoItem.completed === "boolean" && todoItem.id === "number") {
		if (_.isEmpty(todoItem.text) === false) {
			for (var i = 0; i < TodoItem.length; i++) {
				if (TodoItem.id === TodoItem.id[i]) {
					isValid = false;
					break;
				}
				
			}
		
	
		}		
		
	}
	return isValid;
}

function viewTodoList (itemsType) { //Function takes itemsType argument (‘completed’, ‘not_completed’, ‘all’) and returns all items of this type. 
	if (itemsType === "completed") {
		var ItemCompleted = todoItem.filter(function(itemsType) {
			return itemsType.completed === true;
			});
			return ItemCompleted;
	}
	if (itemsType === "not_completed") {
		var ItemNotCompleted = todoItem.filter(function(itemsType) {
			return itemsType.not_completed === true;
			});
			return ItemNotCompleted;
	}
	if (itemsType === "all") {
			return todoItem;
	}
}

function editTodoItem (todoItem) { //If newText is not empty, function changes text of todoItem by todoItemId on the new text. It should return flag, whether edit was successful. 
	if(_,isEmpty(todoItem.newText) === false) {
		todoItem.text = todoItem.newText;
		return edit_success;
	}
	else {
		return edit_fail;
	}
}

function deleteTodoItem (todoItem) { //Delete todoItem by todoItemId, return flag, whether delete was successful. 
	for (var k = 0; i < TodoItem.length; i++) {
		if (TodoItem.id === TodoItem.id[i]) {
			TodoItem.splice (i,i);
			return del_success;
		}
		else {
			return del_failed;
		}

}
}

function completeTodoItem (todoItem) { //Change completed field of todoItem (get it by todoItemId) on true.
	if (todoItem.completed === false) {
		todoItem.completed = true;
		return comp_success;
	}
	else {
		return comp_fail;
	}
}


	