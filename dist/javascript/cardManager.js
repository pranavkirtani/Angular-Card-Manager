var app=angular.module("cardManager",[]);
app.controller('cardController',function($scope,ajaxService,$window,$timeout){
       var self=this;
    this.$onInit=function(){
          if(this.mydata){
             $scope.items=this.mydata;

          }
          else if(this.url){

            ajaxService.getData(this.url).then(function(data){
                $scope.items=JSON.parse(data);
        },function(){

        });
          }
          else{

              throw new Error("Source of data not provided")
          }
       
            angular.element($window).bind('resize', function(){
            renderHeight();
        });
    }
 

    $scope.open=function(){
          self.onopen()           
    }
    $scope.delete=function(index){
         $scope.items.splice(index,1);
        self.ondelete();
        $timeout(function(){
            renderHeight();
        },0,false);
       
    }
    $scope.print=function(){
        if(!self.onprint){
            window.print()
        }
        else{
            self.onprint()
        }
        
    }

});
app.component("cardManager",{

    templateUrl: 'dist/views/card.html',
    controller:'cardController',
    bindings: {
        mydata: '=',
        onopen:'=',
        ondelete:"=",
        onprint:"=",
        url:"@"

  }
});

app.directive('cardHeight',function($parse){
    return {
        restrict:'A',
        link: function( $scope, elem, attrs ) {    
          elem.ready(function(){
             renderHeight();
               
          })
       }
    }
    }
);
app.filter('cut', function () {
        return function (value, wordwise, max, tail) {
            if (!value) return '';

            max = parseInt(max, 10);
            if (!max) return value;
            if (value.length <= max) return value;

            value = value.substr(0, max);
            if (wordwise) {
                var lastspace = value.lastIndexOf(' ');
                if (lastspace != -1) {
                  if (value.charAt(lastspace-1) == '.' || value.charAt(lastspace-1) == ',') {
                    lastspace = lastspace - 1;
                  }
                  value = value.substr(0, lastspace);
                }
            }

            return value + (tail || ' …');
        };
    });

function renderHeight(){
    var card=angular.element(document.getElementsByClassName('card-body'));
    var width=card[0].clientWidth;
    card.css("height",width+"px");
    
}
app.service('ajaxService',function($http,$q){
this.getData=function(src){
    var deferred = $q.defer();
   $http.get(src).then(function(response){
     
            deferred.resolve(response.data);
      
    }, function(response) {

         deferred.reject(response.data);
    });
    return deferred.promise;
}

})


