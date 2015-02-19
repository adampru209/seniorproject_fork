// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('prototype', ['ionic', 'ngCordova', 'ui.calendar', 'ui.bootstrap'])

app.run(function($ionicPlatform) {

	$ionicPlatform.ready(function() {
	});
	
	//window.localStorage.clear();
	
	var appLaunchCount = window.localStorage.getItem('launchCount');
	//Check if item exists
	if(appLaunchCount){
	   //If it exists then it is not the first time app launched
	   console.log("NOT first time");
	}else{
	  //First time launch. Set the local storage item
	  window.localStorage.setItem('launchCount',1);
	  console.log("FIRST TIME USER");

	}
});

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('/', {
    url: '/',
    templateUrl: '/',
    controller: 'MainCtrl'
  })

  .state('mainMenu', {
    url: '/MainMenu',
    templateUrl: 'templates/MainMenu.html',
    controller: 'MainCtrl'
  })

  .state('profile', {
    url: '/profile',
    templateUrl: 'templates/profile.html',
    controller:'profile'
  })
  

  //BINDER STATES
  .state('binder', {
      url: '/binder',
      templateUrl: 'templates/binder/binder.html',
      controller: 'MainCtrl'
  })
  
  .state('binder-calendar', {
      url: '/binder/calendar',
      templateUrl: 'templates/binder/binder-calendar.html',
      controller: 'MainCtrl'
  })
	
  .state('binder-toDo', {
      url: '/binder/toDo',
      templateUrl: 'templates/binder/binder-toDo.html',
      controller: 'MainCtrl'
  })
	
  .state('binder-ideas', {
      url: '/binder/ideas',
      templateUrl: 'templates/binder/binder-ideas.html',
      controller: 'MainCtrl'
  })

  .state('binder-jobApps', {
      url: '/binder/jobApps',
      templateUrl: 'templates/binder/binder-jobApps.html',
      controller: 'MainCtrl'  
  })

  .state('binder-contacts', {
    url: '/binder/contacts',
    templateUrl: 'templates/binder/binder-contacts.html',
    controller: 'MainCtrl'
  })
  

  //TIMELINE STATES
  .state('timeline', {
    url: '/Timeline',
    templateUrl: 'templates/Timeline.html',
    controller: 'MainCtrl'  
  })

  .state('selfAssess', {
    url: '/selfAssess',
    templateUrl: 'templates/SelfAssessment.html',
    controller: 'MainCtrl'
  })


//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
            
      //MSI PARTIALS

//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\




  .state('msi_communication', {
    url: 'timeline/selfAsmnt/msi/msi_communication',
    templateUrl: 'templates/timeline/selfAsmnt/msi/msi_communication.html',
    controller: 'MainCtrl'
  })

  .state('msi_marketing', {
    url: '/msi_marketing',
    templateUrl: 'templates/timeline/selfAsmnt/msi/msi_marketing.html',
    controller: 'MainCtrl'
  })

  .state('msi_qa', {
    url: '/msi_qa',
    templateUrl: 'templates/timeline/selfAsmnt/msi/msi_qa.html',
    controller: 'MainCtrl'
  })

  .state('msi_analytics', {
    url: '/msi_analytics',
    templateUrl: 'templates/timeline/selfAsmnt/msi/msi_analytics.html',
    controller: 'MainCtrl'
  })

  .state('msi_technical', {
    url: '/msi_technical',
    templateUrl: 'templates/timeline/selfAsmnt/msi/msi_technical.html',
    controller: 'MainCtrl'
  })

  .state('msi_innovative', {
    url: '/msi_innovative',
    templateUrl: 'templates/timeline/selfAsmnt/msi/msi_innovative.html',
    controller: 'MainCtrl'
  })

  .state('msi_teaching', {
    url: '/msi_teaching',
    templateUrl: 'templates/timeline/selfAsmnt/msi/msi_teaching.html',
    controller: 'MainCtrl'
  })

  .state('msi_leadership', {
    url: '/msi_leadership',
    templateUrl: 'templates/timeline/selfAsmnt/msi/msi_leadership.html',
    controller: 'MainCtrl'
  })

  .state('msi_results', {
    url: '/msi_results',
    templateUrl: 'templates/timeline/selfAsmnt/msi/msi_results.html',
    controller: 'MainCtrl'
  })

  $urlRouterProvider.otherwise('/MainMenu');
})


app.controller('MainCtrl', function($scope, $state) {
  $scope.toMainMenu = function(){
    $state.go('mainMenu');
  }
  
  $scope.toBinder = function ( ) {
    $state.go('binder');
  }
  
  $scope.toBinderToDoList = function ( ) {
    $state.go('binder-toDo');
  }
  
  $scope.toBinderCalendar = function ( ) {
    $state.go('binder-calendar');
  }
  
  $scope.toBinderIdeas = function ( ) {
    $state.go('binder-ideas');
  }

  $scope.toBinderJobs = function(){
    $state.go('binder-jobApps');
  }

  $scope.toBinderContacts = function(){
    $state.go('binder-contacts');
  }

  $scope.toTimeline = function(){
    $state.go('timeline');
  }

  $scope.toSelfAssess = function(){
    $state.go('selfAssess');
  }





//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
            
      //MSI PARTIALS

//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// TODO, remove all these to____. they can be replaced by ui-sref="__"
  $scope.toMSI_communication = function(){
    $state.go('msi_communication');
  }

  $scope.toMSI_marketing = function(){
    $state.go('msi_marketing');
  }

  $scope.toMSI_qa = function(){
    $state.go('msi_qa');
  }

  $scope.toMSI_analytics = function(){
    $state.go('msi_analytics');
  }

  $scope.toMSI_technical = function(){
    $state.go('msi_technical');
  }

  $scope.toMSI_innovative = function(){
    $state.go('msi_innovative');
  }

  $scope.toMSI_teaching = function(){
    $state.go('msi_teaching');
  }

  $scope.toMSI_leadership = function(){
    $state.go('msi_leadership');
  }

  $scope.toResults = function(){
    $state.go('msi_results');
  }

})

//Used for storing objects and converting to and from JSON
app.factory('$localstorage', ['$window', function($window) {
  
  function set(key, value) {
      $window.localStorage[key] = value;
  }
  
  function get(key, defaultValue) {
      return $window.localStorage[key] || defaultValue;
  }
  
  function setObject(key, value) {
      $window.localStorage[key] = JSON.stringify(value);
  }
  
  function getObject(key) {
      return JSON.parse($window.localStorage[key] || '{}');
  }
  
  return {
    set: set,
    get: get,
    setObject: setObject,
    getObject: getObject
  }
}]);