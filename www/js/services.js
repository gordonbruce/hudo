angular.module('app.services', [])

.factory('CuponsFactory', [function(){

}])

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
