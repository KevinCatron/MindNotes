//MODULE
var mindNotes = angular.module('mindNotes', ['ui.bootstrap']);

//CONTROLLERS
mindNotes.controller("titleController", ['$scope', function($scope){

  $scope.greeting = "MindNotes";

}]);

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


}]);
