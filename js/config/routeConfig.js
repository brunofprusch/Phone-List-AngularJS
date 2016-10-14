angular.module("phoneList").config(function ($routeProvider) {
    $routeProvider.when("/contacts", {
        templateUrl: "view/contacts.html",
        controller: "phoneListCtrl"
    });

    $routeProvider.when("/newContact", {
        templateUrl: "view/newContact.html",
        controller: "newContactCtrl"
    });

    $routeProvider.when("/viewContact/:serial", {
        templateUrl: "view/viewContact.html",
        controller: "viewContactCtrl"
    });

    $routeProvider.otherwise({redirectTo: "/contacts"});
});
