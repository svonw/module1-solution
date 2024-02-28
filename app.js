(function () {
  'use strict';

  angular
    .module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.food = '';
    $scope.message = '';

    $scope.CheckFood = function () {
      if ($scope.food === '') {
        $scope.message = 'Please enter data first';
        return;
      }
      $scope.items = $scope.food.split(',');
      if ($scope.items.length <= 3) {
        $scope.message = 'Enjoy!';
      } else {
        $scope.message = 'Too much!';
      }
      console.log($scope.message);
    };
  }
})();
