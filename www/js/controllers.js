angular.module('starter.controllers', [])
.factory('MainService', function() {
  return {
	  userID : "",
	  userEmail:"",
	  userName : "",
	  userLastName : "",
	  userAdmin : "",	  
	  userPhone : ""
  };
})

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $state, $ionicHistory, $ionicPopover, $http, $ionicPopup, MainService, $ionicLoading) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  //Template for going to login screen 
  $scope.loginPage = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
		$ionicHistory.goBack();  
    }, 1000);
  };
  
  // Template for login logic
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
		$state.go('app.browse');	  
    }, 1000);
  };

  $scope.test = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
		$state.go('app.test');	  
    }, 1000);
  };
  
  


  // Create the register modal that we will use later
  $ionicModal.fromTemplateUrl('templates/register.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modalRegister = modal;
  });

  // Triggered in the register modal to close it
  $scope.closeRegister = function() {
    $scope.modalRegister.hide();
  };

  // Open the register modal
  $scope.register = function() {
    $scope.modalRegister.show();
  };
  
  // Create the Forgot modal that we will use later
  $ionicModal.fromTemplateUrl('templates/forgot.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modalForgot = modal;
  });

  // Triggered in the Forgot modal to close it
  $scope.closeForgot = function() {
    $scope.modalForgot.hide();
  };

  // Open the Forgot modal
  $scope.openForgot = function() {
    $scope.modalForgot.show();
  };
  
  // Create the ForgotZwei modal that we will use later
  $ionicModal.fromTemplateUrl('templates/forgotZwei.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modalForgotZwei = modal;
  });

  // Triggered in the ForgotZwei modal to close it
  $scope.closeForgotZwei = function() {
    $scope.modalForgotZwei.hide();
  };

  // Open the ForgotZwei modal
  $scope.openForgotZwei = function() {
    $scope.modalForgotZwei.show();
  };  

  $scope.forgotData = {};	   

  // //Item Registered 
  // // Form data for the itemGeneral modal
  // $scope.itemGeneralData = {};

  // // Create the itemGeneral modal that we will use later
  // $ionicModal.fromTemplateUrl('templates/itemGeneral.html', {
    // scope: $scope
  // }).then(function(modal) {
    // $scope.modalItemGeneral = modal;
  // });

  // // Triggered in the itemGeneral modal to close it
  // $scope.closeItemGeneral = function() {
    // $scope.modalItemGeneral.hide();
  // };

  // // Open the itemGeneral modal
  // $scope.itemGeneral = function() {
    // $scope.modalItemGeneral.show();
  // };  
  
  $scope.logout = function(){ 
	MainService.userID = null;
	MainService.userName = null;
	MainService.userLastName = null;
	MainService.userPhone = null;
	MainService.userAdmin = null;	
	MainService.userEmail = null;
    // $state.go('login');	  
  }
  
  function emptyCredentials()
  {
	MainService.userID = null;
	MainService.userName = null;
	MainService.userLastName = null;
	MainService.userPhone = null;
	MainService.userAdmin = null;	
	MainService.userEmail = null;	
  }

  
   $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
  

  
  // $scope.ownList = [];
  // $scope.adminList = [];  
 
  var domain = "http://localhost/LostAndFoundIonicLO/";
 
  // Form data for the register modal
  $scope.registerData = {firstname : "", surname : "", phone : "", email : "", password: ""};	 
  
  function checkEmpty(a)
  {
	for (var key in a) {
		console.log(a[key]);
		if (a[key].trim() == "")
		{
			console.log("Empty");
			return true;
		}
	}
	console.log("Not Empty");
	return false;
  }
  
  function checkPassword(a)
  {
	  if (a.length >= 6)
	  {
		  return true;
	  }
	  else 
	  {
		  return false;
	  }
  }
  
  function isValidNumber(a)
  {
	  if (a.length == 11 )
	  return /^\d+$/.test(a);
	  else 
	  {
		  return false;
	  }
  }

  function isValidEdu(a)
  {
	  if (a.includes("@ust.edu.ph"))
	  {
		var splice = a.split("@");
		if (splice[0].length == 10)
		{
			return /^\d+$/.test(splice[0]);			
		}
		else 
		{
			return false;
		}

	  }
	  else 
	  {
		  return false;
	  }
	  
  }
  
	  $scope.showLoading = function() {
		$ionicLoading.show({
		  template: '<p>Loading...</p><ion-spinner></ion-spinner>'
		});
	  };

	  $scope.hideLoading = function(){
			$ionicLoading.hide();
	  };
    
	//Modal Cleanup
    $scope.$on('$destroy', function() {
		if ($scope.modalForgot != null)
		{
			$scope.modalForgot.remove();				
		}
		if ($scope.modalForgotZwei != null)
		{
			$scope.modalForgotZwei.remove();				
		}		

	  });	
	
	$scope.retrieveAccount = function () {
		
	   var confirmPopup = $ionicPopup.confirm({
		 title: 'Confirming Account',
		 scope: $scope,
		 template: 'Are you sure with your specified email?'
	   });

	   confirmPopup.then(function(res) {
		 if(res) {
			$scope.showLoading($ionicLoading);		
			$http({
			method: "post",
			url: domain + '/forgotAccount.php',
			headers :{'Content-Type':'application/x-www-form-urlencoded'},
			//Remove the quotation marks, when you're ready to implement properly
			data: {
					email: $scope.forgotData.email,			
			}
			}).then(function success(response) {
				console.log(JSON.stringify(response));
				$scope.hideLoading($ionicLoading);		
				if (response.data == "Success, please check your email for the secret key to be used to set your password again.")
				{
						var alertPopup = $ionicPopup.alert({
						title: 'Status',
						template: response.data
						});		
						alertPopup.then(function(res) {
							$scope.closeForgot();
							$scope.openForgotZwei();
					});						
				}
				else if (response.data == "Step-Zero")
				{
						var alertPopup = $ionicPopup.alert({
						title: 'Status',
						template: "That email is not in use."
						});						
				}
				else 
				{
						var alertPopup = $ionicPopup.alert({
						title: 'Status',
						template: "Retrieval error, please check your fields if they are correct."
						});							
				}




			}, function error(response) {
				$scope.hideLoading($ionicLoading);
				console.log(JSON.stringify(response));
			//Second function handles error
				var alertPopup = $ionicPopup.alert({
				title: 'Status',
				template: "Error, please check your internet connection or try again later."
				});
			});							
			
		 } else {

		 }
	   });	
						 
	};
	
	$scope.retrieveAccountZwei = function () {
		
       if ($scope.forgotData.email != null && $scope.forgotData.passCode != null &&  $scope.forgotData.password != null)
	   {
			if ($scope.forgotData.password == $scope.forgotData.passwordRepeat)
			{
				if (checkPassword ($scope.forgotData.password))
				{
						if (isValidEdu($scope.forgotData.email))
						{
							var confirmPopup = $ionicPopup.confirm({
								 title: 'Confirming Account',
								 scope: $scope,
								 template: 'Are you sure with your specified email?'
							   });

							   confirmPopup.then(function(res) {
								 if(res) {
									$scope.showLoading($ionicLoading);		
									$http({
									method: "post",
									url: domain + '/forgotVerifyAccount.php',
									headers :{'Content-Type':'application/x-www-form-urlencoded'},
									//Remove the quotation marks, when you're ready to implement properly
									data: {
											email: $scope.forgotData.email,		
											passcode: $scope.forgotData.passCode, 
											password : $scope.forgotData.password
									}
									}).then(function success(response) {
										
										$scope.hideLoading($ionicLoading);
										console.log(JSON.stringify(response));
										if (response.data.result != null)
										{
											console.log(JSON.stringify(response));
											
											if (response.data.result[0].response == "yes" )
											{							
										
												var alertPopup = $ionicPopup.alert({
												title: 'Password change success',
												template: "Your password has been changed, you may now login using the new password."
												});	
												alertPopup.then(function(res) {
												$scope.closeForgotZwei();
											});							
											
											}
											else 
											{
												var alertPopup = $ionicPopup.alert({
												title: 'Password change failed',
												template: "Please check your credentials and try again."
												});						
											}
											
												
															
										}
										else 
										{
											var alertPopup = $ionicPopup.alert({
											title: 'Login failed',
											template: "Please check your credentials."
											});					
										}


									}, function error(response) {
										$scope.hideLoading($ionicLoading);
										console.log(JSON.stringify(response));
									//Second function handles error
										var alertPopup = $ionicPopup.alert({
										title: 'Status',
										template: "Error, please check your internet connection or try again later."
										});
									});							
									
								 } else {

								 }
							   });									
						}
						else 
						{
							var alertPopup = $ionicPopup.alert({
							title: 'Status',
							template: "Registration error, your email must be a valid ust.edu.ph account."
							});
						}
					

				}
				else 
				{
					var alertPopup = $ionicPopup.alert({
					title: 'Status',
					template: "Registration error, your password must be atleast 6 characters."
					});						
				}
			}
			else {
					var alertPopup = $ionicPopup.alert({
					title: 'Status',
					template: "Registration error, your passwords do not match."
					});		
			}
							   
	   }
	   else 
	   {
		var alertPopup = $ionicPopup.alert({
			title: 'Password change failed',
			template: "Please fill out all fields for your credentials."
			});				   
	   }				 
	};
	
	
	$scope.registerAccount = function () {
		if (checkEmpty($scope.registerData) == false)
		{
			if ($scope.registerData.password == $scope.registerData.passwordRepeat)
			{
				if (checkPassword ($scope.registerData.password))
				{
					if (isValidNumber($scope.registerData.phone))
					{
						if (isValidEdu($scope.registerData.email))
						{
							
						   var confirmPopup = $ionicPopup.confirm({
							 title: 'Confirming Account',
							 scope: $scope,
							 template: 'Are you sure with your credentials?'
						   });

						   confirmPopup.then(function(res) {
							 if(res) {
								$scope.showLoading($ionicLoading);		
								$http({
								method: "post",
								url: domain + '/registerAccount.php',
								headers :{'Content-Type':'application/x-www-form-urlencoded'},
								//Remove the quotation marks, when you're ready to implement properly
								data: {
										firstname: $scope.registerData.firstname,
										surname: $scope.registerData.surname,
										phone: $scope.registerData.phone,
										email: $scope.registerData.email,
										password: $scope.registerData.password			
								}
								}).then(function success(response) {
									console.log(JSON.stringify(response));
									$scope.hideLoading($ionicLoading);		
									if (response.data == "Success, please check your email for the verification code.")
									{
											var alertPopup = $ionicPopup.alert({
											title: 'Status',
											template: response.data
											});		
											alertPopup.then(function(res) {
											$scope.closeRegister();
										});						
									}
									else if (response.data == "Zero-One")
									{
											var alertPopup = $ionicPopup.alert({
											title: 'Status',
											template: "Account using that student number already exists."
											});						
									}
									else 
									{
											var alertPopup = $ionicPopup.alert({
											title: 'Status',
											template: "Registration error, please check your fields if they are correct."
											});							
									}




								}, function error(response) {
									$scope.hideLoading($ionicLoading);
									console.log(JSON.stringify(response));
								//Second function handles error
									var alertPopup = $ionicPopup.alert({
									title: 'Status',
									template: "Error, please check your internet connection or try again later."
									});
								});							
								
							 } else {

							 }
						   });	
							
						}
						else 
						{
							var alertPopup = $ionicPopup.alert({
							title: 'Status',
							template: "Registration error, your email must be a valid ust.edu.ph account."
							});
						}
					}
					else 
					{
						var alertPopup = $ionicPopup.alert({
						title: 'Status',
						template: "Registration error, your contact number must be a valid mobile number."
						});	
					}
					
					

				}
				else 
				{
					var alertPopup = $ionicPopup.alert({
					title: 'Status',
					template: "Registration error, your password must be atleast 6 characters."
					});						
				}
			}
			else {
					var alertPopup = $ionicPopup.alert({
					title: 'Status',
					template: "Registration error, your passwords do not match."
					});		
			}

		}
		else 
		{
			var alertPopup = $ionicPopup.alert({
			title: 'Status',
			template: "Registration error, please check your fields if they are not empty and correct."
			});					
		}
	
			
	}  
	
	$scope.loginAccount = function () {
		$scope.showLoading($ionicLoading);
		$http({
			method: "post",
			url: domain + '/loginAccount.php',
			headers :{'Content-Type':'application/x-www-form-urlencoded'},
			//Remove the quotation marks, when you're ready to implement properly
			data: {
					email: $scope.loginData.username,
					password: $scope.loginData.password			
			}
			}).then(function success(response) {
				$scope.hideLoading($ionicLoading);
				console.log(JSON.stringify(response));
				if (response.data.result != null)
				{
					console.log(JSON.stringify(response));
					MainService.userID = response.data.result[0].id;
					MainService.userName = response.data.result[0].name;
					MainService.userLastName = response.data.result[0].lastname;
					MainService.userPhone = response.data.result[0].contact;
					MainService.userAdmin = response.data.result[0].admin;
					MainService.userEmail = response.data.result[0].email;
					
					console.log("ID : " + MainService.userID + 
					"\n Name: " + MainService.userName + " " + MainService.userLastName +  "\n" + "Phone: " + MainService.userPhone + "Are you an admin " + MainService.userAdmin);
					
					if (response.data.result[0].verified == "1" )
					{							
						$timeout(function() {
							$state.go('app.browse');	  
						}, 1000);
					
					}
					else 
					{
						$timeout(function() {
							$state.go('verify');	  
						}, 1000);						
					}
					
						
									
				}
				else 
				{
					var alertPopup = $ionicPopup.alert({
					title: 'Login failed',
					template: "Please check your credentials."
					});					
				}


			}, function error(response) {
				$scope.hideLoading($ionicLoading);	
				console.log(JSON.stringify(response));
			//Second function handles error
				var alertPopup = $ionicPopup.alert({
				title: 'Error',
				template: "Please Check your connection and try again later."
				});
			});		
			
	}  	
 
	$scope.verify = {};
	$scope.verifyAccount = function () {
		$scope.showLoading($ionicLoading);
		$http({
			method: "post",
			url: domain + '/verifyAccount.php',
			headers :{'Content-Type':'application/x-www-form-urlencoded'},
			//Remove the quotation marks, when you're ready to implement properly
			data: {
					id: MainService.userID,	
					verifyCode: $scope.verify.verifyCode
			}
			}).then(function success(response) {
				$scope.hideLoading($ionicLoading);
				console.log(JSON.stringify(response));
				if (response.data.result != null)
				{
					console.log(JSON.stringify(response));
					
					if (response.data.result[0].response == "yes" )
					{							
						$timeout(function() {
							$state.go('app.browse');	  
						}, 1000);
					
					}
					else 
					{
						var alertPopup = $ionicPopup.alert({
						title: 'Verification failed',
						template: "Please check your activation code and try again."
						});						
					}
					
						
									
				}
				else 
				{
					var alertPopup = $ionicPopup.alert({
					title: 'Login failed',
					template: "Please check your credentials."
					});					
				}


			}, function error(response) {
				$scope.hideLoading($ionicLoading);	
				console.log(JSON.stringify(response));
			//Second function handles error
				var alertPopup = $ionicPopup.alert({
				title: 'Error',
				template: "Please check your connection and try again."
				});
			});		
			
	}  	
  
})

