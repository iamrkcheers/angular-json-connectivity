app.service("service",function($http,$q,url){
    this.obj={
        getJSON:function(){
            var d=$q.defer();
            $http.get(url).success(function(data){d.resolve(data);}).error(function(error){d.reject(error);});
            return d.promise;
        }
    }
});