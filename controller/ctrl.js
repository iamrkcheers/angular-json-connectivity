app.controller("ctrl",function($scope,service){
    $scope.show=function(){
        var abc=service.obj.getJSON();
        function success(data){$scope.names=data}
        function error(error){$scope.names=error}
        abc.then(success,error);
    }
});