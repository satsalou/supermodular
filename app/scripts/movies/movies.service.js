(function() {
	'use strict';

	angular
		.module('supermodular.movies')
		.factory('moviesService', moviesService);

	moviesService.$inject = [];

	function moviesService() {
		var data = {
			url: 'misc/movies.json'
		};
		return data;
	}
})();
