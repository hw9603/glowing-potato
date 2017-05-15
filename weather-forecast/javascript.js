/* Work only in HTTP */
var app = angular.module('weather', []);
app.factory('api', function($http){
	var obj = {};
	
	/*obj.getLoc = function(){
		return $http.jsonp("http://ipinfo.io/json?callback=JSON_CALLBACK");
	}
	
	obj.getWeather = function(loc) {
		var front = "http://api.openweathermap.org/data/2.5/weather?q=";
		var back = "&units=metric&APPID=061f24cf3cde2f60644a8240302983f2&callback=JSON_CALLBACK";
		return $http.jsonp(front + loc + back);
	};*/

	obj.getWeather = function(loc){
		var front = "https://api.darksky.net/forecast/c5cf27d1be7c27634bf9eb9eb1e04159/";
		return $http.jsonp(front + loc + "/");
	}
	return obj;
});

app.controller('myCtrl', function($scope, api) {
		var currenttype;
		function iconShow(type){
			if (type === 'drizzle'){
				type = 'sprinkle';
			}
			if (type === 'clear'){
				type = 'sunny';
			}
			if (type === 'clouds'){
				type = 'cloudy';
			}
			$('div.wi').removeClass('wi-day-'+currenttype);
			currenttype = type;
			$('div.wi').addClass('wi-day-'+type);
		}
	
		function changebackground(des){
			switch (des){
					case "clear": 
						$('body').css({
							'background-image':'url(http://i3.irishmirror.ie/incoming/article6205885.ece/ALTERNATES/s1200/GettyImages-547063399.jpg)'
						});
						iconShow(des);
						break;
					case "drizzle":
						$('body').css({
							'background-image':'url(http://media.nbclosangeles.com/images/1200*754/rain-generic-umbrella-raindrops.jpg)',
							'background-size':'cover'
						});
						iconShow(des);
						break;
					case "thunderstorm":
						$('body').css({
							'background-image':'url(http://westseattleblog.com/blog/wp-content/uploads/2016/06/13509097_10210009487493079_8339602524865345475_n-652x367.jpg)',
							'background-size':'cover'
						});
						iconShow(des);
						break;
					case "clouds":
						$('body').css({
							'background-image':'url(http://portugalresident.com/sites/default/files/styles/node-detail/public/field/image/a-cloudy-day-lisa-plymell.jpg?itok=YqnGMoE1)',
							'background-size':'cover'
						});
						iconShow(des);
						break;
					case "snow":
						$('body').css({
							'background-image':'url(https://www.walldevil.com/wallpapers/a42/wallpapers-winter-reports-wallpaper-forecast-mac-weather-background-images.jpg)',
							'background-size':'cover'
						});
						iconShow(des);
						break;
					case "rain":
						$('body').css({
							'background-image':'url(http://loopassets.s3.amazonaws.com/styles/carousel_large/s3/thumbnails/image/rain_0.jpg?itok=N8uOabe5)',
							'background-size':'cover'
						});
						iconShow(des);
						break;
					default: 
						$('body').css({
							'background-image':'url(http://portugalresident.com/sites/default/files/styles/node-detail/public/field/image/a-cloudy-day-lisa-plymell.jpg?itok=YqnGMoE1)',
							'background-size':'cover'
						});
						iconShow(des);
				}
		}

		function go(pos){
		  	$.ajax({
			    type: "GET",
			    dataType: 'jsonp',
			    cache: false,
			    url: "https://api.forecast.io/forecast/5ac8fd301a1720fdf2c06ac555a2d2a2/" + pos,
			    success: function(data)
			    {
			      $scope.temperature = data.currently.temperature;
			      $scope.type = data.currently.icon;
			    }
			});
		}

		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function(position){
				$scope.$apply(function(){
					var pos = position.coords.latitude + "," + position.coords.longitude;
					console.log("debug: " + pos);
					go(pos);
				});
			});
		}
		
		
		$scope.search = function() {
			api.getWeather($scope.city).success(function(data){
				$scope.temperature = Math.round(data.main.temp);
				$scope.type = data.weather[0].main;
				var des = $scope.type.toLowerCase();
				changebackground(des);
			});
		}
	
		$scope.unit = "C";
		$scope.conv = function() {
				if ($scope.unit == "C"){
					$scope.temperature = Math.round($scope.temperature * 9 / 5 + 32);
					$scope.unit = "F";
				}
				else{
					$scope.temperature = Math.round(($scope.temperature - 32) * 5 / 9);
					$scope.unit = "C";
				}
    	};
});



