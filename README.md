# angular-color-picker
Angular (1.x) color-picker directive, based on Mozilla Color picker tool

[Mozzila Color Picker](https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_Colors/seletor_de_cores)

## Install

You can install this package with `npm`.

### npm

```shell
npm i color-picker-angular
```

Then add a `<script>` to your `index.html` after angular include:

```html
<link rel="stylesheet" type="text/css" href="/node_modules/color-picker-angular/dist/css/color-picker.min.css" />
<script src="/node_modules/color-picker-angular/dist/js/color-picker.min.js"></script>
```

## Adding dependency to your project

When you are done downloading all the dependencies and project files the only remaining part is to add dependencies on the ui.bootstrap AngularJS module:

```javascript
angular.module('myModule', ['angularColorPicker']);
```
### Example
```html
<html>
    <head>
    	<link rel="stylesheet" type="text/css" href="/node_modules/color-picker-angular/dist/css/color-picker.min.css" />
        <script type="text/javascript" src="/node_modules/angular/angular.min.js"></script>
        <script type="text/javascript" src="/node_modules/color-picker-angular/dist/js/color-picker.min.js"></script>
        <script type="text/javascript">
            angular.module('myModule', ['angularColorPicker'])
                .controller('myController', ['$scope',
                    function($scope){
                        $scope.color;
                    }
                ]);
        </script>
    </head>
    <body ng-app="myModule">
        <div ng-controller="myController">
		    <color-picker topic="'picker'" mode="'HSL'" color="color"></color-picker>
        </div>
	</body>
</html>
```
