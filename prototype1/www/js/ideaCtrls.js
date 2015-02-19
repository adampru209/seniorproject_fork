/* Idea list control */
app.controller('IdeaCtrl', ['$scope', '$ionicPopup', '$timeout', '$localstorage', 'ideaService', function($scope, $ionicPopup, $timeout, $localstorage, ideaService) {
  var d = new Date();
  var count = ideaService.getNumberOf();
  
  /* Load from local storage */
  var load = $localstorage.getObject( 'ideaList' );
  if (Object.keys(load).length !== 0) {
    ideaService.loadList( load );
  }

   //Add idea 
   $scope.addIdea = function() {
	$scope.list = {}
    var myPopup = $ionicPopup.show({
      template: '<input type="text" ng-model="list.idea">',
      title: 'Enter your ideas or inspirations',
      subTitle: 'Remember this could trigger motivation',
      scope: $scope,
      buttons: [
      { text: 'Cancel' },
      {
        text: '<b>Save</b>',
        type: 'button-positive',
		onTap: function(e) {
		
		  /* Empty input */
		  if (!$scope.list.idea) {
			e.preventDefault();
			var alertPopup = $ionicPopup.alert({
			  title: 'Input is empty',
			  template: 'Please input an item'
		    });
			alertPopup.then(function(res) {
			  alertPopup.close();
			});
		  } else {
		    var obj = { title: $scope.list.idea, date: d.toDateString(), id: count+1 };  
			ideaService.addToList(obj);
			$localstorage.setObject( 'ideaList', ideaService.output() );
			$scope.list.idea = '';
		  }
		}
      }
    ]
    });


  };
  
  //Edit idea
  $scope.editIdea = function(index) {
	$scope.edit = {
		idea: ideaService.getTitle(index)
	};
    var myPopup = $ionicPopup.show({
      template: '<input type="text" ng-model="edit.idea">',
      title: 'Change of idea? That is fine',
      scope: $scope,
      buttons: [
      { text: 'Cancel' },
      {
        text: '<b>Save</b>',
        type: 'button-positive',
		onTap: function(e) {
	
		  /* Empty input alert */
		  if (!$scope.edit.idea) {
			e.preventDefault();
			var alertPopup = $ionicPopup.alert({
			  title: 'Input is empty',
			  template: 'Please input an item'
		    });
			alertPopup.then(function(res) {
			  alertPopup.close();  
			});
		  } else {
			var newDate = new Date();
			var obj = { title: $scope.edit.idea, date: newDate.toDateString(), id: index };
			ideaService.editItem( obj, index );
			$localstorage.setObject( 'ideaList', ideaService.output() );
		  }
		}
      }
    ]
    });
	myPopup.then(function(res) {
		myPopup.close();
    });

  };
  
  // Remove idea
  $scope.removeIdea = function(index) {
   var confirmPopup = $ionicPopup.confirm({
     title: 'Ideas/Inspirations',
     template: 'Are you sure you want to delete this awesome idea?'
   });
   confirmPopup.then(function(res) {
     if(res) {
       ideaService.removeItem( index );
	   $localstorage.setObject( 'ideaList', ideaService.output() );
     } else {
       
     }
   });
 };
  
  //Output the idea
  
  $scope.output = function () {
	$scope.list = ideaService.output();
	return $scope.list;
  }

}])


app.factory('ideaService', function() {
  var list = [];
  
  function loadList(load) {
	list = load;
  }
  
  function addToList(item) {
	list.push(item);
  }
  
  function editItem( item, index ) {
	removeItem( index );
	list.splice(index,0,item);
  }
  
  function removeItem( index ) {
	list.splice(index, 1);
  }
  
  function getNumberOf() {
	return list.length;
  }
  
  function getItem( index ) {
	return list[index];
  }
  
  function getTitle( index ) {
	return list[index].title;
  }
  
  function output() {
	return list;
  }
  
  return {
    loadList: loadList,
	addToList: addToList,
	editItem: editItem,
	removeItem: removeItem,
	getNumberOf: getNumberOf,
	getItem: getItem,
	getTitle: getTitle,
	output: output
  };
});