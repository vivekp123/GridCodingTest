/**
 * 
 * @author vivekp123
 * @Description : Main application module which loads dependent modules. It
 *              configures angular mocks
 * 
 */

var main = angular.module('app', [ 'ngTable', 'ngDropdowns', 'customerModule' ]);

main.config([ '$httpProvider', '$provide', function($httpProvider, $provide) {
  $provide.decorator('$httpBackend', angular.mock.e2e.$httpBackendDecorator);
} ]);

main.run(function($httpBackend, $http) {

  $httpBackend.whenRoute('GET', '/customers').respond(function(method, url, data, headers, params) {
    return [ 200, customers ];
  });
  
  $httpBackend.whenRoute('GET', '/customerBankDetails:id').respond(function(method, url, data, headers, params) {
    return [ 200, bankDetails ];
  });
  
  $httpBackend.whenRoute('GET', '/customerAddressDetails:id').respond(function(method, url, data, headers, params) {
    return [ 200, addressDetails ];
  });
});