.controller('PlaylistsCtrl', function($scope, $ionicModal, $ionicPopup, $http, MainService, $ionicLoading, $state) {
	
  $scope.thread = {};	
  $scope.isAdmin = false;
  $scope.isSuperAdmin = false;
  
  
  $scope.checkAdmin = function() {
	  console.log("Checked Admin " + $scope.isAdmin)
	  if (MainService.userAdmin == "1")
	  {
		  $scope.isAdmin = true;	  
		  if (MainService.userEmail == "9999999999@ust.edu.ph")
		  {
			  $scope.isSuperAdmin = true;
		  }
		  else {
			  $scope.isSuperAdmin = false;
		  }
	  }
	  else 
	  {
		  $scope.isAdmin = false;	  	  
	  }	  
  }

  $scope.checkAdmin();

  $scope.displayName = function(){
	  return he.decode(MainService.userName + " " + MainService.userLastName);
  };
  
  $scope.decode = function(str) 
  {
	  if (str != null)
	  {
		  return he.decode(str);		  
	  }

  };
  
  $scope.goGeneral = function (){
	$scope.showGeneralList();
  };
  
  $scope.goPersonal = function (){
	$scope.showPersonalList();
  };  
  
  $scope.goAdmin = function (){
	  	if ($scope.isAdmin == true)
  		{
			$scope.showAdminList(); 		
  		}
	  	else 
	  	{
	  		
	  	}
  };
	  
  // // Create the register modal that we will use later
  // $ionicModal.fromTemplateUrl('templates/item.html', {
    // scope: $scope
  // }).then(function(modal) {
    // $scope.modalItem = modal;
  // });

  // // Triggered in the register modal to close it
  // $scope.closeItem = function() {
    // $scope.modalItem.hide();
  // };

  // // Open the register modal
  // $scope.showItem = function() {  
    // $scope.modalItem.show();
	// document.getElementById("claimButton").style.display = "none";		
	// document.getElementById("adminButton").style.display = "none";			
  // };

  // Create the register modal that we will use later
  $ionicModal.fromTemplateUrl('templates/itemGeneral.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modalItem = modal;
  });

  // Triggered in the register modal to close it
  $scope.closeItem = function() {
    $scope.modalItem.hide();
  };

  // Open the register modal
  $scope.showItem = function() {  
    $scope.modalItem.show();		
  };
  
  $ionicModal.fromTemplateUrl('templates/itemInfo.html', {
	    scope: $scope
	  }).then(function(modal) {
	    $scope.modalInfo = modal;
	  });

	  // Triggered in the register modal to close it
	  $scope.closeInfo = function() {
	    $scope.modalInfo.hide();
	  };

	  // Open the register modal
	  $scope.showInfo = function() {  
	    $scope.modalInfo.show();		
	  };
  

  
  // Create the register modal that we will use later
  $ionicModal.fromTemplateUrl('templates/itemPersonal.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modalItemPersonal = modal;
  });

  // Triggered in the register modal to close it
  $scope.closeItemPersonal = function() {
    $scope.modalItemPersonal.hide();
  };

  // Open the register modal
  $scope.showItemPersonal = function() {  
    $scope.modalItemPersonal.show();	
  };
  
  // Create the register modal that we will use later
  $ionicModal.fromTemplateUrl('templates/itemAdmin.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modalItemAdmin = modal;
  });

  // Triggered in the register modal to close it
  $scope.closeItemAdmin = function() {
    $scope.modalItemAdmin.hide();
  };

  // Open the register modal
  $scope.showItemAdmin = function() {  
    $scope.modalItemAdmin.show();	
  };
      
  
  function capitalizeWord(word)
  {
	var capital = word.substr(0 , 1);
	var properWord = capital.toUpperCase() + word.substr(1, word.length - 1);
	return properWord;
  }
  
	//Modal Cleanup
    $scope.$on('$destroy', function() {
		if ($scope.modalItem != null)
		{
			$scope.modalItem.remove();				
		}
		if ($scope.modalItemPersonal  != null)
		{
			$scope.modalItemPersonal.remove();				
		}
		if ($scope.modalItemAdmin  != null)
		{
			$scope.modalItemAdmin.remove();				
		}		
		if ($scope.modalInfo  != null)
		{
			$scope.modalInfo.remove();				
		}		
	  });
	    

  function isStringEmpty(string)
  {
	  if (!string || string.length === 0)
	  {
		  return true;
	  }
	  return false;
  }  
  
  $scope.registerItem = function()
  {
	  var descriptionItem = document.getElementById("descForm").value;
	  var placeItem = document.getElementById("placeForm").value;

	  if (isStringEmpty(descriptionItem) || isStringEmpty(placeItem))
	  {
		var alertPopup = $ionicPopup.alert({
		title: 'Submission Status',
		template: "Please make sure none of your fields are empty."
		});	  
	  }
	  else 
	  {
		   var confirmPopup = $ionicPopup.confirm({
			 title: 'Confirming Item',
			 scope: $scope,
			 template: 'Are you sure with the details of your item?'
		   });

		   confirmPopup.then(function(res) {
			 if(res) {
				  var e = document.getElementById("choiceForm");
				  var itemTypeForm = e.options[e.selectedIndex].value;	 
				  var object = { name: MainService.userName, 
				  lastname : MainService.userLastName,  
				  id: MainService.userID , 
				  phone: MainService.userPhone, 
				  desc : descriptionItem, 
				  place: placeItem, 
				  status : capitalizeWord(itemTypeForm)+'/Confirmation Pending', 
				  type : itemTypeForm};  
				  
				  // $scope.adminList.push(object);
				  // $scope.ownList.push(object);	  
				  
				  sendForApproval(object);
				  
					
				  document.getElementById("descForm").value = "";
				  document.getElementById("placeForm").value = "";
				console.log("Place : " + object.place);
				console.log("itemTypeForm : " + itemTypeForm);
			 } 
			 
			 else {

			 }
		   });

	  }
		  
	  console.log("Pressed " + descriptionItem + " " + placeItem + " " +  itemTypeForm);	

  };

  function sendForApproval(item)
  {
		$scope.showLoading();	  
		$http({
			method: "post",
			url: domain + '/insert.php',
			headers :{'Content-Type':'application/x-www-form-urlencoded'},
			//Remove the quotation marks, when you're ready to implement properly
			data: {
					type: item.type,
					name: item.name,
					lastname: item.lastname,
					phone: item.phone,
					desc: item.desc,
					place: item.place,
					id: item.id
			}
			}).then(function success(response) {
		        $scope.hideLoading();		
				console.log(JSON.stringify(response));
				$scope.item = response.data.body;
				
				var alertPopup = $ionicPopup.alert({
				title: 'Submission Status',
				template: "Your Item has been registered."
				});	  	  				
			

			}, function error(response) {
		        $scope.hideLoading();					
				console.log(JSON.stringify(response.data));
				$scope.item = response.data.body;
			//Second function handles error
				var alertPopup = $ionicPopup.alert({
				title: 'Error',
				template: "Please Check your connection and try again later."
				});
			});		
			
	
  }
  
  $scope.postComment = function()
  {
	  console.log("Hey");
	  if ($scope.thread.post != null)
	  {
		   var confirmPopup = $ionicPopup.confirm({
			 title: 'Confirm Post',
			 scope: $scope,
			 template: 'Are you sure you want to post your comment?'
		   });		  
	   
	   confirmPopup.then(function(res) {
		 if(res) {
				console.log ("UserID:" + MainService.userID + "\n Type: " + choiceToggle+ " \n ID: " + $scope.currentId + "\n" + $scope.thread.post);	
				commentSend(choiceToggle);						
		 } 
		 else {

		 }
	   });	
			   
	  
	  }
	  else 
	  {
		//Second function handles error
			var alertPopup = $ionicPopup.alert({
			title: 'Invalid Comment',
			template: "The comment box is empty."
			});		
	  }

  }

	  $scope.showLoading = function() {
		$ionicLoading.show({
		  template: '<p>Loading...</p><ion-spinner></ion-spinner>'
		});
	  };

	  $scope.hideLoading = function(){
			$ionicLoading.hide();
	  };
	  
  function commentSend(itemType)
  {
	  $scope.showLoading();
		$http({
			method: "post",
			url: domain + '/postMessage.php',
			headers :{'Content-Type':'application/x-www-form-urlencoded'},
			//Remove the quotation marks, when you're ready to implement properly
			data: {
					userid: MainService.userID, 
					firstname: MainService.userName,
					lastname: MainService.userLastName,  					
					type: itemType,
					id: $scope.currentId,
					message: $scope.thread.post
			}
			}).then(function success(response) {
				$scope.hideLoading($ionicLoading);
				console.log(JSON.stringify(response));
				$scope.thread.post = "";
				$scope.showComments();		
				var alertPopup = $ionicPopup.alert({
				title: 'Comment Status',
				template: "Your comment has been successfully posted."
				});
				
			}, function error(response) {
				$scope.hideLoading($ionicLoading);	
				console.log(JSON.stringify(response));
			//Second function handles error
				var alertPopup = $ionicPopup.alert({
				title: 'Communications Error',
				template: "Please check your internet connection or try again later"
				});
			});		
			
	}  	  
  
	$scope.showComments = function () {
		$http({
			method: "post",
			url: domain + '/getMessage.php',
			headers :{'Content-Type':'application/x-www-form-urlencoded'},
			//Remove the quotation marks, when you're ready to implement properly
			data: { 
					type: choiceToggle,
					id: $scope.currentId,	
			}
			}).then(function success(response) {
				console.log(JSON.stringify(response.data));
				$scope.comments = response.data.result;

			}, function error(response) {
				// $scope.hideLoading();	
				console.log(JSON.stringify(response));
			//Second function handles error
				var alertPopup = $ionicPopup.alert({
				title: 'Error',
				template: "Please Check your connection and try again later."
				});
			});		
			
	}	  
  
  $scope.claimItem = function()
  {	  
  
   var confirmPopup = $ionicPopup.confirm({
	 title: 'Confirming Item',
	 scope: $scope,
	 template: 'Are you sure you want to mark your item as claimed?'
   });

   confirmPopup.then(function(res) {
	 if(res) {
		updateStatus(choiceToggle, "n");			
	 } else {

	 }
   });

  };  
  
  $scope.approveItem = function()
  {
	  
   var confirmPopup = $ionicPopup.confirm({
	 title: 'Confirming Item',
	 scope: $scope,
	 template: 'Are you sure you want to approve the item for publication?'
   });

   confirmPopup.then(function(res) {
	 if(res) {
		updateStatus("aa" + choiceToggle, "a");	
	 } else {

	 }
   });
   

  };
  
  $scope.rejectItem = function()
  {
   var confirmPopup = $ionicPopup.confirm({
	 title: 'Confirming Item',
	 scope: $scope,
	 template: 'Are you sure you want to reject the item for publication? (This will delete the entry as well)'
   });

   confirmPopup.then(function(res) {
	 if(res) {
		updateStatus("ar" + choiceToggle, "a");		
	 } else {

	 }
   });
   

  };     
  
  $scope.deleteItem = function()
  {
   var confirmPopup = $ionicPopup.confirm({
	 title: 'Confirming Item',
	 scope: $scope,
	 template: 'Are you sure you want to delete the item from the records?'
   });

   confirmPopup.then(function(res) {
	 if(res) {
		updateStatus("ar" + choiceToggle, "n");		
	 } else {

	 }
   });
   

  };       
  
  function updateStatus(itemType, typeU)
  {
		$scope.showLoading();
		$http({
			method: "post",
			url: domain + '/update.php',
			headers :{'Content-Type':'application/x-www-form-urlencoded'},
			//Remove the quotation marks, when you're ready to implement properly
			data: {
					type: itemType,
					id: $scope.currentId 
			}
			}).then(function success(response) {
				$scope.hideLoading();		
				console.log(JSON.stringify(response.data));
				
				var alertPopup = $ionicPopup.alert({
				title: 'Item Status',
				template: "Item Status Updated."
				});	  	  	
				alertPopup.then(function(res) {
				console.log("Pressed");
				if (typeU == "a")
				{
					$scope.showAdminList();		
					$scope.closeItemAdmin();				
				}
				else if (typeU == "n")
				{
					$scope.showPersonalList();
					$scope.closeItemPersonal();
				}
				});	
				
			

			}, function error(response) {
				$scope.hideLoading();		
				console.log(JSON.stringify(response.data));
				$scope.item = response.data.body;
			//Second function handles error
				var alertPopup = $ionicPopup.alert({
				title: 'Error',
				template: "Please Check your connection and try again later."
				});
			});		
			
	
  }  
  

  
  function removeItem(array, id)
  {
	for(var i = 0; i < array.length; i++) {
		if(array[i].id == id) {
			array.splice(i, 1);
			break;
		}
	}	 
  }
  
  function modifyItemStat(array, id)
  {
	for(var i = 0; i < array.length; i++) {
		if(array[i].id == id) {
			array[i].status = array[i].status.replace("Confirmation Pending", "Unclaimed");
			break;
		}
	}	 
  }  
  
    // Form data for the register modal
  $scope.changeData = {};	
  
  $scope.choice = "l";
	$scope.currentType = "Lost/Found";
	$scope.currentId = "Id";
	$scope.currentFirstName = "First";
	$scope.currentLastName = "Last";
	$scope.currentContact = "Contact";
	$scope.currentDescription = "Desc";
	$scope.currentLocation = "Location";
	$scope.currentClaim = "Claim";
	
	$scope.currentItemObject = null;
	
	$scope.setItem = function(item, type){
		console.log("SET");
		var splitWord = (item.status).split("/"); 
		$scope.currentId = item.id; 
		$scope.currentType = splitWord[0];
		$scope.currentFirstName = item.name;
		$scope.currentLastName = item.lastname;
		$scope.currentContact = item.phone;
		$scope.currentDescription = item.desc;
		$scope.currentLocation = item.place;
		$scope.currentClaim = splitWord[1];			
		console.log($scope.currentFirstName + 
		$scope.currentType + $scope.currentLastName +
		$scope.currentContact + $scope.currentDescription +
		$scope.currentLocation + $scope.currentClaim
		);
		$scope.currentItemObject = item;
		setPage(type);
		console.log("Item ID: " + $scope.currentId + " Type: " + choiceToggle);
	};
	
	$scope.setInfoDisplay = function(item){
		$scope.currentInfoFirstName = item.name;
		$scope.currentInfoLastName = item.lastname;
		$scope.currentInfoFirstNameNew = item.namenew;
		$scope.currentInfoLastNameNew = item.lastnamenew;
		$scope.currentInfoID = item.id;
		$scope.currentInfoReason = item.reason;
		$scope.showInfo();
		
	};	
	
	$scope.isMine = function(message)
	{
		if (message.userid == MainService.userID)
		{
			console.log("match");
			return true;
		}
	}
	$scope.deleteMine = function(message)
	{
	   var confirmPopup = $ionicPopup.confirm({
			 title: 'Comment deletion?',
			 scope: $scope,
			 template: 'Are you sure you want to delete your comment?'
		   });

	   confirmPopup.then(function(res) {
		 if(res) {
			deleteMessage(message);			 
		 } else {

		 }
	   });					

	}
	
	function deleteMessage(message)
	{
		console.log(message.id + " " + itemType)
		$scope.showLoading();
		$http({
			method: "post",
			url: domain + '/deleteComment.php',
			headers :{'Content-Type':'application/x-www-form-urlencoded'},
			//Remove the quotation marks, when you're ready to implement properly
			data: {
					type: choiceToggle,
					id: message.id 
			}
			}).then(function success(response) {
				$scope.showComments();		
				$scope.hideLoading();		
				console.log(JSON.stringify(response.data));
				
				var alertPopup = $ionicPopup.alert({
				title: 'Comment Status',
				template: "Comment Deleted."
				});	  	  	
				alertPopup.then(function(res) {
		
				});	
				
			

			}, function error(response) {
				$scope.hideLoading();		
				console.log(JSON.stringify(response.data));
				$scope.item = response.data.body;
			//Second function handles error
				var alertPopup = $ionicPopup.alert({
				title: 'Error',
				template: "Please Check your connection and try again later."
				});
			});				
	}	
	
	$scope.approveInfo = function () {
		
	   var confirmPopup = $ionicPopup.confirm({
			 title: 'Confirming Account Proposal',
			 scope: $scope,
			 template: 'Are you sure with approving the change?'
		   });

		   confirmPopup.then(function(res) {
			 if(res) {
			 	$http({
					method: "post",
					url: domain + '/updateAccountNameB.php',
					headers :{'Content-Type':'application/x-www-form-urlencoded'},
					//Remove the quotation marks, when you're ready to implement properly
					data: {
							type : "a",
							id: $scope.currentInfoID, 
							firstname: $scope.currentInfoFirstNameNew, 
							surname: $scope.currentInfoLastNameNew		
					}
					}).then(function success(response) {
											console.log(JSON.stringify(response));
						if (response.data.result != null)
						{
										
							var alertPopup = $ionicPopup.alert({
							title: 'Account Status',
							template: "Personal Details Changed."
							});	
							alertPopup.then(function(res) {
								$scope.closeInfo();
								$scope.showAdminInfoList();					
							});								
						}
						else 
						{
							var alertPopup = $ionicPopup.alert({
							title: 'Change failed',
							template: "Please check your connection or try again later."
							});					
						}


					}, function error(response) {
						// $scope.hideLoading();	
						console.log(JSON.stringify(response));
					//Second function handles error
						var alertPopup = $ionicPopup.alert({
						title: 'Error',
						template: "Please Check your connection and try again later."
						});
					});		
					
			 } else {

			 }
		   });			
		

	}		
	
	$scope.rejectInfo = function () {
		
	   var confirmPopup = $ionicPopup.confirm({
			 title: 'Confirming Account Proposal',
			 scope: $scope,
			 template: 'Are you sure with rejecting the change?'
		   });

		   confirmPopup.then(function(res) {
			 if(res) {
					$http({
						method: "post",
						url: domain + '/updateAccountNameB.php',
						headers :{'Content-Type':'application/x-www-form-urlencoded'},
						//Remove the quotation marks, when you're ready to implement properly
						data: {
								type : "r",
								id: $scope.currentInfoID, 
								firstname: $scope.currentInfoFirstNameNew, 
								surname: $scope.currentInfoLastNameNew		
						}
						}).then(function success(response) {
												console.log(JSON.stringify(response));
							if (response.data.result != null)
							{
											
								var alertPopup = $ionicPopup.alert({
								title: 'Account Status',
								template: "Changes Rejected."
								});	
								alertPopup.then(function(res) {
									$scope.closeInfo();
									$scope.showAdminInfoList();					
								});								
							}
							else 
							{
								var alertPopup = $ionicPopup.alert({
								title: 'Change failed',
								template: "Please check your connection or try again later."
								});					
							}


						}, function error(response) {
							// $scope.hideLoading();	
							console.log(JSON.stringify(response));
						//Second function handles error
							var alertPopup = $ionicPopup.alert({
							title: 'Error',
							template: "Please Check your connection and try again later."
							});
						});	
			 } else {

			 }
		   });			
		
	
			
	}			
	
	function setPage(type)
	{
		$scope.showComments();		
		if (type == 3) //General List
		{
			console.log("GENERAL");
			$scope.showItem();
			
		}
		else if (type == 1) //Personal List
		{
			console.log("PERSONAL");
			$scope.showItemPersonal();
		}
		else if (type == 2) //Admin List
		{
			console.log("ADMIN");
			$scope.showItemAdmin();	
		}		
	}
	 	
    var domain = "http://localhost/LostAndFoundIonicLO/";

	var choiceToggle = "l";
	
	$scope.showGeneralList = function () {
		// console.log($scope.choice);
		// $scope.showLoading();
		$http({
			method: "post",
			url: domain + '/list.php',
			headers :{'Content-Type':'application/x-www-form-urlencoded'},
			//Remove the quotation marks, when you're ready to implement properly
			data: {
					type: choiceToggle				
			}
			}).then(function success(response) {
				console.log(JSON.stringify(response.data.result));
				$scope.item = response.data.result;
				
			

			}, function error(response) {
				// $scope.hideLoading();	
				console.log(JSON.stringify(response));
			//Second function handles error
				var alertPopup = $ionicPopup.alert({
				title: 'Error',
				template: "Please Check your connection and try again later."
				});
			});		
			
	}
	
	
	$scope.showPersonalList = function () {
		// console.log($scope.choice);
		// $scope.showLoading();
		$http({
			method: "post",
			url: domain + '/listPersonal.php',
			headers :{'Content-Type':'application/x-www-form-urlencoded'},
			//Remove the quotation marks, when you're ready to implement properly
			data: {
					id: MainService.userID,
					type: choiceToggle				
			}
			}).then(function success(response) {
				console.log(JSON.stringify(response.data.result));
				$scope.ownList = response.data.result;
				
			

			}, function error(response) {
				// $scope.hideLoading();	
				console.log(JSON.stringify(response));
			//Second function handles error
				var alertPopup = $ionicPopup.alert({
				title: 'Error',
				template: "Please Check your connection and try again later."
				});
			});		
			
	}	
	
	$scope.showAdminList = function () {
		// console.log($scope.choice);
		// $scope.showLoading();
		$http({
			method: "post",
			url: domain + '/listAdmin.php',
			headers :{'Content-Type':'application/x-www-form-urlencoded'},
			//Remove the quotation marks, when you're ready to implement properly
			data: {
					type: choiceToggle				
			}
			}).then(function success(response) {
				console.log(JSON.stringify(response.data.result));
				$scope.adminList = response.data.result;
				
			

			}, function error(response) {
				// $scope.hideLoading();	
				console.log(JSON.stringify(response));
			//Second function handles error
				var alertPopup = $ionicPopup.alert({
				title: 'Error',
				template: "Please Check your connection and try again later."
				});
			});		
			
	}	
	
	$scope.showAdminInfoList = function () {
		console.log("Admin Info called");
		// $scope.showLoading();
		$http({
			method: "post",
			url: domain + '/listInfoAdmin.php',
			headers :{'Content-Type':'application/x-www-form-urlencoded'},
			//Remove the quotation marks, when you're ready to implement properly
			data: {
					type: choiceToggle				
			}
			}).then(function success(response) {
				console.log(JSON.stringify(response.data));
				$scope.adminInfoList = response.data.result;
				
			

			}, function error(response) {
				// $scope.hideLoading();	
				console.log(JSON.stringify(response));
			//Second function handles error
				var alertPopup = $ionicPopup.alert({
				title: 'Error',
				template: "Please Check your connection and try again later."
				});
			});		
			
	}			
	
	function toggleChoice(){
		if (choiceToggle == "l")
		{
			choiceToggle = "f"
		}
		else if (choiceToggle == "f")
		{
			choiceToggle = "l";
		}
		
	}
	$scope.change = function () {
		toggleChoice();
		$scope.showGeneralList();
			
	}

	$scope.changePersonal = function () {
		toggleChoice();
		$scope.showPersonalList();			
	}	


	$scope.changeAdmin = function () {
		toggleChoice();
		$scope.showAdminList();		
	}	
	
	$scope.accountChange = function () {
		
	   var confirmPopup = $ionicPopup.confirm({
			 title: 'Confirming Contact Number Change',
			 scope: $scope,
			 template: 'Are you sure with approving the change?'
		   });

		   confirmPopup.then(function(res) {
			 if(res) {
					$http({
						method: "post",
						url: domain + '/updateAccount.php',
						headers :{'Content-Type':'application/x-www-form-urlencoded'},
						//Remove the quotation marks, when you're ready to implement properly
						data: {
								
								id: MainService.userID, 
								firstname: MainService.userName, 
								surname: MainService.userLastName,
								phone: $scope.changeData.contact			
						}
						}).then(function success(response) {
												console.log(JSON.stringify(response));
							if (response.data.result != null)
							{
								MainService.userPhone = $scope.changeData.contact;											
								var alertPopup = $ionicPopup.alert({
								title: 'Account Status',
								template: "Contact Details Changed."
								});				
							}
							else 
							{
								var alertPopup = $ionicPopup.alert({
								title: 'Change failed',
								template: "Please check your connection or try again later."
								});					
							}


						}, function error(response) {
							// $scope.hideLoading();	
							console.log(JSON.stringify(response));
						//Second function handles error
							var alertPopup = $ionicPopup.alert({
							title: 'Error',
							template: "Please Check your connection and try again later."
							});
						});		
			 } else {

			 }
		   });			
		

			
	}	
	
	$scope.accountChangeName = function () {
		
	   var confirmPopup = $ionicPopup.confirm({
			 title: 'Confirming Account Proposal',
			 scope: $scope,
			 template: 'Are you sure with sending your proposed credentials?'
		   });

		   confirmPopup.then(function(res) {
			 if(res) {
					if ($scope.changeData.firstname != null && $scope.changeData.surname != null && $scope.changeData.reason != null)
					{
						$http({
							method: "post",
							url: domain + '/updateAccountName.php',
							headers :{'Content-Type':'application/x-www-form-urlencoded'},
							//Remove the quotation marks, when you're ready to implement properly
							data: {
									
									id: MainService.userID, 
									firstname: MainService.userName, 
									surname: MainService.userLastName,
									firstnamenew: $scope.changeData.firstname,
									surnamenew: $scope.changeData.surname,
									reason: $scope.changeData.reason
							}
							}).then(function success(response) {
													console.log(JSON.stringify(response));
								if (response.data.result != null)
								{
												
									var alertPopup = $ionicPopup.alert({
									title: 'Account Status',
									template: "Proposed personal information sent for approval to the admin."
									});				
								}
								else 
								{
									var alertPopup = $ionicPopup.alert({
									title: 'Change failed',
									template: "Please check your connection or try again later."
									});					
								}


							}, function error(response) {
								// $scope.hideLoading();	
								console.log(JSON.stringify(response));
							//Second function handles error
								var alertPopup = $ionicPopup.alert({
								title: 'Change failed',
								template: "Please check your connection or try again later."
								});
							});		
								
					}
					else
					{
						var alertPopup = $ionicPopup.alert({
							title: 'Change failed',
							template: "All fields must not be empty."
							});			
					}	
					
			 } else {

			 }
		   });			
		
		

	
	}	
	
	$scope.promoteData = {};
	
	$scope.accountRequestAdmin = function () {
		
	   var confirmPopup = $ionicPopup.confirm({
			 title: 'Confirming Account Proposal',
			 scope: $scope,
			 template: 'Are you sure with sending your proposed credentials?'
		   });

		   confirmPopup.then(function(res) {
			 if(res) {
					if ($scope.promoteData.reason != null)
					{
						$http({
							method: "post",
							url: domain + '/updateAccountAdmin.php',
							headers :{'Content-Type':'application/x-www-form-urlencoded'},
							//Remove the quotation marks, when you're ready to implement properly
							data: {
									
									id: MainService.userID, 
									firstname: MainService.userName, 
									surname: MainService.userLastName,
									reason: $scope.promoteData.reason
							}
							}).then(function success(response) {
													console.log(JSON.stringify(response));
								if (response.data.result != null)
								{
												
									var alertPopup = $ionicPopup.alert({
									title: 'Account Status',
									template: "Proposed personal information sent for approval to the admin."
									});				
								}
								else 
								{
									var alertPopup = $ionicPopup.alert({
									title: 'Change failed',
									template: "Please check your connection or try again later."
									});					
								}


							}, function error(response) {
								// $scope.hideLoading();	
								console.log(JSON.stringify(response));
							//Second function handles error
								var alertPopup = $ionicPopup.alert({
								title: 'Change failed',
								template: "Please check your connection or try again later."
								});
							});		
								
					}
					else
					{
						var alertPopup = $ionicPopup.alert({
							title: 'Change failed',
							template: "All fields must not be empty."
							});			
					}	
					
			 } else {

			 }
		   });			
		
		

	
	}
	
	$scope.approvePromote = function () {
		
	   var confirmPopup = $ionicPopup.confirm({
			 title: 'Confirming Account Admin Proposal',
			 scope: $scope,
			 template: 'Are you sure with approving the change?'
		   });

		   confirmPopup.then(function(res) {
			 if(res) {
			 	$http({
					method: "post",
					url: domain + '/updateAccountAdminB.php',
					headers :{'Content-Type':'application/x-www-form-urlencoded'},
					//Remove the quotation marks, when you're ready to implement properly
					data: {
							type : "a",
							id: $scope.currentInfoID
					}
					}).then(function success(response) {
											console.log(JSON.stringify(response));
						if (response.data.result != null)
						{
										
							var alertPopup = $ionicPopup.alert({
							title: 'Account Status',
							template: "User granted admin status."
							});	
							alertPopup.then(function(res) {
								$scope.closePromote();
								$scope.showAdminPromoteList();					
							});								
						}
						else 
						{
							var alertPopup = $ionicPopup.alert({
							title: 'Change failed',
							template: "Please check your connection or try again later."
							});					
						}


					}, function error(response) {
						// $scope.hideLoading();	
						console.log(JSON.stringify(response));
					//Second function handles error
						var alertPopup = $ionicPopup.alert({
						title: 'Error',
						template: "Please Check your connection and try again later."
						});
					});		
					
			 } else {

			 }
		   });			
		

	}	
	
	$scope.rejectPromote = function () {
		
	   var confirmPopup = $ionicPopup.confirm({
			 title: 'Confirming Account Admin Proposal',
			 scope: $scope,
			 template: 'Are you sure with rejecting the request?'
		   });

		   confirmPopup.then(function(res) {
			 if(res) {
					$http({
						method: "post",
						url: domain + '/updateAccountAdminB.php',
						headers :{'Content-Type':'application/x-www-form-urlencoded'},
						//Remove the quotation marks, when you're ready to implement properly
						data: {
								type : "r",
								id: $scope.currentInfoID, 	
						}
						}).then(function success(response) {
												console.log(JSON.stringify(response));
							if (response.data.result != null)
							{
											
								var alertPopup = $ionicPopup.alert({
								title: 'Account Status',
								template: "User not granted admin status."
								});	
								alertPopup.then(function(res) {
									$scope.closePromote();
									$scope.showAdminPromoteList();					
								});								
							}
							else 
							{
								var alertPopup = $ionicPopup.alert({
								title: 'Change failed',
								template: "Please check your connection or try again later."
								});					
							}


						}, function error(response) {
							// $scope.hideLoading();	
							console.log(JSON.stringify(response));
						//Second function handles error
							var alertPopup = $ionicPopup.alert({
							title: 'Error',
							template: "Please Check your connection and try again later."
							});
						});	
			 } else {

			 }
		   });			
		
	
			
	}				  	

	$scope.showAdminPromoteList = function () {
		console.log("Admin Info called");
		// $scope.showLoading();
		$http({
			method: "post",
			url: domain + '/listPromoteAdmin.php',
			headers :{'Content-Type':'application/x-www-form-urlencoded'},
			//Remove the quotation marks, when you're ready to implement properly
			data: {
					type: choiceToggle				
			}
			}).then(function success(response) {
				console.log(JSON.stringify(response.data));
				$scope.adminPromoteList = response.data.result;
				
			

			}, function error(response) {
				// $scope.hideLoading();	
				console.log(JSON.stringify(response));
			//Second function handles error
				var alertPopup = $ionicPopup.alert({
				title: 'Error',
				template: "Please Check your connection and try again later."
				});
			});		
			
	}

	$scope.setPromoteDisplay = function(item){
		$scope.currentInfoFirstName = item.name;
		$scope.currentInfoLastName = item.lastname;
		$scope.currentInfoID = item.id;
		$scope.currentInfoReason = item.reason;
		$scope.showPromote();
		
	};		
	
  $ionicModal.fromTemplateUrl('templates/itemPromote.html', {
	    scope: $scope
	  }).then(function(modal) {
	    $scope.modalPromote = modal;
	  });

	  // Triggered in the register modal to close it
	  $scope.closePromote = function() {
	    $scope.modalPromote.hide();
	  };

	  // Open the register modal
	  $scope.showPromote = function() {  
	    $scope.modalPromote.show();		
	  };		
	
	//initial processes
	
	function loadLists()
	{
		$scope.showGeneralList();	
		$scope.showPersonalList();
		$scope.showAdminList();	
	}
	
	loadLists();
  
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
