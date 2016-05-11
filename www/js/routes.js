angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



  .state('tabsController.addcupons', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/addcupons.html',
        controller: 'addCuponsCtrl'
      }
    }
  })
  
  .state('tabsController.empresas', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/empresas.html',
        controller: 'empresasCtrl'
      }
    }
  })

  .state('tabsController.cupons', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/cupons.html',
        controller: 'cuponsCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('page', {
    url: '/page5',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

  .state('login', {
    url: '/page6',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/page7',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('cupons2', {
    url: '/page8',
    templateUrl: 'templates/cupons2.html',
    controller: 'cupons2Ctrl'
  })

  .state('tabsController.page2', {
    url: '/page9',
    views: {
      'tab5': {
        templateUrl: 'templates/page2.html',
        controller: 'page2Ctrl'
      }
    }
  })

  .state('addanunciantes', {
    url: '/addanunciantes',
    templateUrl: 'templates/addanunciantes.html',
    controller: 'addAnunciantesCtrl'
  })
  .state('listcupons', {
    url: '/listcupons',
    templateUrl: 'templates/listcupons.html',
    controller: 'listCuponsCtrl'
  })
$urlRouterProvider.otherwise('/page1/page4')



});
