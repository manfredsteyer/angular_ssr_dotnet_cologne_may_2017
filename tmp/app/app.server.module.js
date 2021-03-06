import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';
import { EnvService } from './shared/env/env.service';
import { ServerEnvService } from './shared/env/server.env.service';
var AppServerModule = (function () {
    function AppServerModule() {
    }
    return AppServerModule;
}());
export { AppServerModule };
AppServerModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    ServerModule,
                    AppModule
                ],
                bootstrap: [
                    AppComponent
                ],
                providers: [
                    //   { provide: NgModuleFactoryLoader, useClass: ServerRouterLoader }
                    { provide: APP_BASE_HREF, useValue: '/' },
                    { provide: EnvService, useClass: ServerEnvService }
                ]
            },] },
];
/** @nocollapse */
AppServerModule.ctorParameters = function () { return []; };
