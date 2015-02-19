//THIS FILE HOLDS THE CONTROLLERS FOR EACH SECTION OF QUESTIONS
//IN THE MOTIVATED SKILLS ASSESSMENT AND THE SCRAPER FACTORY

//service to collect user input values from surveys
app.factory('scraper', function() {
  //blank array to hold all values
  var values = [];

  function addTotal(val){
    values.push(val);
  }

  //this loop will return the totals that are 6 or higher.
  function output(){
    var out = [];

    values.forEach( function(object){
      if(object.sum >= 6){
        out.push(object);
      }
    });
    //values = [];
    return out;
  }

  function GetMaxVal(){
    return Math.max.apply(Math, values);
  }

  return {
    addTotal: addTotal,
    GetMaxVal: GetMaxVal,
    output: output
  };

});



//Communication controller
app.controller('comsCtrl', ['$scope', 'scraper', function($scope, scraper){

	//Place the questions into a scope object and separates them into attributes of header and body
	$scope.comQuestions = {
		writingHead: "Writing: ",
		writingBody: " Possess good to excellent skills. Able to create business or technical documents, correspondence, and other effective written communications. Enjoy creative writing.",
		speakingHead: "Speaking: ",
		speakingBody: " Comfortable speaking in meetings and communicating complex information in an easily understandable form to individuals at various levels.",
		presentationHead: "Presentation: ",
		presentationBody: " Skilled at giving presentations to large or small groups. Able to develop effective visual aids for presentations.",
		persuasiveHead: "Persuasive: ",
		persuasiveBody: " Comfortable using persuasive skills to convince others as to a particular course of action.",
		saleHead: "Selling: ",
		saleBody: " Skilled at convincing others to buy a product or service.",
		dramaHead: "Dramatics: ",
		dramaBody: " Enjoy delivering information, ideas or stories dramatically.",
		negotiatingHead: "Negotiating: ",
		negotiatingBody: " Capable of bargaining with others to reach a desired agreement."
	}

	//collection of scope arrays of objects for each set of radio buttons
	$scope.writingSkills = [
		{text: "1", value: 1},
		{text: "2", value: 2},
		{text: "3", value: 3},
		{text: "4", value: 4}
	];

	$scope.writingMotivation = [
		{text: "1", value: 1},
		{text: "2", value: 2},
		{text: "3", value: 3},
		{text: "4", value: 4}
	];

	$scope.speakingSkills = [
		{text: "1", value: 1},
		{text: "2", value: 2},
		{text: "3", value: 3},
		{text: "4", value: 4},
	];

	$scope.speakingMotivation = [
		{text: "1", value: 1},
		{text: "2", value: 2},
		{text: "3", value: 3},
		{text: "4", value: 4},
	];

	$scope.presentationSkills = [
		{text: "1", value: 1},
		{text: "2", value: 2},
		{text: "3", value: 3},
		{text: "4", value: 4},
	];

	$scope.presentationMotivation = [
		{text: "1", value: 1},
		{text: "2", value: 2},
		{text: "3", value: 3},
		{text: "4", value: 4},
	];

	$scope.persuasiveSkills = [
		{text: "1", value: 1},
		{text: "2", value: 2},
		{text: "3", value: 3},
		{text: "4", value: 4},
	];

	$scope.persuasiveMotivation = [
		{text: "1", value: 1},
		{text: "2", value: 2},
		{text: "3", value: 3},
		{text: "4", value: 4},
	];

	$scope.saleSkills = [
		{text: "1", value: 1},
		{text: "2", value: 2},
		{text: "3", value: 3},
		{text: "4", value: 4},
	];

	$scope.saleMotivation = [
		{text: "1", value: 1},
		{text: "2", value: 2},
		{text: "3", value: 3},
		{text: "4", value: 4},
	];

	$scope.dramaSkills = [
		{text: "1", value: 1},
		{text: "2", value: 2},
		{text: "3", value: 3},
		{text: "4", value: 4},
	];

	$scope.dramaMotivation = [
		{text: "1", value: 1},
		{text: "2", value: 2},
		{text: "3", value: 3},
		{text: "4", value: 4},
	];

	$scope.negotiatingSkills = [
		{text: "1", value: 1},
		{text: "2", value: 2},
		{text: "3", value: 3},
		{text: "4", value: 4},
	];

	$scope.negotiatingMotivation = [
		{text: "1", value: 1},
		{text: "2", value: 2},
		{text: "3", value: 3},
		{text: "4", value: 4},
	];

	//array to hold totals
	$scope.comsTotals = [];


	//the object which contains most of the important chunks of data in the app
	$scope.data = { 

		writingSVal: 0, 
		writingMVal: 0,
		writingTotal: function(s, m){
			//alert('inside comTotal function()');
			t = {
				h: $scope.comQuestions.writingHead,
				b: $scope.comQuestions.writingBody,
				sum: s+m
			};
			$scope.comsTotals.push(t);
		},
		speakingSVal: 0,
		speakingMVal: 0,
		speakingTotal: function(s, m){
			t = {
				h: $scope.comQuestions.speakingHead,
				b: $scope.comQuestions.speakingBody,
				sum: s+m
			};
			$scope.comsTotals.push(t);
		},
		presentationSVal: 0,
		presentationMVal: 0,
		presentationTotal: function(s, m){
			t = {
				h: $scope.comQuestions.presentationHead,
				b: $scope.comQuestions.presentationBody,
				sum: s+m
			};

			$scope.comsTotals.push(t);
		},
		persuasiveSVal: 0,
		persuasiveMVal: 0,
		persuasiveTotal: function(s, m){
			var t = {
				h: $scope.comQuestions.persuasiveHead,
				b: $scope.comQuestions.persuasiveBody,
				sum: s+m
			};
			
			$scope.comsTotals.push(t);
		},
		saleSVal: 0,
		saleMVal: 0,
		saleTotal: function(s, m){
			t = {
				h: $scope.comQuestions.saleHead,
				b: $scope.comQuestions.saleBody,
				sum: s+m
			};
			$scope.comsTotals.push(t);
		},
		dramaSVal: 0,
		dramaMVal: 0,
		dramaTotal: function(s, m){
			t = {
				h: $scope.comQuestions.dramaHead,
				b: $scope.comQuestions.dramaBody,
				sum: s+m
			};
			$scope.comsTotals.push(t);
		},
		negotiatingSVal: 0,
		negotiatingMVal: 0,
		negotiatingTotal: function(s, m){
			t = {
				h: $scope.comQuestions.negotiatingHead,
				b: $scope.comQuestions.negotiatingBody,
				sum: s+m
			};
			$scope.comsTotals.push(t);
		}
	};

	/*$scope.comsTotals = function(){

	}*/

	$scope.commitVals = function(){
		//call the total function for each set of questions and add them to
		//the total for the communication section which is done individually within each function
		$scope.data.writingTotal($scope.data.writingSVal, $scope.data.writingMVal);
		$scope.data.speakingTotal($scope.data.speakingSVal, $scope.data.speakingMVal);
		$scope.data.presentationTotal($scope.data.presentationSVal, $scope.data.presentationMVal);
		$scope.data.persuasiveTotal($scope.data.persuasiveSVal, $scope.data.persuasiveMVal);
		$scope.data.saleTotal($scope.data.saleSVal, $scope.data.saleMVal);
		$scope.data.dramaTotal($scope.data.dramaSVal, $scope.data.dramaMVal);
		$scope.data.negotiatingTotal($scope.data.negotiatingSVal, $scope.data.negotiatingMVal);

		//Loop through the Totals array which now contains the questions and summed values
		//for each question and send them to the scraper service using a service function 
		//called addTotal
		$scope.comsTotals.forEach( function(arrayItem){
			//alert(arrayItem.q);
			//alert(arrayItem.sum);
			scraper.addTotal(arrayItem);
			//alert('Array values added to scraper');

		});

	}

	//array to hold result values
	$scope.results = [];

	$scope.getResults = function(){
		//alert($scope.results);
		$scope.results = scraper.output();
		//alert($scope.results);
		return  $scope.results;

	}

	$scope.maximumval = function(){
		return scraper.GetMaxVal();
	}
	
}]);

