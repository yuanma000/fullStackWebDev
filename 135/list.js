var todos = [];

var input = prompt("Waht would you like to do? ");


while(input !=="quit"){
	if(input === "list"){
		listTodos();
	}else if(input === "new"){
		addTodos();
	}else if(input === "delete"){
		deleteTodos();
	}
	//ask again for new input
	input = prompt("Waht would you like to do? ");
}

console.log("OK, your quit the app");

function listTodos(){
	console.log("**********");
	todos.forEach(function(todo, i){
		console.log(i+": "+todo);
	});
	console.log("**********");

	console.log(todos);
}

function addTodos(){
	var newTodo = prompt("Enter new todo");
	todos.push(newTodo);
	console.log("Added Todo");
}

function deleteTodos(){
	var index = prompt("Enter index of todo to delete");
	todos.splice(index,1);
	console.log("Deleted Todo");
}