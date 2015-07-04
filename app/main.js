var app = angular.module('myApp',[]);

// app.run(function ($http) { 
// 	$http.get('todo.json').success(function (data) {
// 		model.items = data;
// 	})
// })
// seems to act like a factory.  Does not need to be injected into a controller
app.filter('checkedItems', function () {
	return function (items, showComplete) {
		var resultArr= [];
		angular.forEach(items,function (item) {
			if(item.done == false || showComplete ==true) {
				resultArr.push(item);
			}
		});
		return resultArr;
	}
})

var model = {
		user: 'Adam',
		items: 
		[
			{ action: 'buy flowers',done:false},
			{ action: 'get shows',done:false},
			{ action: 'collect ticks',done:false},
			{ action: 'call joe',done:false}
		]
	};

app.controller('ToDoCtrl',function($scope) {
	

	$scope.toDo = model;

	$scope.incompleteCount = function(item) {
		var count = 0;
		angular.forEach($scope.toDo.items, function (item) {
			// console.log(item);
			if (!item.done) {count++}
		});
		return count;
	}

	$scope.warningLevel = function () {
		return $scope.incompleteCount() <3 ? "label-success" : "label-warning";
	}

	$scope.addNewItem = function (actionText) {
		console.log(actionText);
		$scope.toDo.items.push({action: actionText , done:false})
	}


});