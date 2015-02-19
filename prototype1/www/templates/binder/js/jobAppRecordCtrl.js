//**********************************************
//**********************************************
//**********************************************
//**********************************************
//  author: Adam Proulx
//**********************************************
//**********************************************
//**********************************************
// JOB APPLICATION CONTROLLER
// JOB APPLICATION CONTROLLER
// JOB APPLICATION CONTROLLER
// JOB APPLICATION CONTROLLER
// JOB APPLICATION CONTROLLER
// JOB APPLICATION CONTROLLER
// JOB APPLICATION CONTROLLER
app.controller('JobAppCtrl', ['$scope', '$ionicPopup', 'jobAppService', function($scope, $ionicPopup, jobAppService){
  //var $scope.date;
  $scope.obj = {
    date: new Date(),
    company: '',
    jobTitle: '',
    posDesc: '',
    notes: ''

  };
  //command a popup window to be filled with job application data
  $scope.jobForm = function(){
    var newJob = $ionicPopup.show({
      title: 'New Job Application',
      templateUrl: 'templates/binder/binder-jobApps-popup.html',
      scope: $scope,
      buttons: [
        {
          text:'Cancel',
          
        },
        {
          text: 'Submit',
          //type: '',
          onTap: function(e){
            //console.log("Hello");
            $scope.addRecord();
            //newJob.close();
          }
        }
      ]
    });
  };

  //EDIT WINDOW
  //EDIT WINDOW
  //EDIT WINDOW
  //EDIT WINDOW
  //EDIT WINDOW
  $scope.editJobForm = function(item){
    var tmp = item;
    $scope.obj.date=item.date;
    $scope.obj.company=item.company;
    $scope.obj.jobTitle=item.jobTitle;
    $scope.obj.posDesc=item.posDesc;
    $scope.obj.notes=item.notes;

    //$scope.obj = item;

    var editJob = $ionicPopup.show({
      title: 'Edit Job Application',
      templateUrl: 'templates/binder/binder-jobApps-popup.html',
      scope: $scope,
      buttons: [
        {
          text:'Cancel',
        },
        {
          text: 'Update',
          //type: '',
          onTap: function(){
            var editIndex = jobAppService.getJobApp().indexOf(tmp);
            jobAppService.editJobApp(editIndex, $scope.obj);

            $scope.obj = {
              date: new Date(),
              company: '',
              jobTitle: '',
              posDesc: '',
              notes: ''
            }
          }
        }
      ]
    })
  }


  //ADD RECORD FUNCTION
  //ADD RECORD FUNCTION
  //ADD RECORD FUNCTION
  //ADD RECORD FUNCTION
  //ADD RECORD FUNCTION
  $scope.addRecord = function(){
    $scope.jobAppRecord = [];
    var newJobApplication = $scope.obj;
    $scope.jobAppRecord.push(newJobApplication);


    //reset values to default after submit
    $scope.obj = {
      date: new Date(),
      company: '',
      jobTitle: '',
      posDesc: '',
      notes: ''
    };

    //push each attribute of $scope.obj to the factory
    $scope.jobAppRecord.forEach( function(arrayItem){
      
      jobAppService.addJobApp(arrayItem);
      //alert('Array values added to jobApp factory');
    });
    
  }


  //output array to place existing factory data
  $scope.output = [];

  //return factory data
  $scope.getJobs = function(){
    $scope.output = jobAppService.getJobApp();

    return $scope.output;
  }
}]);
//END JOB CONTROLLER


//JOB APP FACTORY
app.factory('jobAppService', function(){
  //an array to hold job records
  var array = [];

  function addJobApp(jobApp){
    array.push(jobApp);
  }

  function getJobApp(){
    return array;
  }

  function editJobApp(index, item){
    array[index] = item;

  }

  return{
    addJobApp: addJobApp,
    getJobApp: getJobApp,
    editJobApp: editJobApp,
  }
});
