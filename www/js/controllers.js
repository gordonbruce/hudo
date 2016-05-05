angular.module('app.controllers', [])

.controller('categoriasCtrl', function($scope) {

})

.controller('empresasCtrl', function($scope) {

})

.controller('cuponsCtrl', function($scope) {

})

.controller('pageCtrl', function($scope) {

})

.controller('loginCtrl', function($scope) {
  function getName(authData) {
    switch(authData.provider) {
       case 'password':
         return authData.password.email.replace(/@.*/, '');
       case 'twitter':
         return authData.twitter.displayName;
       case 'facebook':
         return authData.facebook.displayName;
        case 'google':
          return authData.google.displayName;
    }
  }

  $scope.loginFace = function(e) {
    ref.authWithOAuthPopup("facebook", function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:", authData);
        // here we will just simulate this with an isNewUser boolean
        var isNewUser = true;

        ref.onAuth(function(authData) {
          if (authData && isNewUser) {
            // save the user's profile into the database so we can list users,
            // use them in Security and Firebase Rules, and show profiles
            $scope.signedUserId = authData.uid;
            ref.child("users/"+ authData.uid ).on("value", function(hasuser) {
               // Alerts "San Francisco"
              if(hasuser.val() == null)
              {
                  ref.child("users").child(authData.uid).set({
                    provider: authData.provider,
                    name: getName(authData),
                    role:'costumer',
                    foto: authData.facebook.displayName
                  });
                  console.log(authData.facebook.profileImageURL);
              }
            });

          }
        });
      }
    });
  }
  $scope.loginNormal = function (e) {

    ref.authWithPassword({
      email    : $scope.email,
      password : $scope.password
    }, function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:", authData);
      //  window.location.href = '#/home';
      }
    });
  }

})

.controller('signupCtrl', function($scope) {

})

.controller('cupons2Ctrl', function($scope) {
  $scope.ionicGoBack = function() {
    $ionicHistory.goBack();
  };
  $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
    viewData.enableBack = true;
  });
})

.controller('page2Ctrl', function($scope) {

})
