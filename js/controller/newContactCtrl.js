angular.module("phoneList").controller("newContactCtrl", function ($scope, contactAPI, carrierAPI, serialGenerator, $location){
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

  $scope.addContant = function(contact) {
    contact.serial = serialGenerator.generate();
    contactAPI.addContant(contact).success(function (data) {
      $scope.contactForm.$setPristine();
      //$scope.contactForm.name.$setPristine();
      //$scope.contactForm.phone.$setPristine();
      delete $scope.contact;
      $location.path("/contacts");
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

})
