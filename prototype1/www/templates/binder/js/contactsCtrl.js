//binder contacts controller

app.controller('contactsCtrl', ['$scope', '$cordovaContacts', '$ionicPopup', 'contactService', function($scope, $cordovaContacts, $ionicPopup, contactService) {
	$scope.contactObj = {
		displayName: '',
		phoneNumbers: [
			new ContactField('main')
		],
		emails: [
			new ContactField()
		],
		addresses: [
			new ContactAddress()
		],
		organizations: [
			new ContactOrganization()
		],
		note: '',
	};


	//command a popup to open when user wants to add a new contact
	$scope.contactForm = function(){
		var newContact = $ionicPopup.show({
			title: 'New Professional Contact',
			templateUrl: 'templates/binder/binder-contact-popup.html', //create this template
			scope: $scope,
			buttons: [
				{
					text: 'Cancel'
				},
				{
					text: 'Submit',
					onTap: function(e){
						$scope.addContact();
					}
				}
			]
		});
	};


	//command popup to open for edit function
	$scope.editContactForm = function(item){
		var tmp = item;

		$scope.contactObj.displayName = item.displayName;
		$scope.contactObj.phoneNumbers[0].value = item.phoneNumbers[0].value;
		$scope.contactObj.emails[0].value = item.emails[0].value;
		$scope.contactObj.organizations[0].name = item.organizations[0].name;
		$scope.contactObj.note = item.note;

		var editContact = $ionicPopup.show({
			title: 'Edit Contact',
			templateUrl: 'templates/binder/binder-contact-popup.html',
			scope: $scope,
			buttons: [
				{
					text: 'Cancel'
				},

				{
					text: 'Update',

					onTap: function(){
						//get correct contact from the factory using our tmp var
						var editIndex = contactService.getContactsService().indexOf(tmp);
						//cal the edit contact factory function and pass in our new editIndex 
						//and $scope.contactObj
						contactService.editContactsService(editIndex, $scope.contactObj);


						$scope.contactObj = {
							displayName: '',
							phoneNumbers: [
								new ContactField('main')
							],
							emails: [
								new ContactField()
							],
							addresses: [
								new ContactAddress()
							],
							organizations: [
								new ContactOrganization()
							],
							note: '',
						};
					}
				}

			]

		});
	}






	$scope.addContact = function() {

		//$scope.useContactService = function(contact){
		contactService.addContactService($scope.contactObj);
		


		$cordovaContacts.save($scope.contactObj).then(function(result) {
			console.log("CONTACT ADDED");
		}, function(err){
			console.log("ERROR");
		});


		$scope.contactObj = {
			displayName: '',
			phoneNumbers: [
				new ContactField('main')
			],
			emails: [
				new ContactField()
			],
			addresses: [
				new ContactAddress()
			],
			organizations: [
				new ContactOrganization()
			],
			note: '',
		};
	};



	//create new array to attach factory list to $scope
	$scope.output = [];

	$scope.getContacts = function(){
		$scope.output = contactService.getContactsService(); 
		return $scope.output;
	}	
}]);



//contacts factory
app.factory('contactService', function() {
	var contactsArray = [];

	//add contact
	function addContactService(contact) {
		contactsArray.push(contact);
	}

	function getContactsService(){
		return contactsArray;
	}

	function editContactsService(index, item){
    	contactsArray[index] = item;
  	}


	return {
		addContactService: addContactService,
		getContactsService: getContactsService,
		editContactsService: editContactsService,
	}

})