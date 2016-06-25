angular.module("phoneList").factory("contactAPI", function ($http, urlConfig) {

    var _getAllContacts = function () {
        return $http.get(urlConfig.getAllContactsUrl);
    };

    var _addContact = function (contact) {
        return $http.post(urlConfig.addContantUrl, contact);
    };

    return {
      getAllContacts: _getAllContacts,
      addContant: _addContact
    };
});
