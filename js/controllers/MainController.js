app.controller('MainController', ['$scope', function($scope) {
  
  $scope.apps = [
    {
      icon: 'images/move.jpg',
      title: 'MOVE',
      developer: 'MOVE, Inc.',
      price: 0.99
    },
    {
      icon: 'images/shutterbugg.jpg',
      title: 'Shutterbugg',
      developer: 'Chico Dusty',
      price: 2.99
    },
    {
      icon: 'images/gameboard.jpg',
      title: 'Gameboard',
      developer: 'Armando P.',
      price: 1.99
    },
    {
      icon: 'images/forecast.jpg',
      title: 'Forecast',
      developer: 'Forecast',
      price: 1.99
    }
  ];
}]);

