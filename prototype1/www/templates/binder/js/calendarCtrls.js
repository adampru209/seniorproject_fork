app.controller('CalendarCtrl', ['$scope', '$compile', '$ionicPopup', '$cordovaCalendar', '$localstorage', 'uiCalendarConfig', 'calendarService', 'toDoService', function CalendarCtrl($scope, $compile, $ionicPopup, $cordovaCalendar, $localstorage, uiCalendarConfig, calendarService, toDoService) {
	  var date = new Date();
	  //Event object
	  $scope.obj = {
		title: '',
		start: date,
		end: date

	  };
	  
	  /* Load from local storage */
	  var load = $localstorage.getObject( 'calendar' );
	  if (Object.keys(load).length !== 0) {
		calendarService.loadList( load );
	  }
	  
	  //Add event popup
	  $scope.addEvent = function(){
		var myPopup = $ionicPopup.show({
		  title: 'Add an event',
		  templateUrl: 'templates/binder/binder-calendar-popup.html',
		  scope: $scope,
		  buttons: [
			{
			  text:'Cancel',
			  
			},
			{
			  text: 'Save',
			  onTap: function(e){
			    var toDo = {
				  title: $scope.obj.title,
				  date: $scope.obj.end.toDateString()
				};
				//Add to calendar and to-do
				calendarService.addToList($scope.obj);
				toDoService.addToList(toDo);
				$localstorage.setObject( 'calendar', calendarService.output() );
				$localstorage.setObject( 'toDoList', toDoService.output() );
				
				//Save to native calendar app
				$cordovaCalendar.createEvent({
					title: $scope.obj.title,
					startDate: $scope.obj.start,
					endDate: $scope.obj.end
				}).then(function (result) {
					// success
					console.log(result);
				}, function (err) {
					// error
				});
				
				//Reset object
				$scope.obj = {
					title: '',
					start: date,
					end: date

			   };   
			   			   
			  }
			}
		  ]
		});
	  };

    /* alert on eventClick */
    $scope.alertOnEventClick = function( date, jsEvent, view){
        $scope.alertMessage = (date.title + ' was clicked ');
    };
    /* alert on Drop */
    $scope.alertOnDrop = function(event, delta, revertFunc, jsEvent, ui, view){
       $scope.alertMessage = ('Event Droped to make dayDelta ' + delta);
    };
    /* alert on Resize */
    $scope.alertOnResize = function(event, delta, revertFunc, jsEvent, ui, view ){
       $scope.alertMessage = ('Event Resized to make dayDelta ' + delta);
    };
    /* add and removes an event source of choice */
    $scope.addRemoveEventSource = function(sources,source) {
      var canAdd = 0;
      angular.forEach(sources,function(value, key){
        if(sources[key] === source){
          sources.splice(key,1);
          canAdd = 1;
        }
      });
      if(canAdd === 0){
        sources.push(source);
      }
    };
	
    /* remove event */
    $scope.remove = function(index) {
      calendarService.removeItem(index);
	  toDoService.removeItem(index);
	  $localstorage.setObject( 'calendar', calendarService.output() );
	  $localstorage.setObject( 'toDoList', toDoService.output() );
    };
	
    /* Change View */
    $scope.changeView = function(view,calendar) {
      uiCalendarConfig.calendars[calendar].fullCalendar('changeView',view);
    };
	
    /* Change View */
    $scope.renderCalender = function(calendar) {
	  if(uiCalendarConfig.calendars[calendar]){
        uiCalendarConfig.calendars[calendar].fullCalendar('render');
      }
    };
	
	$scope.render = function () {
		console.log("Hi");
	};

     /* Render Tooltip */
    $scope.eventRender = function( event, element, view ) { 
        $compile(element)($scope);
    };
	
    /* config object */
    $scope.uiConfig = {
      calendar:{
		aspectRatio: 1.5,
        editable: true,
		timezone: 'local',
		ignoreTimezone: false,
		scrollTime: '00:00:00',       
		allDaySlot: false,
        header:{
          left: 'title',
          center: '',
          right: 'today prev,next'
        },
		events: calendarService.output(),
		fixedWeekCount: false,
		eventLimit: true, 
        eventClick: $scope.alertOnEventClick,
        eventDrop: $scope.alertOnDrop,
        eventResize: $scope.alertOnResize,
        eventRender: $scope.eventRender
      }
    };
	
	/* Output events */
	$scope.output = function () {
		return calendarService.output();
	}
	
    /* event sources array*/
    $scope.eventSources = [];
	    
}]);

app.factory('calendarService', ['$localstorage', function($localstorage) {
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
	getTitle: getTitle,
	output: output
  };
}]);