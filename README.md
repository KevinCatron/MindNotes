# MindNotes
An easy to use application to write quick notes!
<br>

#Into The Code
I recently started to learn AngularJS so this was my first little attempt at using the newely learned framework.

The code for making a todo list is pretty simple and straight forward.

```
mindNotes.controller("todoController", ['$scope', function($scope){

  $scope.todos = [
    {"title": "Type in some notes above to add to the list!", 'done': false}
  ];

  $scope.addTodo = function(){

    $scope.todos.push({'title': $scope.newTodo, 'done': false})
    $scope.newTodo = '';
  };

  $scope.clearCompleted = function(){

    $scope.todos =$scope.todos.filter(function(item){
      return !item.done;
    })
  };

```
As you can see we simply create an array with an object inside. We then click a submit button which pushes a newely created object into the array(this creates the new note.) We set the note to a "done" status of false. 

To delete an item we target the note by creating a filter function that sets the "done" status to true.

