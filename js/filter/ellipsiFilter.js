angular.module("phoneList").filter("ellipsiFilter", function() {
    return function(input, size) {
        if (size === undefined || input.length <= size) return input;
        var output = input.substring(0,size) + "...";
        return output;
    };
});
