/*@ngInject*/
function cloakAuthDirective(authManager): any {
    return {
        restrict: 'A',
        link: function(scope, element) {
            element.addClass('hide');

            const deregistrationFn = scope.$watch(() => authManager.isInitialized, onChange);

            function onChange(isInitialized) {
                if (isInitialized) {
                    element.removeClass('hide');
                    deregistrationFn();
                }
            }
        }
    };
}

export default cloakAuthDirective;