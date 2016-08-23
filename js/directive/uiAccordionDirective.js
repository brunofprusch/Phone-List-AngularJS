angular.module("phoneList").directive("uiAccordions", function () {
    return {
        controller: function ($scope, $element, $attrs) {
            var accordions = [];

            this.registerAccordion = function (accordion) {
                accordions.push(accordion);
            };

            this.closeAll = function () {
                accordions.forEach(function (accordion) {
                    accordion.isOpened = false;
                });
            };
        }
    };
});

angular.module("phoneList").directive("uiAccordion", function () {
    return {
        templateUrl: "view/accordion.html",
        transclude: true,
        scope: {
            title: "@"
        },
        require: "^uiAccordions",
        link: function (scope, elemnt, attrs, ctrl) {
            ctrl.registerAccordion(scope);
            scope.open = function () {

                var oldSituation = scope.isOpened;
                ctrl.closeAll();
                scope.isOpened = !oldSituation;
            }
        }
    };
});
