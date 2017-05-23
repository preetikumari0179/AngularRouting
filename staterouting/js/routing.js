/**
 * Created by Cyan Krishan on 5/21/2017.
 */
angular.module('routingApp',['ui.router'])
       .config(function($stateProvider){
        $stateProvider
            .state('about',{
                templateUrl:'about.html',
                Abstract:true
            })
            .state('about.sectionOne',{
                url:'about/sectionOne',
                templateUrl:'sectionOne.html'
            })
            .state('about.sectionTwo',{
                url:'about/sectionTwo',
                templateUrl:'sectionTwo.html'
            })

    })