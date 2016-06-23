angular.module("phoneList").factory("contactAPI", function ($http, config) {
    var _getAllContacts = function () {
        return $http.get(config.getAllContactsUrl);
    };

    var _addContact = function (contact) {
        return $http.post(config.addContantUrl, contact);
    };

    return {
      getAllContacts: _getAllContacts,
      addContant: _addContact
    };
});
