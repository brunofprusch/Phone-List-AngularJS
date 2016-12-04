angular.module("phoneList").config(function ($routeProvider) {
    $routeProvider.when("/contacts", {
        templateUrl: "/view/contacts.html",
        controller: "phoneListCtrl"
    });

    $routeProvider.when("/newContact", {
        templateUrl: "view/newContact.html",
        controller: "newContactCtrl"
    });

    $routeProvider.when("/viewContact/:id", {
        templateUrl: "view/viewContact.html",
        controller: "viewContactCtrl"
    });

    $routeProvider.when("/error", {
        templateUrl: "view/error.html"
    });

    $routeProvider.otherwise({redirectTo: "/contacts"});
});