//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


//			Marketing Controller
//			Marketing Controller
//			Marketing Controller


//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

app.controller('marketCtrl', ['$scope', 'scraper', function($scope, scraper){
	//Place the questions into a scope object and separates them into attributes of header and body
	$scope.marketQuestions = {
		socialHead: "Social Ease: ",
		socialBody: " Effective in social situations; comfortable meeting new people and establish rapport easily.",
		PRHead: "Public Relations: ",
		PRBody: " Interact effectively on a continual basis with customers requiring information, service or help.",
		custservHead: "Customer/User Service: ",
		custservBody: " Skilled at listening carefully to customer needs and complaints. Able to identify, trouble shoot and resolve problems to customer 's satisfaction. Skilled at defusing customer anger or frustration; able to create a positive experience for the customer.",
		marketsalesHead: "Marketing & Sales: ",
		marketsalesBody: " Skilled at identifying customer needs and preferences and making appropriate product or service recommendations.",
		profHead: "Professional Image: ",
		profBody: " Able to present a good professional appearance. Able to represent an organization effectively in a positive light. Enjoy dressing appropriately for professional situations. Project a solid professional image.",
		improvementHead: "Performance Improvement: ",
		improvementBody: " Able to deal effectively with objective criticism or feedback and improve performance. Able to identify areas of deficiency to improve performance. Able to defuse problems and resolve complaints with positive action."
	}


	//collection of scope arrays of objects for each set of radio buttons
	$scope.socialSkills = [
		{text: "1", value: 1},
		{text: "2", value: 2},
		{text: "3", value: 3},
		{text: "4", value: 4}
	];

	$scope.socialMotivation = [
		{text: "1", value: 1},
		{text: "2", value: 2},
		{text: "3", value: 3},
		{text: "4", value: 4}
	];


	$scope.PRSkills = [
		{text: "1", value: 1},
		{text: "2", value: 2},
		{text: "3", value: 3},
		{text: "4", value: 4}
	];

	$scope.PRMotivation = [
		{text: "1", value: 1},
		{text: "2", value: 2},
		{text: "3", value: 3},
		{text: "4", value: 4}
	];


	$scope.custservSkills = [
		{text: "1", value: 1},
		{text: "2", value: 2},
		{text: "3", value: 3},
		{text: "4", value: 4}
	];

	$scope.custservMotivation = [
		{text: "1", value: 1},
		{text: "2", value: 2},
		{text: "3", value: 3},
		{text: "4", value: 4}
	];


	$scope.marketsalesSkills = [
		{text: "1", value: 1},
		{text: "2", value: 2},
		{text: "3", value: 3},
		{text: "4", value: 4}
	];

	$scope.marketsalesMotivation = [
		{text: "1", value: 1},
		{text: "2", value: 2},
		{text: "3", value: 3},
		{text: "4", value: 4}
	];


	$scope.profSkills = [
		{text: "1", value: 1},
		{text: "2", value: 2},
		{text: "3", value: 3},
		{text: "4", value: 4}
	];

	$scope.profMotivation = [
		{text: "1", value: 1},
		{text: "2", value: 2},
		{text: "3", value: 3},
		{text: "4", value: 4}
	];


	$scope.improvementSkills = [
		{text: "1", value: 1},
		{text: "2", value: 2},
		{text: "3", value: 3},
		{text: "4", value: 4}
	];

	$scope.improvementMotivation = [
		{text: "1", value: 1},
		{text: "2", value: 2},
		{text: "3", value: 3},
		{text: "4", value: 4}
	];



	//array to hold all market value sums and question objects
	$scope.marketTotals = [];

	//the object which contains most of the important chunks of data in the app
	$scope.data = { 

		socialSVal: 0, 
		socialMVal: 0,
		socialTotal: function(s, m){
			//alert('inside comTotal function()');
			t = {
				h: $scope.marketQuestions.socialHead,
				b: $scope.marketQuestions.socialBody,
				sum: s+m
			};

			$scope.marketTotals.push(t);
		},
		PRSVal: 0, 
		PRMVal: 0,
		PRTotal: function(s, m){
			//alert('inside comTotal function()');
			t = {
				h: $scope.marketQuestions.PRHead,
				b: $scope.marketQuestions.PRBody,
				sum: s+m
			};
			
			$scope.marketTotals.push(t);
		},
		custservSVal: 0, 
		custservMVal: 0,
		custservTotal: function(s, m){
			//alert('inside comTotal function()');
			t = {
				h: $scope.marketQuestions.custservHead,
				b: $scope.marketQuestions.custservBody,
				sum: s+m
			};
			
			$scope.marketTotals.push(t);
		},
		marketsalesSVal: 0, 
		marketsalesMVal: 0,
		marketsalesTotal: function(s, m){
			//alert('inside comTotal function()');
			t = {
				h: $scope.marketQuestions.marketsalesHead,
				b: $scope.marketQuestions.marketsalesBody,
				sum: s+m
			};
			
			$scope.marketTotals.push(t);
		},
		profSVal: 0, 
		profMVal: 0,
		profTotal: function(s, m){
			//alert('inside comTotal function()');
			t = {
				h: $scope.marketQuestions.profHead,
				b: $scope.marketQuestions.profBody,
				sum: s+m
			};
			
			$scope.marketTotals.push(t);
		},
		improvementSVal: 0, 
		improvementMVal: 0,
		improvementTotal: function(s, m){
			//alert('inside comTotal function()');
			t = {
				h: $scope.marketQuestions.improvementHead,
				b: $scope.marketQuestions.improvementBody,
				sum: s+m
			};
			
			$scope.marketTotals.push(t);
		},
	};



	$scope.commitVals = function(){
		//call the total function for each set of questions and add them to
		//the total for the communication section which is done individually within each function
		
		$scope.data.socialTotal($scope.data.socialSVal, $scope.data.socialMVal);
		$scope.data.PRTotal($scope.data.PRSVal, $scope.data.PRMVal);
		$scope.data.custservTotal($scope.data.custservSVal, $scope.data.custservMVal);
		$scope.data.marketsalesTotal($scope.data.marketsalesSVal, $scope.data.marketsalesMVal);
		$scope.data.profTotal($scope.data.profSVal, $scope.data.profMVal);
		$scope.data.improvementTotal($scope.data.improvementSVal, $scope.data.improvementMVal);

		//Loop through the Totals array which now contains the questions and summed values
		//for each question and send them to the scraper service using a service function 
		//called addTotal
		$scope.marketTotals.forEach( function(arrayItem){
			
			scraper.addTotal(arrayItem);
			//alert('Array values added to scraper');

		});

	}


	//array to hold result values
	$scope.results = [];

	$scope.getResults = function(){
		//alert($scope.results);
		$scope.results = scraper.output();
		//alert($scope.results);
		return  $scope.results;

	}


}]);


