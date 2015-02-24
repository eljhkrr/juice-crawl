var app = angular.module("myApp", ['ui.bootstrap']);

app.controller("AppController", ['$scope', '$modal', '$log', function($scope, $modal, $log){

	$scope.status = {
		isopen: false
	};
	
	$scope.open = function (size, templateFile) {

	    var modalInstance = $modal.open({
	      templateUrl: templateFile,
	      controller: 'ModalInstanceCtrl',
	      size: size,
	      resolve: {
	        items: function () {
	          return $scope.items;
	        }
	      }
	    });

	    modalInstance.result.then(function (selectedItem) {
	      $scope.selected = selectedItem;
	    }, function () {
	      $log.info('Modal dismissed at: ' + new Date());
	    });
	};

	
	$scope.openAbout = function(){
		$scope.open('lg', 'about.html');
	};

	$scope.toggleDropdown = function($event) {
		$event.preventDefault();
		$event.stopPropagation();
		$scope.status.isopen = !$scope.status.isopen;
	};

}]);

app.controller('ModalInstanceCtrl', ['$scope', '$modalInstance', function ($scope, $modalInstance) {

  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
}]);