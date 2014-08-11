(function(angular) {
	
	var mod = angular.module('webfont-loader', []);

	mod.directive('webfontLoader', ['$rootScope', '$window', 
		function($rootScope, $window) {
		    return {
		    	link: function(scope, elem, attrs) {

		    		function onActive() {
		    			$rootScope.$broadcast('webfontLoader.loaded');
		    		}

		    		function onInactive() {
		    			$rootScope.$broadcast('webfontLoader.error');
		    		}

			    	$window.WebFont.load({
					    google: {
					      families: [attrs.webfontLoader]
					    },
					    active: onActive,
		    			inactive: onInactive
					});
				}
		    }
		}
	]);
}(angular));
