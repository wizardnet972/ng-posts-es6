import angular from 'angular';

let angularTrix = () => {
    return {
        restrict: 'A',
        require: 'ngModel',
        scope: {
            trixInitialize: '&',
            trixChange: '&',
            trixSelectionChange: '&',
            trixFocus: '&',
            trixBlur: '&',
            trixFileAccept: '&',
            trixAttachmentAdd: '&',
            trixAttachmentRemove: '&'
        },
        link: function (scope, element, attrs, ngModel) {
            console.log('in dire');
            // @wizardnet972: my fix for this fucking lib..
            element = angular.element(element[0].parentElement.getElementsByTagName('trix-editor')) || element[0];

            element.on('trix-initialize', function () {
                if (ngModel.$modelValue) {
                    element[0].editor.loadHTML(ngModel.$modelValue);
                }
            });

            ngModel.$render = function () {
                if (element[0].editor) {
                    element[0].editor.loadHTML(ngModel.$modelValue);
                }

                element.on('trix-change', function () {
                    ngModel.$setViewValue(element.html());
                });
            };

            var registerEvents = function (type, method) {
                element[0].addEventListener(type, function (e) {
                    if (type === 'trix-file-accept' && attrs.preventTrixFileAccept === 'true') {
                        e.preventDefault();
                    }

                    scope[method]({
                        e: e,
                        editor: element[0].editor
                    });
                });
            };

            registerEvents('trix-initialize', 'trixInitialize');
            registerEvents('trix-change', 'trixChange');
            registerEvents('trix-selection-change', 'trixSelectionChange');
            registerEvents('trix-focus', 'trixFocus');
            registerEvents('trix-blur', 'trixBlur');
            registerEvents('trix-file-accept', 'trixFileAccept');
            registerEvents('trix-attachment-add', 'trixAttachmentAdd');
            registerEvents('trix-attachment-remove', 'trixAttachmentRemove');
        }
    };
};

const MODULE_NAMER = 'angularTrix';

angular.module(MODULE_NAMER, [])
    .directive('angularTrix', angularTrix);

export default MODULE_NAMER;