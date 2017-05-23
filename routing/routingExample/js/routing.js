/**
 * Created by Cyan Krishan on 5/21/2017.
 */
angular.module('routingApp',['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/about', {
                templateUrl: 'about.html',
                controller: 'aboutController'
            })
            .when('/services', {
                templateUrl: 'services.html',
                controller: 'serviceController'
            })
            .when('/portfolio',{
                templateUrl: 'portfolio.html',
                controller: 'portfolioController'
            })
            .when('/contact',{
                templateUrl:'contact.html',
                controller:'contactController'
            })
    })
    .controller('routingCntrl', function(){

    })
    .controller('aboutController',['$scope',function($scope){

    }])
    .controller('serviceController',['$scope',function($scope){

    }])
    .controller('portfolioController',['$scope',function($scope){
        $scope.img=["img/portfolio/fullsize/1.jpg","img/portfolio/fullsize/2.jpg","img/portfolio/fullsize/3.jpg","img/portfolio/fullsize/4.jpg","img/portfolio/fullsize/5.jpg","img/portfolio/fullsize/6.jpg"]
    }])
    .controller('contactController',['$scope',function($scope){

    }])