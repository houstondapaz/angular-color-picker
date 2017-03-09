angular.module('angularColorPicker', [])
    .directive('colorPicker', function () {
        return {
            restrict: 'E',
            scope: {
                topic: '=',
                mode: '=',
                color: '='
            },
            link: function ($scope, $element) {
                $element.addClass('ui-color-picker');

                var element = $element[0];
                var options = { topic: $scope.topic, mode: $scope.mode };

                var picker = new UIColorPicker.init(element, options);

                if ($scope.color)
                    picker.setColor($scope.color);

                UIColorPicker.subscribe($scope.topic, function (value) {
                    $scope.color = value;
                    $scope.$apply();
                });
            }
        };
    });
