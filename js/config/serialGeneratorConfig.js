angular.module("phoneList").config(function (serialGeneratorProvider) {
    serialGeneratorProvider.setLength(5);
    console.log(serialGeneratorProvider.getLength());
});