//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


//			Quantitative Analysis Controller
//			Quantitative Analysis Controller
//			Quantitative Analysis Controller


//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

app.controller('qaCtrl', ['$scope', 'scraper', function($scope, scraper){
	

	$scope.qaQuestions = {
		compspeedHead: "Computational Speed: ",
		compspeedBody: " Able to process, compute or manipulate numerical data rapidly and accurately with or without the aid of a calculator or computing device.",
		numcrunchHead: "Work With Numerical Data: ",
		numcrunchBody: " Skilled at dealing with and manipulating large amounts of quantitative data. Able to compile, interpret, and present complex data.",
		probsolvHead: "Solve Quantitative Problems: ",
		probsolvBody: " Able to analyze numerical data using complex equations and methods to arrive at a satisfactory solution. Able to recommend course of action based on quantitative analysis.",
		computerHead: "Computer Skills: ",
		computerBody: " Able to analyze customer hardware or software needs or problems. Skilled at writing software specifications and developing computer software programs or software systems in order to automate processes for maximum efficiency and data collection. Able to identify hardware solutions based on careful analysis."
	};

	//collection of scope arrays of objects for each set of radio buttons
	$scope.compspeedSkills = [
		{text: "1", value: 1},
		{text: "2", value: 2},
		{text: "3", value: 3},
		{text: "4", value: 4}
	];

	$scope.compspeedMotivation = [
		{text: "1", value: 1},
		{text: "2", value: 2},
		{text: "3", value: 3},
		{text: "4", value: 4}
	];


	$scope.numcrunchSkills = [
		{text: "1", value: 1},
		{text: "2", value: 2},
		{text: "3", value: 3},
		{text: "4", value: 4}
	];

	$scope.numcrunchMotivation = [
		{text: "1", value: 1},
		{text: "2", value: 2},
		{text: "3", value: 3},
		{text: "4", value: 4}
	];


	$scope.probsolvSkills = [
		{text: "1", value: 1},
		{text: "2", value: 2},
		{text: "3", value: 3},
		{text: "4", value: 4}
	];

	$scope.probsolvMotivation = [
		{text: "1", value: 1},
		{text: "2", value: 2},
		{text: "3", value: 3},
		{text: "4", value: 4}
	];


	$scope.computerSkills = [
		{text: "1", value: 1},
		{text: "2", value: 2},
		{text: "3", value: 3},
		{text: "4", value: 4}
	];

	$scope.computerMotivation = [
		{text: "1", value: 1},
		{text: "2", value: 2},
		{text: "3", value: 3},
		{text: "4", value: 4}
	];


	//
	$scope.qaTotals = [];

	//the object which contains most of the important chunks of data in the app
	$scope.data = { 

		compspeedSVal: 0, 
		compspeedMVal: 0,
		compspeedTotal: function(s, m){
			//alert('inside comTotal function()');
			t = {
				h: $scope.qaQuestions.compspeedHead,
				b: $scope.qaQuestions.compspeedBody,
				sum: s+m
			};

			$scope.qaTotals.push(t);
		},
		numcrunchSVal: 0, 
		numcrunchMVal: 0,
		numcrunchTotal: function(s, m){
			//alert('inside comTotal function()');
			t = {
				h: $scope.qaQuestions.numcrunchHead,
				b: $scope.qaQuestions.numcrunchBody,
				sum: s+m
			};

			$scope.qaTotals.push(t);
		},
		probsolvSVal: 0, 
		probsolvMVal: 0,
		probsolvTotal: function(s, m){
			
			t = {
				h: $scope.qaQuestions.probsolvHead,
				b: $scope.qaQuestions.probsolvBody,
				sum: s+m
			};

			$scope.qaTotals.push(t);
		},
		computerSVal: 0, 
		computerMVal: 0,
		computerTotal: function(s, m){
			
			t = {
				h: $scope.qaQuestions.computerHead,
				b: $scope.qaQuestions.computerBody,
				sum: s+m
			};

			$scope.qaTotals.push(t);
		},
	};


	$scope.commitVals = function(){
		//call the total function for each set of questions and add them to
		//the total for the communication section which is done individually within each function
		
		$scope.data.compspeedTotal($scope.data.compspeedSVal, $scope.data.compspeedMVal);
		$scope.data.numcrunchTotal($scope.data.numcrunchSVal, $scope.data.numcrunchMVal);
		$scope.data.probsolvTotal($scope.data.probsolvSVal, $scope.data.probsolvMVal);
		$scope.data.computerTotal($scope.data.computerSVal, $scope.data.computerMVal);

		//Loop through the Totals array which now contains the questions and summed values
		//for each question and send them to the scraper service using a service function 
		//called addTotal
		$scope.qaTotals.forEach( function(arrayItem){
			
			scraper.addTotal(arrayItem);
			//alert('Array values added to scraper');

		});
	};

}]);


