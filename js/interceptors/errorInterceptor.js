angular.module("phoneList").factory("errorInterceptor", function ($q, $location) {
    return {
        responseError: function (rejection) {
        	if (rejection.status !== 200 && rejection.status !== 201) {
        		$location.path("/error");
        	}
          return $q.reject(rejection);
        }
    };
});
