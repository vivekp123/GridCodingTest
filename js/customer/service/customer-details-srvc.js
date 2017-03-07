/**
 * 
 * @author vivekp123
 * 
 */

customerModule.factory('customerDetailsSrvc', function($http) {
  var factory = {
    getCustomers : getCustomers,
    bank : getCustomerBankDetails,
    address : getCustomerAddressDetails
  };

  factory.bankHeaders = [ {
    title : '',
    field : 'empty',
    show : true
  }, {
    title : 'Name',
    field : 'name',
    show : true
  }, {
    title : 'ID',
    field : 'id',
    show : true
  }, {
    title : 'Bank',
    field: 'bank',
    subfield : 'name',
    show : true
  }, {
    title : 'Branch',
    field: 'bank',
    subfield : 'branch',
    show : true
  }, {
    title : 'City',
    field: 'bank',
    subfield : 'city',
    show : true
  }, {
    title : 'IFSC',
    field: 'bank',
    subfield : 'IFSC',
    show : true
  }, {
    title : 'Comments',
    field: 'bank',
    subfield : 'comments',
    show : true
  } ];


  factory.addressHeaders = [ {
    title : '',
    field : 'empty',
    show : true
  }, {
    title : 'Name',
    field : 'name',
    class : 'nameCol',
    show : true
  }, {
    title : 'ID',
    field : 'id',
    class : 'idCol',
    show : true
  }, {
    title : 'Address1',
    field: 'address',
    class : 'address1Col',
    subfield : 'addressFirst',
    show : true
  }, {
    title : 'Address2',
    field: 'address',
    class : 'address2Col',
    subfield : 'addressSecond',
    show : true
  }, {
    title : 'City',
    field: 'address',
    class : 'cityCol',
    subfield : 'city',
    show : true
  }, {
    title : 'Pin',
    field: 'address',
    class : 'pinCol',
    subfield : 'pin',
    show : true
  }, {
    title : 'Comments',
    field: 'address',
    class : 'commentsCol',
    subfield : 'comments',
    show : true
  } ];
  

  factory.tableMenuOptions = [{
    'label' : 'Delete customer',
    'value' : 'deleteCutomer'
  },{
    'label' : 'Add record',
    'value' : 'addCutomer'
  }];
  
  
  /**
   * REST API for getting customer object
   * @method getCustomers
   * @return Promise
   */
  function getCustomers() {
    return $http({
      method : "GET",
      url : "/customers"
    }).then(function(result) {
      return result.data;
    });
  }

  /**
   * REST call for getting customer bank details
   * @method getCustomerBankDetails
   * @param {} custId
   * @return Promise
   */
  function getCustomerBankDetails(custId) {
    return $http({
      url : "/customerBankDetails",
      method : "GET",
      params : {
        id : custId
      }
    });
  }
  
  /**
   * REST call for getting address details
   * @method getCustomerAddressDetails
   * @param {} custId
   * @return Promise
   */
  function getCustomerAddressDetails(custId) {
    return $http({
      url : "/customerAddressDetails",
      method : "GET",
      params : {
        id : custId
      }
    });
  }

  return factory;
});