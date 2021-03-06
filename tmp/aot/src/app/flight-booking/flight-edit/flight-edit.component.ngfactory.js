/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
import * as import0 from '@angular/core';
import * as import1 from '../../shared/structural/tooltip.component.ngfactory';
import * as import2 from '../../../../../app/shared/structural/tooltip.component';
import * as import3 from '@angular/common';
import * as import4 from '../../../../../app/flight-booking/flight-edit/flight-edit.component';
import * as import5 from '@angular/forms';
import * as import6 from '../../../../../app/shared/warning/flight-click-with-warning.directive';
import * as import7 from '../../../../../app/shared/structural/tooltip2.directive';
import * as import8 from '../../../../../app/flight-booking/flight-search/flight.service';
import * as import9 from '@angular/router';
var styles_FlightEditComponent = [];
export var RenderType_FlightEditComponent = import0.ɵcrt({
    encapsulation: 2,
    styles: styles_FlightEditComponent,
    data: {}
});
function View_FlightEditComponent_1() {
    return import0.ɵvid(0, [
        import0.ɵeld(0, null, null, 13, 'div', [
            [
                'class',
                'alert alert-warning'
            ],
            [
                'style',
                'position: fixed; top:20px; width:400px; z-index:10'
            ]
        ], null, null, null, null, null),
        import0.ɵted(null, ['\n    ']),
        import0.ɵeld(0, null, null, 1, 'div', [], null, null, null, null, null),
        import0.ɵted(null, ['\n      Do you really want to leave?\n    ']),
        import0.ɵted(null, ['\n    ']),
        import0.ɵeld(0, null, null, 7, 'div', [], null, null, null, null, null),
        import0.ɵted(null, ['\n        ']),
        import0.ɵeld(0, null, null, 1, 'a', [
            [
                'class',
                'btn btn-danger'
            ],
            [
                'href',
                'javascript:void(0)'
            ]
        ], null, [[
                null,
                'click'
            ]
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('click' === eventName)) {
                var pd_0 = (comp.decide(true) !== false);
                allowDefault = (pd_0 && allowDefault);
            }
            return allowDefault;
        }, null, null),
        import0.ɵted(null, ['Sure']),
        import0.ɵted(null, ['\n        ']),
        import0.ɵeld(0, null, null, 1, 'a', [
            [
                'class',
                'btn btn-default'
            ],
            [
                'href',
                'javascript:void(0)'
            ]
        ], null, [[
                null,
                'click'
            ]
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('click' === eventName)) {
                var pd_0 = (comp.decide(false) !== false);
                allowDefault = (pd_0 && allowDefault);
            }
            return allowDefault;
        }, null, null),
        import0.ɵted(null, ['Nope']),
        import0.ɵted(null, ['\n    ']),
        import0.ɵted(null, ['\n'])
    ], null, null);
}
function View_FlightEditComponent_2() {
    return import0.ɵvid(0, [
        import0.ɵeld(0, null, null, 1, 'div', [], null, null, null, null, null),
        import0.ɵted(null, [
            '\n    ',
            '\n'
        ])
    ], null, function (check, view) {
        var comp = view.component;
        var currVal_0 = comp.message;
        check(view, 1, 0, currVal_0);
    });
}
function View_FlightEditComponent_3() {
    return import0.ɵvid(0, [
        import0.ɵted(null, ['\n        ']),
        import0.ɵeld(0, null, null, 2, 'flight-tooltip', [], null, null, null, import1.View_TooltipComponent_0, import1.RenderType_TooltipComponent),
        import0.ɵdid(24576, null, 0, import2.TooltipComponent, [], null, null),
        import0.ɵted(0, ['\n            This action is irreversible.\n        ']),
        import0.ɵted(null, ['\n        ']),
        import0.ɵted(null, ['\n    '])
    ], null, null);
}
export function View_FlightEditComponent_0() {
    return import0.ɵvid(0, [
        import0.ɵeld(0, null, null, 1, 'h1', [], null, null, null, null, null),
        import0.ɵted(null, ['Edit Flight']),
        import0.ɵted(null, ['\n\n']),
        import0.ɵand(8388608, null, null, 1, null, View_FlightEditComponent_1),
        import0.ɵdid(8192, null, 0, import3.NgIf, [
            import0.ViewContainerRef,
            import0.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        import0.ɵted(null, ['\n\n']),
        import0.ɵted(null, ['\n']),
        import0.ɵand(8388608, null, null, 1, null, View_FlightEditComponent_2),
        import0.ɵdid(8192, null, 0, import3.NgIf, [
            import0.ViewContainerRef,
            import0.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        import0.ɵted(null, ['\n\n']),
        import0.ɵeld(0, null, null, 11, 'div', [[
                'class',
                'form-group'
            ]
        ], null, null, null, null, null),
        import0.ɵted(null, ['\n    ']),
        import0.ɵeld(0, null, null, 1, 'label', [], null, null, null, null, null),
        import0.ɵted(null, ['Id']),
        import0.ɵted(null, ['\n    ']),
        import0.ɵeld(0, null, null, 5, 'input', [[
                'class',
                'form-control'
            ]
        ], [
            [
                1,
                'ng-untouched'
            ],
            [
                1,
                'ng-touched'
            ],
            [
                1,
                'ng-pristine'
            ],
            [
                1,
                'ng-dirty'
            ],
            [
                1,
                'ng-valid'
            ],
            [
                1,
                'ng-invalid'
            ],
            [
                1,
                'ng-pending'
            ]
        ], [
            [
                null,
                'ngModelChange'
            ],
            [
                null,
                'input'
            ],
            [
                null,
                'blur'
            ],
            [
                null,
                'compositionstart'
            ],
            [
                null,
                'compositionend'
            ]
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('input' === eventName)) {
                var pd_0 = (import0.ɵnov(view, 16).onChange($event.target.value) !== false);
                allowDefault = (pd_0 && allowDefault);
            }
            if (('blur' === eventName)) {
                var pd_1 = (import0.ɵnov(view, 16).onTouched() !== false);
                allowDefault = (pd_1 && allowDefault);
            }
            if (('compositionstart' === eventName)) {
                var pd_2 = (import0.ɵnov(view, 18).compositionStart() !== false);
                allowDefault = (pd_2 && allowDefault);
            }
            if (('compositionend' === eventName)) {
                var pd_3 = (import0.ɵnov(view, 18).compositionEnd() !== false);
                allowDefault = (pd_3 && allowDefault);
            }
            if (('ngModelChange' === eventName)) {
                var pd_4 = ((comp.flight.id = $event) !== false);
                allowDefault = (pd_4 && allowDefault);
            }
            return allowDefault;
        }, null, null),
        import0.ɵdid(8192, null, 0, import5.DefaultValueAccessor, [
            import0.Renderer,
            import0.ElementRef
        ], null, null),
        import0.ɵprd(512, null, import5.NG_VALUE_ACCESSOR, function (p0_0) {
            return [p0_0];
        }, [import5.DefaultValueAccessor]),
        import0.ɵdid(335872, null, 0, import5.NgModel, [
            [
                8,
                null
            ],
            [
                8,
                null
            ],
            [
                8,
                null
            ],
            [
                2,
                import5.NG_VALUE_ACCESSOR
            ]
        ], { model: [
                0,
                'model'
            ]
        }, { update: 'ngModelChange' }),
        import0.ɵprd(1024, null, import5.NgControl, null, [import5.NgModel]),
        import0.ɵdid(8192, null, 0, import5.NgControlStatus, [import5.NgControl], null, null),
        import0.ɵted(null, ['\n']),
        import0.ɵted(null, ['\n']),
        import0.ɵeld(0, null, null, 11, 'div', [[
                'class',
                'form-group'
            ]
        ], null, null, null, null, null),
        import0.ɵted(null, ['\n    ']),
        import0.ɵeld(0, null, null, 1, 'label', [], null, null, null, null, null),
        import0.ɵted(null, ['From']),
        import0.ɵted(null, ['\n    ']),
        import0.ɵeld(0, null, null, 5, 'input', [[
                'class',
                'form-control'
            ]
        ], [
            [
                1,
                'ng-untouched'
            ],
            [
                1,
                'ng-touched'
            ],
            [
                1,
                'ng-pristine'
            ],
            [
                1,
                'ng-dirty'
            ],
            [
                1,
                'ng-valid'
            ],
            [
                1,
                'ng-invalid'
            ],
            [
                1,
                'ng-pending'
            ]
        ], [
            [
                null,
                'ngModelChange'
            ],
            [
                null,
                'input'
            ],
            [
                null,
                'blur'
            ],
            [
                null,
                'compositionstart'
            ],
            [
                null,
                'compositionend'
            ]
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('input' === eventName)) {
                var pd_0 = (import0.ɵnov(view, 29).onChange($event.target.value) !== false);
                allowDefault = (pd_0 && allowDefault);
            }
            if (('blur' === eventName)) {
                var pd_1 = (import0.ɵnov(view, 29).onTouched() !== false);
                allowDefault = (pd_1 && allowDefault);
            }
            if (('compositionstart' === eventName)) {
                var pd_2 = (import0.ɵnov(view, 31).compositionStart() !== false);
                allowDefault = (pd_2 && allowDefault);
            }
            if (('compositionend' === eventName)) {
                var pd_3 = (import0.ɵnov(view, 31).compositionEnd() !== false);
                allowDefault = (pd_3 && allowDefault);
            }
            if (('ngModelChange' === eventName)) {
                var pd_4 = ((comp.flight.from = $event) !== false);
                allowDefault = (pd_4 && allowDefault);
            }
            return allowDefault;
        }, null, null),
        import0.ɵdid(8192, null, 0, import5.DefaultValueAccessor, [
            import0.Renderer,
            import0.ElementRef
        ], null, null),
        import0.ɵprd(512, null, import5.NG_VALUE_ACCESSOR, function (p0_0) {
            return [p0_0];
        }, [import5.DefaultValueAccessor]),
        import0.ɵdid(335872, null, 0, import5.NgModel, [
            [
                8,
                null
            ],
            [
                8,
                null
            ],
            [
                8,
                null
            ],
            [
                2,
                import5.NG_VALUE_ACCESSOR
            ]
        ], { model: [
                0,
                'model'
            ]
        }, { update: 'ngModelChange' }),
        import0.ɵprd(1024, null, import5.NgControl, null, [import5.NgModel]),
        import0.ɵdid(8192, null, 0, import5.NgControlStatus, [import5.NgControl], null, null),
        import0.ɵted(null, ['\n']),
        import0.ɵted(null, ['\n']),
        import0.ɵeld(0, null, null, 11, 'div', [[
                'class',
                'form-group'
            ]
        ], null, null, null, null, null),
        import0.ɵted(null, ['\n    ']),
        import0.ɵeld(0, null, null, 1, 'label', [], null, null, null, null, null),
        import0.ɵted(null, ['To']),
        import0.ɵted(null, ['\n    ']),
        import0.ɵeld(0, null, null, 5, 'input', [[
                'class',
                'form-control'
            ]
        ], [
            [
                1,
                'ng-untouched'
            ],
            [
                1,
                'ng-touched'
            ],
            [
                1,
                'ng-pristine'
            ],
            [
                1,
                'ng-dirty'
            ],
            [
                1,
                'ng-valid'
            ],
            [
                1,
                'ng-invalid'
            ],
            [
                1,
                'ng-pending'
            ]
        ], [
            [
                null,
                'ngModelChange'
            ],
            [
                null,
                'input'
            ],
            [
                null,
                'blur'
            ],
            [
                null,
                'compositionstart'
            ],
            [
                null,
                'compositionend'
            ]
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('input' === eventName)) {
                var pd_0 = (import0.ɵnov(view, 42).onChange($event.target.value) !== false);
                allowDefault = (pd_0 && allowDefault);
            }
            if (('blur' === eventName)) {
                var pd_1 = (import0.ɵnov(view, 42).onTouched() !== false);
                allowDefault = (pd_1 && allowDefault);
            }
            if (('compositionstart' === eventName)) {
                var pd_2 = (import0.ɵnov(view, 44).compositionStart() !== false);
                allowDefault = (pd_2 && allowDefault);
            }
            if (('compositionend' === eventName)) {
                var pd_3 = (import0.ɵnov(view, 44).compositionEnd() !== false);
                allowDefault = (pd_3 && allowDefault);
            }
            if (('ngModelChange' === eventName)) {
                var pd_4 = ((comp.flight.to = $event) !== false);
                allowDefault = (pd_4 && allowDefault);
            }
            return allowDefault;
        }, null, null),
        import0.ɵdid(8192, null, 0, import5.DefaultValueAccessor, [
            import0.Renderer,
            import0.ElementRef
        ], null, null),
        import0.ɵprd(512, null, import5.NG_VALUE_ACCESSOR, function (p0_0) {
            return [p0_0];
        }, [import5.DefaultValueAccessor]),
        import0.ɵdid(335872, null, 0, import5.NgModel, [
            [
                8,
                null
            ],
            [
                8,
                null
            ],
            [
                8,
                null
            ],
            [
                2,
                import5.NG_VALUE_ACCESSOR
            ]
        ], { model: [
                0,
                'model'
            ]
        }, { update: 'ngModelChange' }),
        import0.ɵprd(1024, null, import5.NgControl, null, [import5.NgModel]),
        import0.ɵdid(8192, null, 0, import5.NgControlStatus, [import5.NgControl], null, null),
        import0.ɵted(null, ['\n']),
        import0.ɵted(null, ['\n']),
        import0.ɵeld(0, null, null, 11, 'div', [[
                'class',
                'form-group'
            ]
        ], null, null, null, null, null),
        import0.ɵted(null, ['\n    ']),
        import0.ɵeld(0, null, null, 1, 'label', [], null, null, null, null, null),
        import0.ɵted(null, ['Datum']),
        import0.ɵted(null, ['\n    ']),
        import0.ɵeld(0, null, null, 5, 'input', [[
                'class',
                'form-control'
            ]
        ], [
            [
                1,
                'ng-untouched'
            ],
            [
                1,
                'ng-touched'
            ],
            [
                1,
                'ng-pristine'
            ],
            [
                1,
                'ng-dirty'
            ],
            [
                1,
                'ng-valid'
            ],
            [
                1,
                'ng-invalid'
            ],
            [
                1,
                'ng-pending'
            ]
        ], [
            [
                null,
                'ngModelChange'
            ],
            [
                null,
                'input'
            ],
            [
                null,
                'blur'
            ],
            [
                null,
                'compositionstart'
            ],
            [
                null,
                'compositionend'
            ]
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('input' === eventName)) {
                var pd_0 = (import0.ɵnov(view, 55).onChange($event.target.value) !== false);
                allowDefault = (pd_0 && allowDefault);
            }
            if (('blur' === eventName)) {
                var pd_1 = (import0.ɵnov(view, 55).onTouched() !== false);
                allowDefault = (pd_1 && allowDefault);
            }
            if (('compositionstart' === eventName)) {
                var pd_2 = (import0.ɵnov(view, 57).compositionStart() !== false);
                allowDefault = (pd_2 && allowDefault);
            }
            if (('compositionend' === eventName)) {
                var pd_3 = (import0.ɵnov(view, 57).compositionEnd() !== false);
                allowDefault = (pd_3 && allowDefault);
            }
            if (('ngModelChange' === eventName)) {
                var pd_4 = ((comp.flight.date = $event) !== false);
                allowDefault = (pd_4 && allowDefault);
            }
            return allowDefault;
        }, null, null),
        import0.ɵdid(8192, null, 0, import5.DefaultValueAccessor, [
            import0.Renderer,
            import0.ElementRef
        ], null, null),
        import0.ɵprd(512, null, import5.NG_VALUE_ACCESSOR, function (p0_0) {
            return [p0_0];
        }, [import5.DefaultValueAccessor]),
        import0.ɵdid(335872, null, 0, import5.NgModel, [
            [
                8,
                null
            ],
            [
                8,
                null
            ],
            [
                8,
                null
            ],
            [
                2,
                import5.NG_VALUE_ACCESSOR
            ]
        ], { model: [
                0,
                'model'
            ]
        }, { update: 'ngModelChange' }),
        import0.ɵprd(1024, null, import5.NgControl, null, [import5.NgModel]),
        import0.ɵdid(8192, null, 0, import5.NgControlStatus, [import5.NgControl], null, null),
        import0.ɵted(null, ['\n']),
        import0.ɵted(null, ['\n']),
        import0.ɵeld(0, null, null, 11, 'div', [[
                'class',
                'form-group'
            ]
        ], null, null, null, null, null),
        import0.ɵted(null, ['\n    ']),
        import0.ɵeld(0, null, null, 1, 'button', [[
                'class',
                'btn btn-primary'
            ]
        ], null, [[
                null,
                'click'
            ]
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('click' === eventName)) {
                var pd_0 = (comp.save() !== false);
                allowDefault = (pd_0 && allowDefault);
            }
            return allowDefault;
        }, null, null),
        import0.ɵted(null, ['Save']),
        import0.ɵted(null, ['\n    ']),
        import0.ɵeld(8388608, null, null, 3, 'button', [[
                'flightTooltip2',
                'This action is irreversible!'
            ]
        ], null, [
            [
                null,
                'flightClickWithWarning'
            ],
            [
                null,
                'click'
            ],
            [
                null,
                'mouseover'
            ],
            [
                null,
                'mouseout'
            ]
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('click' === eventName)) {
                var pd_0 = (import0.ɵnov(view, 68).handleClick($event) !== false);
                allowDefault = (pd_0 && allowDefault);
            }
            if (('mouseover' === eventName)) {
                var pd_1 = (import0.ɵnov(view, 69).handleMouseover($event) !== false);
                allowDefault = (pd_1 && allowDefault);
            }
            if (('mouseout' === eventName)) {
                var pd_2 = (import0.ɵnov(view, 69).handleMouseout() !== false);
                allowDefault = (pd_2 && allowDefault);
            }
            if (('flightClickWithWarning' === eventName)) {
                var pd_3 = (comp.remove() !== false);
                allowDefault = (pd_3 && allowDefault);
            }
            return allowDefault;
        }, null, null),
        import0.ɵdid(40960, null, 0, import6.FlightClickWithWarningDirective, [
            import0.ElementRef,
            import0.Renderer
        ], null, { flightClickWithWarning: 'flightClickWithWarning' }),
        import0.ɵdid(8192, null, 0, import7.Tooltip2Directive, [
            import0.ViewContainerRef,
            import0.Renderer,
            import0.Injector,
            import0.ComponentFactoryResolver
        ], { message: [
                0,
                'message'
            ]
        }, null),
        import0.ɵted(null, ['Remove']),
        import0.ɵted(null, ['\n    ']),
        import0.ɵand(0, [[
                'tooltip',
                2
            ]
        ], null, 0, null, View_FlightEditComponent_3),
        import0.ɵted(null, ['\n']),
        import0.ɵted(null, ['\n']),
        import0.ɵted(null, ['\n'])
    ], function (check, view) {
        var comp = view.component;
        var currVal_0 = comp.exitWarning.show;
        check(view, 4, 0, currVal_0);
        var currVal_1 = comp.message;
        check(view, 8, 0, currVal_1);
        var currVal_2 = comp.flight.id;
        check(view, 18, 0, currVal_2);
        var currVal_3 = comp.flight.from;
        check(view, 31, 0, currVal_3);
        var currVal_4 = comp.flight.to;
        check(view, 44, 0, currVal_4);
        var currVal_5 = comp.flight.date;
        check(view, 57, 0, currVal_5);
        check(view, 68, 0);
        var currVal_6 = 'This action is irreversible!';
        check(view, 69, 0, currVal_6);
    }, function (check, view) {
        var comp = view.component;
        var currVal_0 = import0.ɵnov(view, 20).ngClassUntouched;
        var currVal_1 = import0.ɵnov(view, 20).ngClassTouched;
        var currVal_2 = import0.ɵnov(view, 20).ngClassPristine;
        var currVal_3 = import0.ɵnov(view, 20).ngClassDirty;
        var currVal_4 = import0.ɵnov(view, 20).ngClassValid;
        var currVal_5 = import0.ɵnov(view, 20).ngClassInvalid;
        var currVal_6 = import0.ɵnov(view, 20).ngClassPending;
        check(view, 15, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);
        var currVal_7 = import0.ɵnov(view, 33).ngClassUntouched;
        var currVal_8 = import0.ɵnov(view, 33).ngClassTouched;
        var currVal_9 = import0.ɵnov(view, 33).ngClassPristine;
        var currVal_10 = import0.ɵnov(view, 33).ngClassDirty;
        var currVal_11 = import0.ɵnov(view, 33).ngClassValid;
        var currVal_12 = import0.ɵnov(view, 33).ngClassInvalid;
        var currVal_13 = import0.ɵnov(view, 33).ngClassPending;
        check(view, 28, 0, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13);
        var currVal_14 = import0.ɵnov(view, 46).ngClassUntouched;
        var currVal_15 = import0.ɵnov(view, 46).ngClassTouched;
        var currVal_16 = import0.ɵnov(view, 46).ngClassPristine;
        var currVal_17 = import0.ɵnov(view, 46).ngClassDirty;
        var currVal_18 = import0.ɵnov(view, 46).ngClassValid;
        var currVal_19 = import0.ɵnov(view, 46).ngClassInvalid;
        var currVal_20 = import0.ɵnov(view, 46).ngClassPending;
        check(view, 41, 0, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20);
        var currVal_21 = import0.ɵnov(view, 59).ngClassUntouched;
        var currVal_22 = import0.ɵnov(view, 59).ngClassTouched;
        var currVal_23 = import0.ɵnov(view, 59).ngClassPristine;
        var currVal_24 = import0.ɵnov(view, 59).ngClassDirty;
        var currVal_25 = import0.ɵnov(view, 59).ngClassValid;
        var currVal_26 = import0.ɵnov(view, 59).ngClassInvalid;
        var currVal_27 = import0.ɵnov(view, 59).ngClassPending;
        check(view, 54, 0, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27);
    });
}
var RenderType_FlightEditComponent_Host = import0.ɵcrt({
    encapsulation: 2,
    styles: [],
    data: {}
});
function View_FlightEditComponent_Host_0() {
    return import0.ɵvid(0, [
        import0.ɵeld(0, null, null, 1, 'ng-component', [], null, null, null, View_FlightEditComponent_0, RenderType_FlightEditComponent),
        import0.ɵdid(57344, null, 0, import4.FlightEditComponent, [
            import8.FlightService,
            import9.ActivatedRoute
        ], null, null)
    ], function (check, view) {
        check(view, 1, 0);
    }, null);
}
export var FlightEditComponentNgFactory = import0.ɵccf('ng-component', import4.FlightEditComponent, View_FlightEditComponent_Host_0);
