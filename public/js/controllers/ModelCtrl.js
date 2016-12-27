// public/js/controllers/NerdCtrl.js
angular.module('ModelCtrl', []).controller('ModelController', function($scope, Model) {

	console.log(Model.get());
    $scope.tagline = 'Nothing beats a pocket protector!';

});