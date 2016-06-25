angular.module("phoneList").service("carrierAPI", function ($http, urlConfig) {
    this.getAllCarriers = function () {
        return $http.get(urlConfig.getAllCarriersUrl);
    };
});
