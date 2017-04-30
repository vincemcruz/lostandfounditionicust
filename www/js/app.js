// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider,  $ionicConfigProvider) {
  $stateProvider
  
  .state('register', {
    url: '/register',
	templateUrl: 'templates/register.html',
    controller: 'AppCtrl'	
  })

  .state('login', {
    url: '/login',
	templateUrl: 'templates/login.html',
	controller: 'AppCtrl'
  })  
  
  .state('verify', {
    url: '/verify',
	templateUrl: 'templates/verify.html',
	controller: 'AppCtrl'
  })    
  
    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'PlaylistsCtrl'
  })


  
  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/general.html',
          controller: 'PlaylistsCtrl'		  
        }
      }
    })
	
  // .state('app.test', {
      // url: '/test',
      // views: {
        // 'menuContent': {
          // templateUrl: 'templates/placeTest.html',
          // controller: 'PlaylistsCtrl'		  
        // }
      // }
    // })
	
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/personal.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })
	

    .state('app.admin', {
      url: '/admin',
      views: {
        'menuContent': {
          templateUrl: 'templates/admin.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })	

    .state('app.adminPromote', {
      url: '/adminPromote',
      views: {
        'menuContent': {
          templateUrl: 'templates/adminPromote.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })	
    
    .state('app.adminPersonal', {
      url: '/adminPersonal',
      views: {
        'menuContent': {
          templateUrl: 'templates/adminPersonal.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })	    

    .state('app.account', {
      url: '/account',
      views: {
        'menuContent': {
          templateUrl: 'templates/account.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })	
    
    .state('app.accountName', {
      url: '/accountName',
      views: {
        'menuContent': {
          templateUrl: 'templates/accountName.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })  

    .state('app.adminRequest', {
      url: '/adminRequest',
      views: {
        'menuContent': {
          templateUrl: 'templates/adminRequest.html',
          controller: 'PlaylistsCtrl'
        }
      }
    }) 	
	
    .state('app.registeritem', {
      url: '/registeritem',
      views: {
        'menuContent': {
          templateUrl: 'templates/registeritem.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })	

    .state('app.itemGeneral', {
      url: '/itemGeneral',
      views: {
        'menuContent': {
          templateUrl: 'templates/itemGeneral.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })	

    .state('app.itemPersonal', {
      url: '/itemPersonal',
      views: {
        'menuContent': {
          templateUrl: 'templates/itemPersonal.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })		
	
    .state('app.itemAdmin', {
      url: '/itemAdmin',
      views: {
        'menuContent': {
          templateUrl: 'templates/itemAdmin.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })			
	
  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('login');
  
  $ionicConfigProvider.views.maxCache(0);  
});
