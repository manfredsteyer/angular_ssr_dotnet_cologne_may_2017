/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
import * as import0 from '@angular/core';
import * as import1 from '../../../../app/home/home.component';
import * as import2 from '@angular/router';
import * as import3 from '../../../../app/shared/env/env.service';
var styles_HomeComponent = [];
export var RenderType_HomeComponent = import0.ɵcrt({
    encapsulation: 2,
    styles: styles_HomeComponent,
    data: {}
});
export function View_HomeComponent_0() {
    return import0.ɵvid(0, [
        import0.ɵeld(0, null, null, 1, 'h1', [], null, null, null, null, null),
        import0.ɵted(null, ['Welcome!']),
        import0.ɵted(null, ['\n']),
        import0.ɵeld(0, null, null, 1, 'p', [], null, null, null, null, null),
        import0.ɵted(null, [
            'Env: ',
            ''
        ])
    ], null, function (check, view) {
        var comp = view.component;
        var currVal_0 = comp.env;
        check(view, 4, 0, currVal_0);
    });
}
var RenderType_HomeComponent_Host = import0.ɵcrt({
    encapsulation: 2,
    styles: [],
    data: {}
});
function View_HomeComponent_Host_0() {
    return import0.ɵvid(0, [
        import0.ɵeld(0, null, null, 1, 'ng-component', [], null, null, null, View_HomeComponent_0, RenderType_HomeComponent),
        import0.ɵdid(57344, null, 0, import1.HomeComponent, [
            import2.ActivatedRoute,
            import3.EnvService
        ], null, null)
    ], function (check, view) {
        check(view, 1, 0);
    }, null);
}
export var HomeComponentNgFactory = import0.ɵccf('ng-component', import1.HomeComponent, View_HomeComponent_Host_0);
