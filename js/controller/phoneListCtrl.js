angular.module("phoneList").controller("phoneListCtrl", function ($scope, $http){
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
    $scope.carriers = [];

    $scope.isContactSelected = function(contacts) {
      return contacts.some(function (contact) {
        return contact.selected;
      });
    };

    $scope.deleteContacts = function(contacts) {
        $scope.contacts = contacts.filter(function (contact) {
            if (!contact.selected) {
              return contact;
            }
        });
    };

    $scope.orderByColumn = "name";
    $scope.orderBy = function(column) {
      $scope.orderByColumn = column;
      $scope.directionOfSorting = !$scope.directionOfSorting;
    };

    var loadContacts = function () {
      $http.get("http://localhost:8080/contact/all").success(function (data){
          $scope.contacts = data;
      });
    };

    var loadCarriers = function () {
      $http.get("http://localhost:8080/carrier/all").success(function (data){
          $scope.carriers = data;
      });
    };

    $scope.addContant = function(contact) {
      $http.post("http://localhost:8080/contact/add", contact).success(function (data){
        $scope.contactForm.$setPristine();
        //$scope.contactForm.name.$setPristine();
        //$scope.contactForm.phone.$setPristine();
        delete $scope.contact;
        loadContacts();
      });
    };

    loadContacts();
    loadCarriers();
})
