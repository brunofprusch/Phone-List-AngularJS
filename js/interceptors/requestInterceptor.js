angular.module("phoneList").factory("requestInterceptor", function ($rootScope) {
	return {
    	request: function (config) {
	      config.headers['headerTest'] = $rootScope.custumerHeader;
	      return config;
    	}
  	};
});
