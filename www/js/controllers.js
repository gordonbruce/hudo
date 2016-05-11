angular.module('app.controllers', [])

.controller('categoriasCtrl', function($scope,IsAuthService,$location) {
  //  ref.unauth();
  isLoggedIn = IsAuthService.getAuth(ref);
  if(isLoggedIn == false){
    $location.path("/page6");
  }
})

.controller('empresasCtrl', function($scope, IsAuthService,$location) {
  //  ref.unauth();
  isLoggedIn = IsAuthService.getAuth(ref);
  if(isLoggedIn == false){
    $location.path("/page6");
  }
})
.controller('addCuponsCtrl', function($scope, IsAuthService,$location, $ionicHistory) {

    $scope.getLocal = function (local) {
      if(local != '')
      {
        var displaySuggestions = function(predictions, status) {
          if (status != google.maps.places.PlacesServiceStatus.OK) {
            $scope.predictions='';
            //alert(status);
            return;
          }
          $('.listpre').show();
          $scope.predictions=predictions;

          /*predictions.forEach(function(prediction) {

            var li = document.createElement('li');
            console.log(prediction);
            li.appendChild(document.createTextNode(prediction.description));
            document.getElementById('results').appendChild(li);
          });*/
        };
        var service = new google.maps.places.AutocompleteService();
        service.getQueryPredictions({ input: local }, displaySuggestions);
      }else{
        $scope.predictions='';
      }


    }
    var local=[];
    $scope.setLocal = function (id) {
      //$('#'+id).val();
      $('.listpre').hide();
      $('#localEmpresa').val($('#'+id).attr('data-description'));
      console.log($('#'+id).attr('data-nome'));
      local.localid=id;
      local.desc=  $('#'+id).attr('data-description');
      local.nome=  $('#'+id).attr('data-nome');
      local.endereco=  $('#'+id).attr('data-endereco');
      local.bairro=  $('#'+id).attr('data-bairro');
      local.cidade=  $('#'+id).attr('data-cidade');
      local.uf=  $('#'+id).attr('data-uf');
      local.pais=  $('#'+id).attr('data-pais');

    }
    $scope.save = function (cupom) {
      //$scope.cupom=cupom;
      //$scope.cupom.local=local;

      $scope.uploadimage();
      /*ref.child('cupons').set($scope.cupom, function(error) {
        if (error) {
          console.log("Data could not be saved." + error);
        } else {
          console.log("Data saved successfully.");

        }
      });*/
    }
    $scope.getImage = function (cupom) {

         // Retrieve image file location from specified source
        navigator.camera.getPicture(uploadPhoto, function(message) {
           alert('get picture failed');
         },{
           quality: 50,
           destinationType: navigator.camera.DestinationType.FILE_URI,
           sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
         }
        );

     }


    $scope.$on('$ionicView.beforeEnter', function (event, viewData) {

    });
})
.controller('listCuponsCtrl', function($scope, IsAuthService,$location, $ionicHistory) {

})
.controller('addAnunciantesCtrl', function($scope, IsAuthService,$location, $ionicHistory) {
  $scope.ionicGoBack = function() {
    $ionicHistory.goBack();
  };
  $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
    viewData.enableBack = true;
  });
})
.controller('cuponsCtrl', function($scope,IsAuthService,$location) {
  $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
    //ref.unauth();
    isLoggedIn = IsAuthService.getAuth(ref);
    if(isLoggedIn == false){
      $location.path("/page6");
    }
    $('.buttons-left').show();
  });
})

.controller('pageCtrl', function($scope,IsAuthService,$location) {
  //  ref.unauth();
  isLoggedIn = IsAuthService.getAuth(ref);
  if(isLoggedIn == false){
    $location.path("/page6");
  }
})

.controller('loginCtrl', function($scope,IsAuthService,$location, $firebaseAuth, $cordovaOauth) {
  //ref.unauth();
  isLoggedIn = IsAuthService.getAuth(ref);
  if(isLoggedIn == false){
    $location.path("/page6");
  }
  $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
    $('.buttons-left').hide();
  });
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
  $scope.loginNormal = function (e) {
    $scope.user= e;
    $('.divAvisoLogin').hide();
    $('.myredcolor').removeClass('myredcolor');
    ref.authWithPassword({
      email    : $scope.user.email,
      password : $scope.user.password
    }, function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);

        var msg='';
        if(error=='Error: The specified password is incorrect.'){
          msg = 'Usuário ou senha incorreto(s).';
          $('.lb-password').addClass('myredcolor');
        }
        if(error=='Error: Unable to contact the Firebase server.'){
          msg='Sem conexão com a internet. Tente mais terde.';

        }
        $('.divAvisoLogin').show();
        $('.msg-login').html(msg);
      } else {
        console.log("Logado com sucesso:", authData);
        document.location.href = '#/page1/page4';

      //  window.location.href = '#/home';
      }
    });
  }
  var auth = $firebaseAuth(ref);

  $scope.loginFace = function() {
alert('clicou');
    $cordovaOauth.facebook("1765014733713634", ["email"]).then(function(result) {
         auth.$authWithOAuthToken("facebook", result.access_token).then(function(authData) {
             alert(JSON.stringify(authData));
         }, function(error) {
             alert("ERROR: " + error);
         });
     }, function(error) {
         alert("ERROR: " + error);
     });

  }

})

