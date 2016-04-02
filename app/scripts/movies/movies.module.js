(function() {
	'use strict';

	angular
		.module('supermodular.movies', [
			'ionic'
		])
		.config(function($stateProvider) {
			$stateProvider
				.state('app.movies', {
					url: '/movies',
					views: {
						'menuContent': {
							templateUrl: 'scripts/movies/movies.html',
							controller: 'MoviesController'
						}
					}
				});
		});
})();