//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


//			Analytics Controller
//			Analytics Controller
//			Analytics Controller


//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

app.controller('analyticsCtrl', ['$scope', 'scraper', function($scope, scraper){
	

	$scope.analyticsQuestions = {
		scienceHead: "Scientific Curiosity: ",
		scienceBody: "  Significant interest in scientific phenomena. Motivated to explore, research, pursue and develop new technologies and innovations.",
		researchHead: "Research: ",
		researchBody: "  Able to gather information, in a systematic way, for a particular field of knowledge, verifying facts or principles.",
		techworkHead: "Technical Work: ",
		techworkBody: "  Able to understand and use engineering, or industrial principles, tools and equipment to improve processes, services or products.",		
	};


	//collection of scope arrays of objects for each set of radio buttons
	$scope.scienceSkills = [
		{text: "1", value: 1},
		{text: "2", value: 2},
		{text: "3", value: 3},
		{text: "4", value: 4}
	];

	$scope.scienceMotivation = [
		{text: "1", value: 1},
		{text: "2", value: 2},
		{text: "3", value: 3},
		{text: "4", value: 4}
	];


	$scope.researchSkills = [
		{text: "1", value: 1},
		{text: "2", value: 2},
		{text: "3", value: 3},
		{text: "4", value: 4}
	];

	$scope.researchMotivation = [
		{text: "1", value: 1},
		{text: "2", value: 2},
		{text: "3", value: 3},
		{text: "4", value: 4}
	];


	$scope.techworkSkills = [
		{text: "1", value: 1},
		{text: "2", value: 2},
		{text: "3", value: 3},
		{text: "4", value: 4}
	];

	$scope.techworkMotivation = [
		{text: "1", value: 1},
		{text: "2", value: 2},
		{text: "3", value: 3},
		{text: "4", value: 4}
	];


	$scope.analyticsTotals = [];


	//the object which contains most of the important chunks of data in the app
	$scope.data = { 

		scienceSVal: 0, 
		scienceMVal: 0,
		scienceTotal: function(s, m){
			//alert('inside comTotal function()');
			t = {
				h: $scope.analyticsQuestions.scienceHead,
				b: $scope.analyticsQuestions.scienceBody,
				sum: s+m
			};

			$scope.analyticsTotals.push(t);
		},
		researchSVal: 0, 
		researchMVal: 0,
		researchTotal: function(s, m){
			//alert('inside comTotal function()');
			t = {
				h: $scope.analyticsQuestions.researchHead,
				b: $scope.analyticsQuestions.researchBody,
				sum: s+m
			};

			$scope.analyticsTotals.push(t);
		},
		techworkSVal: 0, 
		techworkMVal: 0,
		techworkTotal: function(s, m){
			//alert('inside comTotal function()');
			t = {
				h: $scope.analyticsQuestions.techworkHead,
				b: $scope.analyticsQuestions.techworkBody,
				sum: s+m
			};

			$scope.analyticsTotals.push(t);
		}
	};


	$scope.commitVals = function(){
		//call the total function for each set of questions and add them to
		//the total for the communication section which is done individually within each function
		
		$scope.data.scienceTotal($scope.data.scienceSVal, $scope.data.scienceMVal);
		$scope.data.researchTotal($scope.data.researchSVal, $scope.data.researchMVal);
		$scope.data.techworkTotal($scope.data.techworkSVal, $scope.data.techworkMVal);

		//Loop through the Totals array which now contains the questions and summed values
		//for each question and send them to the scraper service using a service function 
		//called addTotal
		$scope.analyticsTotals.forEach( function(arrayItem){
			
			scraper.addTotal(arrayItem);
			//alert('Array values added to scraper');

		});
	};


}]);





