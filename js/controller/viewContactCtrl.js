angular.module("phoneList").controller("viewContactCtrl", function ($scope, contactAPI, carrierAPI, $routeParams, $location){
  $scope.app = "Phone List";

  $scope.carriers = [];

  var loadCarriers = function () {
    carrierAPI.getAllCarriers().success(function (data) {
        $scope.carriers = data;
        verifyIfShowAlertError();
    }).error(function (data, status) {
        $scope.error = "Impossible to load all carriers!";
        verifyIfShowAlertError();
    });
  };

  var loadContact = function (serial) {
    contactAPI.getContact(serial).success(function (data) {
        $scope.contact = data;
        verifyIfShowAlertError();
    }).error(function (data, status) {
        $scope.error = "Impossible to load the contact with serial = " + serial;
        verifyIfShowAlertError();
    });
  };

  var verifyIfShowAlertError = function() {
    if ($scope.error != undefined && $scope.error != "") {
      $scope.hideAlertError = false;
    } else {
      $scope.hideAlertError = true;
    }
  }

  loadCarriers();
  loadContact($routeParams.serial);

})
