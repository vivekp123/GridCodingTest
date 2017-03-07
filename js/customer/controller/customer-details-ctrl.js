/**
 * 
 * @author vivekp123
 * 
 */

customerModule.controller('CustomerController', function($scope, customerDetailsSrvc, NgTableParams) {

  var defaultTab = 'address';
  
  /**
   * Initialize controller
   * @method init
   * @return 
   */
  $scope.init = function(){
    
    $scope.tableParams = new NgTableParams({}, {
      getData : function(params) {
        return customerDetailsSrvc.getCustomers();
      }
    });
    
    $scope.ddSelectSelected = {};
    $scope.headers = customerDetailsSrvc.addressHeaders;
    $scope.tableMenuOptions = customerDetailsSrvc.tableMenuOptions;
    

    $('#gridBody').unbind('click').bind('click', function () {    
      if(event.path.indexOf(angular.element('#tableColDropdown')[0]) === -1){
        angular.element('#tableColDropdown').removeClass( "active" );
      }
    });
  };
  
  /**
   * Event Handler of tab click
   * @method tabClicked
   * @param {} type
   * @param {} headerType
   * @return 
   */
  $scope.tabClicked = function(type, headerType){
    defaultTab= type; 
    $scope.headers = customerDetailsSrvc[headerType]; 
    $scope.tableParams.reload();
    angular.element('.tabPane').removeClass('activeTab');
    $(event.target).addClass('activeTab')
  };
  
  /**
   * Event handler of delete button click
   * @method deleteCutomer
   * @return 
   */
  $scope.deleteCutomer = function(){
    console.log('Delete customer');
  };
  
  /**
   * Event handler of add customer click
   * @method addCutomer
   * @return 
   */
  $scope.addCutomer = function(){
    console.log('Add customer');
  };
  
    
  /**
   * Event handler of expand row
   * @method expandRow
   * @param {} row
   * @return 
   */
  $scope.expandRow = function(row){
    customerDetailsSrvc[defaultTab](row.id).then(function(result){
      row.$hideRows = !row.$hideRows;
      row.childRows = result.data;      
    });
  }; 
  
  /**
   * Remove document click event on scope destroy
   * 
   * @Evet Scope destroy
   * @return
   */
  $scope.$on('$destroy', function() {
    $('#gridBody').unbind('click');
  });
  
});
