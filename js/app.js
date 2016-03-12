//app.js

var user = angular.module('user', [])
user.controller('userctrl', function($scope, $http){
	$http.post('/user', data).success(function(data, status) {
        $scope.User = data[0];
    });
});

var data = angular.module('data', ['angular-route'])
data.config(function($routeProvider){
	$routeProvider
});

var filters = angular.module('filters', [])
filters.controller('filtercontrol', function($scope){
	console.log($scope.EventNameIn)
});

var events = angular.module('events', []);
events.controller('eventscontroller', function($scope, $http) {
	$scope.sendData = function() {
		var data = $.param({
			json: JSON.stringify({
				type: "Events_Select"
			})
		});
		$http.post("localhost:8080", data).success(function(data, status) {
        	$scope.hello = data;
        	console.log($scope.hello);
    	})
	}
});



$(document).ready(function(){
	$('#loader').load('html/Main.html')
	$('.linav').removeClass('active');
	$('#event').click(function(){
		$('#loader').load("html/Events.html");
		$('.linav').removeClass('active');
		$('#event').addClass('active');
	});
	$('#org').click(function(){
		$('#loader').load("html/Organizers.html");
		$('.linav').removeClass('active');
		$('#org').addClass('active');
	});
	$('#map').click(function(){
		$('#loader').load("html/map.html");
		$('.linav').removeClass('active');
		$('#map').addClass('active');
		var test = $(window).height();
		$('#loader').height(test);
	});
	$('#myEvents').click(function(){
		$('#loader').load("html/MyEvents.html")
		$('.linav').removeClass('active');
	});
	$('#myOrgs').click(function(){
		$('#loader').load("html/MyOrganizations.html")
		$('.linav').removeClass('active');
	});
	$('#uEvents').click(function(){
		$('#loader').load("html/UpcomingEvents.html")
		$('.linav').removeClass('active');
	});
	$('#brandarea').click(function(){
		$('#loader').load("html/Main.html")
		$('.linav').removeClass('active');
	});
	$('#host').click(function(){
		$('#loader').load("html/EventAdmin.html");
		$('.linav').removeClass('active');
	});
	$('#signout').click(function(){
		$('#loader').load("auth.html");
		$('.linav').removeClass('active');
			var auth2 = gapi.auth.getAuthInstance();
		    auth.signOut().then(function () {
		      console.log('User signed out.');
		    });
		location.href = "http://localhost:8081/index.html"
	});
});