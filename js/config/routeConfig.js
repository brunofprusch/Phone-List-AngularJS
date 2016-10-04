angular.module("phoneList").config(function ($routeProvider) {
    $routeProvider.when("/contacts", {
        templateUrl: "view/contacts.html",
        controller: "phoneListCtrl"
    });
    $routeProvider.when("/newContact", {
        templateUrl: "view/newContact.html",
        controller: "newContactCtrl"
    });

    $routeProvider.otherwise({redirectTo: "/contacts"});
});
