(function() {
	'use strict';

	angular
		.module('supermodular.movies')
		.controller('MoviesController', MoviesController);

	MoviesController.$inject = ['moviesService', '$http', '$scope'];

	/* @ngInject */
	function MoviesController(moviesService, $http, $scope) {

		(function activate() {
			getMovies();
		})();

		function getMovies() {
			$http.get(moviesService.url).success(function(data) {
				$scope.movies = data.movies;
			});
		}
	}
})();
