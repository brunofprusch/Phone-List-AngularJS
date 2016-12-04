angular.module("phoneList").factory("contactAPI", function ($http, urlConfig) {

    var _getAllContacts = function () {
          return $http.get(urlConfig.getAllContactsUrl);
    };

    var _addContact = function (contact) {
        return $http.post(urlConfig.addContantUrl, contact);
    };

    var _deleteContact = function (serial) {
        return $http.delete(urlConfig.deleteContact + serial);
    };

    var _getContact = function (id) {
        return $http.get(urlConfig.getContact + id);
    };

    return {
      getAllContacts: _getAllContacts,
      addContant: _addContact,
      deleteContact: _deleteContact,
      getContact: _getContact
    };
});