//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


//			Technical Reasoning Controller
//			Technical Reasoning Controller
//			Technical Reasoning Controller


//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

app.controller('techReasonCtrl', ['$scope', 'scraper', function($scope, scraper){
	

	$scope.techReasonQuestions = {
		mechanicalHead: "Mechanical Reasoning: ",
		mechanicalBody: " Mechanical Reasoning: Able to understand the ways that hardware, machinery or tools operate and the relationships between mechanical operations.",
		spatialHead: "Spatial Reasoning: ",
		spatialBody: " Possess excellent spatial reasoning, able to judge the relationship of objects in space. Able to judge shapes and sizes of objects and manipulate them digitally or mentally and analyze the effects.",
		outdoorHead: "Outdoor Work: ",
		outdoorBody: " Enjoy working outdoors on construction, environmental or landscape projects, to manage operations or to gather technical information or environmental data.",
		tspbHead: "Troubleshooting and Problem Solving: ",
		tspbBody: " Skilled with analyzing mechanical, electrical, software or hardware problems and coming up with effective solutions."
	};

	//collection of scope arrays of objects for each set of radio buttons
	$scope.mechanicalSkills = [
		{text: "1", value: 1},
		{text: "2", value: 2},
		{text: "3", value: 3},
		{text: "4", value: 4}
	];

	$scope.mechanicalMotivation = [
		{text: "1", value: 1},
		{text: "2", value: 2},
		{text: "3", value: 3},
		{text: "4", value: 4}
	];


	$scope.spatialSkills = [
		{text: "1", value: 1},
		{text: "2", value: 2},
		{text: "3", value: 3},
		{text: "4", value: 4}
	];

	$scope.spatialMotivation = [
		{text: "1", value: 1},
		{text: "2", value: 2},
		{text: "3", value: 3},
		{text: "4", value: 4}
	];


	$scope.outdoorSkills = [
		{text: "1", value: 1},
		{text: "2", value: 2},
		{text: "3", value: 3},
		{text: "4", value: 4}
	];

	$scope.outdoorMotivation = [
		{text: "1", value: 1},
		{text: "2", value: 2},
		{text: "3", value: 3},
		{text: "4", value: 4}
	];


	$scope.tspbSkills = [
		{text: "1", value: 1},
		{text: "2", value: 2},
		{text: "3", value: 3},
		{text: "4", value: 4}
	];

	$scope.tspbMotivation = [
		{text: "1", value: 1},
		{text: "2", value: 2},
		{text: "3", value: 3},
		{text: "4", value: 4}
	];


	//
	$scope.techReasonTotals = [];

	//the object which contains most of the important chunks of data in the app
	$scope.data = { 

		mechanicalSVal: 0, 
		mechanicalMVal: 0,
		mechanicalTotal: function(s, m){
			//alert('inside comTotal function()');
			t = {
				h: $scope.techReasonQuestions.mechanicalHead,
				b: $scope.techReasonQuestions.mechanicalBody,
				sum: s+m
			};

			$scope.techReasonTotals.push(t);
		},
		spatialSVal: 0, 
		spatialMVal: 0,
		spatialTotal: function(s, m){
			//alert('inside comTotal function()');
			t = {
				h: $scope.techReasonQuestions.spatialHead,
				b: $scope.techReasonQuestions.spatialBody,
				sum: s+m
			};

			$scope.techReasonTotals.push(t);
		},
		outdoorSVal: 0, 
		outdoorMVal: 0,
		outdoorTotal: function(s, m){
			//alert('inside comTotal function()');
			t = {
				h: $scope.techReasonQuestions.outdoorHead,
				b: $scope.techReasonQuestions.outdoorBody,
				sum: s+m
			};

			$scope.techReasonTotals.push(t);
		},
		tspbSVal: 0, 
		tspbMVal: 0,
		tspbTotal: function(s, m){
			//alert('inside comTotal function()');
			t = {
				h: $scope.techReasonQuestions.tspbHead,
				b: $scope.techReasonQuestions.tspbBody,
				sum: s+m
			};

			$scope.techReasonTotals.push(t);
		},
	};


	$scope.commitVals = function(){
		//call the total function for each set of questions and add them to
		//the total for the communication section which is done individually within each function
		
		$scope.data.mechanicalTotal($scope.data.mechanicalSVal, $scope.data.mechanicalMVal);
		$scope.data.spatialTotal($scope.data.spatialSVal, $scope.data.spatialMVal);
		$scope.data.outdoorTotal($scope.data.outdoorSVal, $scope.data.outdoorMVal);
		$scope.data.tspbTotal($scope.data.tspbSVal, $scope.data.tspbMVal);

		//Loop through the Totals array which now contains the questions and summed values
		//for each question and send them to the scraper service using a service function 
		//called addTotal
		$scope.techReasonTotals.forEach( function(arrayItem){
			
			scraper.addTotal(arrayItem);
			//alert('Array values added to scraper');

		});
	};

}]);




