/**
 * 
 * @author vivekp123
 * @Description : Notification module configures ui-notification and pubsub modules
 * 
 */

var customerModule = angular.module('customerModule', [ 'PubSub', 'ui-notification' ]);

customerModule.config(function(NotificationProvider) {
  NotificationProvider.setOptions({
    positionX : 'center',
    replaceMessage : true
  });
})

customerModule.run(function(PubSub, Notification) {
  
  PubSub.subscribe('successMessage', successHandler);
  PubSub.subscribe('errorMessage', errorHandler);

  function successHandler(data, topic) {
    Notification.success({
      message : data.message
    })
  }

  function errorHandler(data, topic) {
    Notification.error({
      message : data.message
    });
  }
});