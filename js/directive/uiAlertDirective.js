angular.module("phoneList").directive("uiAlert", function () {
    return {
          templateUrl: "view/alert.html",
          replace: true,
          restrict: "AE",
          scope: {
            title: "@",
            //error: "=message"
          },
          transclude: true
    };
});