//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


//			Innovation Controller
//			Innovation Controller
//			Innovation Controller


//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

app.controller('innovationCtrl', ['$scope', 'scraper', function($scope, scraper){
	

	$scope.innovationQuestions = {
		artHead: "Artistic: ",
		artBody: " Possess excellent artistic abilities. Able to create drawings, paintings or stories using imagination. Able to use color and shapes to create visually pleasing images in one or many forms including computer images or in more traditional media. Able to create new ideas and forms with various physical objects.",
		creativeHead: "Creative or Imaginative with Ideas: ",
		creativeBody: " Using imagination, able to create new ideas, projects, or programs. Able to conceive existing elements in new ways.",
	}; 

	//collection of scope arrays of objects for each set of radio buttons
	$scope.artSkills = [
		{text: "1", value: 1},
		{text: "2", value: 2},
		{text: "3", value: 3},
		{text: "4", value: 4}
	];

	$scope.artMotivation = [
		{text: "1", value: 1},
		{text: "2", value: 2},
		{text: "3", value: 3},
		{text: "4", value: 4}
	];


	$scope.creativeSkills = [
		{text: "1", value: 1},
		{text: "2", value: 2},
		{text: "3", value: 3},
		{text: "4", value: 4}
	];

	$scope.creativeMotivation = [
		{text: "1", value: 1},
		{text: "2", value: 2},
		{text: "3", value: 3},
		{text: "4", value: 4}
	];

	//
	$scope.innovationTotals = [];

	//the object which contains most of the important chunks of data in the app
	$scope.data = { 
		artSVal: 0, 
		artMVal: 0,
		artTotal: function(s, m){
			//alert('inside comTotal function()');
			t = {
				h: $scope.innovationQuestions.artHead,
				b: $scope.innovationQuestions.artBody,
				sum: s+m
			};

			$scope.innovationTotals.push(t);
		},

		creativeSVal: 0, 
		creativeMVal: 0,
		creativeTotal: function(s, m){
			//alert('inside comTotal function()');
			t = {
				h: $scope.innovationQuestions.creativeHead,
				b: $scope.innovationQuestions.creativeBody,
				sum: s+m
			};

			$scope.innovationTotals.push(t);
		},
	};


	$scope.commitVals = function(){
		//call the total function for each set of questions and add them to
		//the total for the communication section which is done individually within each function
		
		$scope.data.artTotal($scope.data.artSVal, $scope.data.artMVal);
		$scope.data.creativeTotal($scope.data.creativeSVal, $scope.data.creativeMVal);

		//Loop through the Totals array which now contains the questions and summed values
		//for each question and send them to the scraper service using a service function 
		//called addTotal
		$scope.innovationTotals.forEach( function(arrayItem){
			
			scraper.addTotal(arrayItem);
			//alert('Array values added to scraper');

		});
	};

}]);




