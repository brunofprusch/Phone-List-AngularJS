angular.module("phoneList").factory("timestampInterceptor", function () {
    return {
        request: function (config) {
          //console.log(config);
          return config;
        }
    };
});
