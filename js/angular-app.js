/**
 * Created by Answer1215 on 9/2/2015.
 */
///////////////
// controller
//////////////

function RenderChartController($http){

    var vm = this;

    $http.jsonp('http://filltext.com/?rows=010&val={randomNumber}&callback=JSON_CALLBACK')
    .success(function (data) {
            vm.data = data;
        });

    $http.jsonp('http://filltext.com/?rows=010&val={randomNumber}&callback=JSON_CALLBACK')
        .success(function (data) {
            vm.data2 = data;
        });
}

//////////////
// directive
//////////////
function renderchart(){
    return {
        restrict: 'E',
        scope: {
            data: '=',
            id: '@'
        },
        link: function (scope, element, attrs) {
            scope.$watch('data', function (newVal, oldVal) {
                React.renderComponent(
                    App({data: scope.data, target: scope.id}),
                    element[0]
                )
            })
        }
    }
}

angular.module('app', [])

    .controller('RenderChartController',RenderChartController)
    .directive('renderchart', renderchart);
