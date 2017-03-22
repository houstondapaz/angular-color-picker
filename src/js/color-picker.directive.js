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
                var options = { topic: $scope.topic, mode: $scope.mode, color: $scope.color };

                var picker = new UIColorPicker.init(element, options);

                picker.setPickerMode($scope.mode);

                UIColorPicker.subscribe($scope.topic, function (value) {
                    $scope.color = value;
                    $scope.$apply();
                });
            }
        };
    });