.controller('signupCtrl', function($scope,IsAuthService,$location, $ionicHistory) {
  //  ref.unauth();
  $scope.ionicGoBack = function() {
    $ionicHistory.goBack();
  };
  $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
    viewData.enableBack = true;
  });
  isLoggedIn = IsAuthService.getAuth(ref);
  if(isLoggedIn == false){
    $location.path("/page6");
  }

  $scope.loginNormal = function (e) {
    $scope.user= e;
    ref.authWithPassword({
      email    : $scope.user.email,
      password : $scope.user.password
    }, function(error, authData) {
      if (error) {

      } else {

        document.location.href = '#/page1/page4';

      //  window.location.href = '#/home';
      }
    });
  }

  $scope.showPopup = function(texto) {
    var alertPopup = $ionicPopup.alert({
     title: texto.titulo,
     template: texto.mensagem
   });

  };
  $scope.validaEmail= function(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(email)){
      $('.divAvisoEmail').hide();
      $('.lb-email ').removeClass('myredcolor');
      return true;
    }else {
      $('.divAvisoEmail').show();
      $('.lb-email ').addClass('myredcolor');
      return false;
    }

  }

  $scope.difpassword = function(user) {
    if (user.password != user.cpassword && (user.password != '' && user.cpassword != '') ) {
        $('.lb-password ').addClass('myredcolor');
        $('.divAviso').show();
        return false;
    }else{
      $('.lb-password ').removeClass('myredcolor');
      $('.divAviso').hide();
      return true;
    }
  }
  $scope.validaCadastro = function(user) {
    if(user.email == null || user.email == ''){
      $scope.texto.titulo='Erro';
      $scope.texto.mensagem='O campo email não pode ficar vazio.';
      return false;
    }else{
      return true;
    }

  }
  $scope.validaFormulario = function(user) {

    var flagValid=true;

    if($scope.difpassword(user)== false){
      flagValid= false;
    }
    if(!$scope.validaEmail(user.email)){
      flagValid= false;
    }
    if($scope.validaCadastro(user)== false){
      flagValid= false;
    }
    return flagValid;
  }
  $scope.cadastrarUsuario = function(user) {
    $scope.user=user;
    $('.myredcolor').removeClass('myredcolor');
    //$scope.validaCadastro(user);
    if($scope.validaFormulario(user))
    {
      ref.createUser({
        email    : $scope.user.email,
        password : $scope.user.password
      }, function(error, userData) {
        if (error) {
          //console.log("Error creating user:", error);
          var msg= '';
          if(error=='Error: The specified email address is already in use.')
          {
            msg='Email já em uso. Escolha outro email.';
            $('.lb-email').addClass('myredcolor');
          }
          if(error=='Error: Unable to contact the Firebase server.')
          {
            msg='Sem conexão com a internet. Tente mais terde.';
          }

          $('.aviso-erro').html(msg);
          $('.divAvisoEmailUso').show();
          return false;
        } else {
            ref.child("users/"+ userData.uid ).on("value", function(hasuser) {
               // Alerts "San Francisco"
              if(hasuser.val() == null)
              {
                  ref.child("users").child(userData.uid).set({
                    provider: 'password',
                    name: $scope.user.email.replace(/@.*/, ''),
                    role:'owner'
                  });
              }
              $scope.loginNormal($scope.user);
          });

          //window.location.href = '#/page1/page4';
        }
      });
    }

  }

})

.controller('cupons2Ctrl', function($scope,IsAuthService,$location) {
  //  ref.unauth();
  isLoggedIn = IsAuthService.getAuth(ref);
  if(isLoggedIn == false){
    $location.path("/page6");
  }
  $scope.ionicGoBack = function() {
    $ionicHistory.goBack();
  };
  $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
    viewData.enableBack = true;
  });
})

.controller('page2Ctrl', function($scope,IsAuthService,$location) {
  //  ref.unauth();
  isLoggedIn = IsAuthService.getAuth(ref);
  if(isLoggedIn == false){
    $location.path("/page6");
  }
})
