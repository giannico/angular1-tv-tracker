const NG_HIDE_CLASS = 'ng-hide';
const NG_HIDE_IN_PROGRESS_CLASS = 'ng-hide-animate';

/*@ngInject*/
function showAuthDirective($animate, authManager) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            scope.$watch(() => authManager.isAuthenticated(), function(value) {
                $animate[value ? 'removeClass' : 'addClass'](element, NG_HIDE_CLASS, {
                    tempClasses: NG_HIDE_IN_PROGRESS_CLASS
                });
            });
        }
    };
}

export default showAuthDirective;
