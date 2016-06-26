angular.module("phoneList").filter("nameFilter", function() {
    return function (input) {
      var splitInput = input.split(" ");
      var splitInputFormated = splitInput.map(function (name) {
          if(/(da|de)/.test(name)) return name;
          return name.charAt(0).toUpperCase() + name.substring(1).toLowerCase();
      });
      return splitInputFormated.join(" ");
    };
});