//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


//			Teaching Controller
//			Teaching Controller
//			Teaching Controller


//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

app.controller('teachingCtrl', ['$scope', 'scraper', function($scope, scraper){
	

	$scope.teachingQuestions = {
		teachingHead: "Teaching: ",
		teachingBody: " Able to explain complex ideas, concepts, or principles in an easily understandable fashion. Able to provide knowledge or insight to individuals or groups.",
		coachingHead: "Coaching: ",
		coachingBody: " Able to assist an individual on improving his or her performance in a specific subject or skill area.",
		counselingHead: "Counseling: ",
		counselingBody: " Able to listen and sort out details and information and give advice or counsel, while engaging in a helping/supportive relationship with an individual who is experiencing distress.",
	}; 

	//collection of scope arrays of objects for each set of radio buttons
	$scope.teachingSkills = [
		{text: "1", value: 1},
		{text: "2", value: 2},
		{text: "3", value: 3},
		{text: "4", value: 4}
	];

	$scope.teachingMotivation = [
		{text: "1", value: 1},
		{text: "2", value: 2},
		{text: "3", value: 3},
		{text: "4", value: 4}
	];


	$scope.coachingSkills = [
		{text: "1", value: 1},
		{text: "2", value: 2},
		{text: "3", value: 3},
		{text: "4", value: 4}
	];

	$scope.coachingMotivation = [
		{text: "1", value: 1},
		{text: "2", value: 2},
		{text: "3", value: 3},
		{text: "4", value: 4}
	];


	$scope.counselingSkills = [
		{text: "1", value: 1},
		{text: "2", value: 2},
		{text: "3", value: 3},
		{text: "4", value: 4}
	];

	$scope.counselingMotivation = [
		{text: "1", value: 1},
		{text: "2", value: 2},
		{text: "3", value: 3},
		{text: "4", value: 4}
	];

	//
	$scope.teachingTotals = [];

	//the object which contains most of the important chunks of data in the app
	$scope.data = { 
		teachingSVal: 0, 
		teachingMVal: 0,
		teachingTotal: function(s, m){
			//alert('inside comTotal function()');
			t = {
				h: $scope.teachingQuestions.teachingHead,
				b: $scope.teachingQuestions.teachingBody,
				sum: s+m
			};

			$scope.teachingTotals.push(t);
		},
		coachingSVal: 0, 
		coachingMVal: 0,
		coachingTotal: function(s, m){
			//alert('inside comTotal function()');
			t = {
				h: $scope.teachingQuestions.coachingHead,
				b: $scope.teachingQuestions.coachingBody,
				sum: s+m
			};

			$scope.teachingTotals.push(t);
		},
		counselingSVal: 0, 
		counselingMVal: 0,
		counselingTotal: function(s, m){
			//alert('inside comTotal function()');
			t = {
				h: $scope.teachingQuestions.counselingHead,
				b: $scope.teachingQuestions.counselingBody,
				sum: s+m
			};

			$scope.teachingTotals.push(t);
		},
	};


	$scope.commitVals = function(){
		//call the total function for each set of questions and add them to
		//the total for the communication section which is done individually within each function
		
		$scope.data.teachingTotal($scope.data.teachingSVal, $scope.data.teachingMVal);
		$scope.data.coachingTotal($scope.data.coachingSVal, $scope.data.coachingMVal);
		$scope.data.counselingTotal($scope.data.counselingSVal, $scope.data.counselingMVal);


		//Loop through the Totals array which now contains the questions and summed values
		//for each question and send them to the scraper service using a service function 
		//called addTotal
		$scope.teachingTotals.forEach( function(arrayItem){
			
			scraper.addTotal(arrayItem);
			//alert('Array values added to scraper');

		});
	};

}]);


//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


//			Leadership Controller
//			Leadership Controller
//			Leadership Controller


//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

