'use strict';

let app = angular.module('UndrunkApp', ['ngRoute', 'firebase', 'ngStorage'])
				.constant('FBURL', 'https://areyoudrunk-936e6.firebaseio.com/');
