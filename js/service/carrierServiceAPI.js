angular.module("phoneList").service("carrierAPI", function ($http, config) {
    this.getAllCarriers = function () {
        return $http.get(config.getAllCarriersUrl);
    };
});
