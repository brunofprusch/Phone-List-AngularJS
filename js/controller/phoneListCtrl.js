angular.module("phoneList").controller("phoneListCtrl", function ($scope, $rootScope, contactAPI, serialGenerator){
    $scope.app = "Phone List";
    /*
    $scope.contacts = [
        {name: "Bruno",  date: new Date(), phone: "94147667", color: "orange"},
        {name: "Bruna",  date: new Date(), phone: "81049781", color: "green"},
        {name: "Daniel", date: new Date(), phone: "84470884", color: "red"},
    ];

    $scope.carriers = [
        {name: "Oi",    code: "14", category: "Cell", price: 2},
        {name: "Vivo",  code: "15", category: "Cell", price: 1},
        {name: "Tim",   code: "41", category: "Cell", price: 3},
        {name: "Claro", code: "36", category: "Cell", price: 2},
        {name: "NET",   code: "00", category: "Fixed", price: 1},
        {name: "GVT",   code: "21", category: "Fixed", price: 1},
    ];
    */

    $scope.contacts = [];

    $scope.isContactSelected = function(contacts) {
      return contacts.some(function (contact) {
        return contact.selected;
      });
    };

    $scope.deleteContacts = function(contacts) {
        contacts.filter(function (contact) {
            if (contact.selected) {
                contactAPI.deleteContact(contact.serial).success(function () {
                  $scope.contacts = [];
                  loadContacts();
                });
            }
        });

    };

    $scope.orderByColumn = "name";
    $scope.orderBy = function(column) {
      $scope.orderByColumn = column;
      $scope.directionOfSorting = !$scope.directionOfSorting;
    };

    var loadContacts = function () {
      contactAPI.getAllContacts().success(function (data, status, headers, config) {
          $rootScope.custumerHeader = headers('New-Header');
          $scope.contacts = data;
          verifyIfShowAlertError();
      }).error(function (data, status) {
          $scope.error = "Impossible to load all contacts!";
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

    loadContacts();

})
