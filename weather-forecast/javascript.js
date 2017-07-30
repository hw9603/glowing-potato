
/* Work only in HTTP */
$(document).ready(function() {
	$("#unit").text("C");
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(success);
	}
})

function success(position) {
	getWeather(position.coords.latitude, position.coords.longitude);
}

function getWeather(lat, lon) {
	var front = "https://fcc-weather-api.glitch.me/api/current?lat=";
	var back = "&lon=";
	$.ajax({
		url: front + lat + back + lon,
		success: function(result) {
			$("#temperature").text(Math.round(result.main.temp));
			$("#city").text(result.name);
			$("#country").text(result.sys.country);
			$("#type").text(result.weather[0].main);
			changebackground($("#type").text().toLowerCase());
		} 
	});
}

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
	if (type === 'mist'){
		type = 'haze';
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


function conv() {
	if ($("#unit").text() == "C") {
		$("#temperature").text(Math.round(parseInt($("#temperature").text()) * 9 / 5 + 32));
		$("#unit").text("F");
	} else {
		$("#temperature").text(Math.round((parseInt($("#temperature").text()) - 32) * 5 / 9));
		$("#unit").text("C");
	}
}

// var app = angular.module('weather', []);
// app.factory('api', function($http){
// 	var obj = {};
// 	return obj;
// });

// app.controller('myCtrl', function($scope, api) {
// 		$scope.search = function() {
// 			api.getWeather($scope.city).success(function(data){
// 				$scope.temperature = Math.round(data.main.temp);
// 				$scope.type = data.weather[0].main;
// 				var des = $scope.type.toLowerCase();
// 				changebackground(des);
// 			});
// 		}
// });



