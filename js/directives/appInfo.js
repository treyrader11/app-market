app.directive('appInfo', function() { 
  return { 
    restrict: 'E', //will be an html element, a tag, named 'appInfo'
    scope: { 
      info: '=' //info will be the attribute name of this element
    }, 
    templateUrl: 'js/directives/appInfo.html' 
  }; 
});