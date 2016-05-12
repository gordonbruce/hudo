angular.module('app.services', [])

.factory('CuponsFactory', [function(){

}])
.factory("Auth", function($firebaseAuth) {
  var usersRef = new Firebase("https//hudo.firebaseio.com/users");
  return $firebaseAuth(usersRef);
})
.service('IsAuthService', [function(){
  return {
     getAuth:  function(ref){
       var authData = ref.getAuth();
       if (authData)
       {
        return authData;

       } else
       {

         return false;
       }
     }
   }
}]);
