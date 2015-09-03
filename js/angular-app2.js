/**
 * Created by Answer1215 on 9/3/2015.
 */

///////////////////
// directive
///////////////////

function renderchart(){
    return {
        scope: {
            data: '=',
            id: '@'
        },
        link: function (scope, elm, attrs) {
            scope.$watch('data', function (newVal, oldVal) {
                React.renderComponent(
                    App({data: scope.data, target: scope.id}),
                    elm[0]
                );
            });
        }
    };
}

function RenderChartController($http, $scope){
    $http.jsonp('http://filltext.com/?rows=010&val={randomNumber}&callback=JSON_CALLBACK')
        .success(function (data) {
            $scope.data = data;
        })
}

angular.module('app', [])

    .controller('RenderChartController', RenderChartController)
    .directive('renderchart', renderchart);