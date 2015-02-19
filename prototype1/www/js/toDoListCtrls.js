/* To-Do-List control */
app.controller('ToDoCtrl', ['$scope', '$ionicActionSheet', '$ionicPopup', '$timeout', '$localstorage', '$cordovaDatePicker', 'toDoService', function($scope, $ionicActionSheet, $ionicPopup, $timeout, $localstorage, $cordovaDatePicker, toDoService) {
  var count = toDoService.getNumberOf();
  
  /* Load from local storage */
  var load = $localstorage.getObject( 'toDoList' );
  if (Object.keys(load).length !== 0) {
    toDoService.loadList( load );
  }
  
  //Add to-do item
  $scope.addToDo = function() {
    $scope.list = {}
  
    var myPopup = $ionicPopup.show({
      template: '<input type="text" ng-model="list.item">', 
      title: 'Enter your to-do item',
      subTitle: 'Remember to be organized and keep track what you need to do',
      scope: $scope,
      buttons: [
      { text: 'Cancel' },
      {
        text: '<b>Next</b>',
        type: 'button-positive',
		onTap: function(e) {
		  if (!$scope.list.item) {
			e.preventDefault();
		    var alertPopup = $ionicPopup.alert({
			  title: 'Input is empty',
			  template: 'Please input an item'
		    });
			alertPopup.then(function(res) {
			  alertPopup.close();
			});
		  } else {
			var item = $scope.list.item;
			$scope.list.item = '';
		    $scope.addToDoDate(item);
		  }
		}
      }
    ]
    });
	
	myPopup.then(function(res) {
	  myPopup.close();
    });

  };
  
  //Add to-do item due date
  $scope.addToDoDate = function( item ) {
    var options = {
		date: new Date(),
		mode: 'date',
		minDate: new Date(),
		allowOldDates: true,
		allowFutureDates: true,
		doneButtonLabel: 'Save',
		doneButtonColor: '#F2F3F4',
		cancelButtonLabel: 'Cancel',
		cancelButtonColor: '#000000'
	};
	
	$cordovaDatePicker.show(options).then(function(date){
		var toDo = {
				  title: item,
				  date: date.toDateString(),
				  id: toDoService.getNumberOf()
		};
		toDoService.addToList(toDo);
		$localstorage.setObject( 'toDoList', toDoService.output() );
    });

  };
  
    // Remove item
  $scope.removeItem = function(index) {
   var confirmPopup = $ionicPopup.confirm({
     title: 'To-Do',
     template: 'Are you sure you want to delete this?'
   });
   confirmPopup.then(function(res) {
     if(res) {
       toDoService.removeItem( index );
	   $localstorage.setObject( 'toDoList', toDoService.output() );
     } else {
       
     }
   });
 };
  
  $scope.output = function () {
	$scope.list = toDoService.output();
	return $scope.list;
  }

}])

app.factory('toDoService', ['$localstorage', function($localstorage) {
  var list = [];
  
  function loadList( load ) {
	list = load;
  }
  
  function addToList(item) {
	list.push(item);
  }
  
  function removeItem( index ) {
	list.splice(index, 1);
  }
  
  function getNumberOf() {
	return list.length;
  }
  
  function output() {
	return list;
  }
  
  return {
    loadList: loadList,
	addToList: addToList,
	removeItem: removeItem,
	getNumberOf: getNumberOf,
	output: output
  };
}]); 