app.controller('leadershipCtrl', ['$scope', 'scraper', function($scope, scraper){
	

	$scope.leadershipQuestions = {
		mgmtHead: "Management and Supervision: ",
		mgmtBody: " Management and Supervision: Skilled at effectively overseeing, managing or directing the work of others. Able to motivate individuals to perform at their peak level. Able to lead teams, and manage resources effectively. Skilled at managing projects, establishing time lines, meeting deadlines, and delivering high quality products and services. Able to maintain a positive working environment, empowering employees to produce a high quality product or service. Comfortable working with individuals at all levels of authority.",
		planningHead: "Planning: ",
		planningBody: " Able to plan and develop a program, project or set of ideas through organized and systematic preparation and arrangement of tasks, activities and schedules. Able to coordinate people and resources to put a plan into effect and meet specific deadlines.",
		organizationHead: "Organization: ",
		organizationBody: " Arranging people, data or objects in a systematic fashion to allow for the effective use of time and resources. Organizing information to allow for easy access.",
		detailmgmtHead: "Detail Management: ",
		detailmgmtBody: " Able to work with a great variety and/or volume of information without losing track of any items in the total situation. Comfortable managing small detail oriented tasks that are part of the larger project.",
		decisionHead: "Decision Making: ",
		decisionBody: " Comfortable making judgments or reaching conclusions about matters which require specific action. Able to accept the responsibility for and the consequences of such actions.",
	}; 

	//collection of scope arrays of objects for each set of radio buttons
	$scope.mgmtSkills = [
		{text: "1", value: 1},
		{text: "2", value: 2},
		{text: "3", value: 3},
		{text: "4", value: 4}
	];

	$scope.mgmtMotivation = [
		{text: "1", value: 1},
		{text: "2", value: 2},
		{text: "3", value: 3},
		{text: "4", value: 4}
	];


	$scope.planningSkills = [
		{text: "1", value: 1},
		{text: "2", value: 2},
		{text: "3", value: 3},
		{text: "4", value: 4}
	];

	$scope.planningMotivation = [
		{text: "1", value: 1},
		{text: "2", value: 2},
		{text: "3", value: 3},
		{text: "4", value: 4}
	];


	$scope.organizationSkills = [
		{text: "1", value: 1},
		{text: "2", value: 2},
		{text: "3", value: 3},
		{text: "4", value: 4}
	];

	$scope.organizationMotivation = [
		{text: "1", value: 1},
		{text: "2", value: 2},
		{text: "3", value: 3},
		{text: "4", value: 4}
	];


	$scope.detailmgmtSkills = [
		{text: "1", value: 1},
		{text: "2", value: 2},
		{text: "3", value: 3},
		{text: "4", value: 4}
	];

	$scope.detailmgmtMotivation = [
		{text: "1", value: 1},
		{text: "2", value: 2},
		{text: "3", value: 3},
		{text: "4", value: 4}
	];


	$scope.decisionSkills = [
		{text: "1", value: 1},
		{text: "2", value: 2},
		{text: "3", value: 3},
		{text: "4", value: 4}
	];

	$scope.decisionMotivation = [
		{text: "1", value: 1},
		{text: "2", value: 2},
		{text: "3", value: 3},
		{text: "4", value: 4}
	];



	//
	$scope.leadershipTotals = [];

	//the object which contains most of the important chunks of data in the app
	$scope.data = { 
		mgmtSVal: 0, 
		mgmtMVal: 0,
		mgmtTotal: function(s, m){
			//alert('inside comTotal function()');
			t = {
				h: $scope.leadershipQuestions.mgmtHead,
				b: $scope.leadershipQuestions.mgmtBody,
				sum: s+m
			};

			$scope.leadershipTotals.push(t);
		},
		planningSVal: 0, 
		planningMVal: 0,
		planningTotal: function(s, m){
			//alert('inside comTotal function()');
			t = {
				h: $scope.leadershipQuestions.planningHead,
				b: $scope.leadershipQuestions.planningBody,
				sum: s+m
			};

			$scope.leadershipTotals.push(t);
		},
		organizationSVal: 0, 
		organizationMVal: 0,
		organizationTotal: function(s, m){
			//alert('inside comTotal function()');
			t = {
				h: $scope.leadershipQuestions.organizationHead,
				b: $scope.leadershipQuestions.organizationBody,
				sum: s+m
			};

			$scope.leadershipTotals.push(t);
		},
		detailmgmtSVal: 0, 
		detailmgmtMVal: 0,
		detailmgmtTotal: function(s, m){
			//alert('inside comTotal function()');
			t = {
				h: $scope.leadershipQuestions.detailmgmtHead,
				b: $scope.leadershipQuestions.detailmgmtBody,
				sum: s+m
			};

			$scope.leadershipTotals.push(t);
		},
		decisionSVal: 0, 
		decisionMVal: 0,
		decisionTotal: function(s, m){
			//alert('inside comTotal function()');
			t = {
				h: $scope.leadershipQuestions.decisionHead,
				b: $scope.leadershipQuestions.decisionBody,
				sum: s+m
			};

			$scope.leadershipTotals.push(t);
		},
	};


	$scope.commitVals = function(){
		//call the total function for each set of questions and add them to
		//the total for the communication section which is done individually within each function
		
		$scope.data.mgmtTotal($scope.data.mgmtSVal, $scope.data.mgmtMVal);
		$scope.data.planningTotal($scope.data.planningSVal, $scope.data.planningMVal);
		$scope.data.organizationTotal($scope.data.organizationSVal, $scope.data.organizationMVal);
		$scope.data.detailmgmtTotal($scope.data.detailmgmtSVal, $scope.data.detailmgmtMVal);
		$scope.data.decisionTotal($scope.data.decisionSVal, $scope.data.decisionMVal);

		//Loop through the Totals array which now contains the questions and summed values
		//for each question and send them to the scraper service using a service function 
		//called addTotal
		$scope.leadershipTotals.forEach( function(arrayItem){
			
			scraper.addTotal(arrayItem);
			//alert('Array values added to scraper');

		});
	};

}]);