import * as fs from 'fs';
var ServerEnvService = (function () {
    function ServerEnvService() {
    }
    Object.defineProperty(ServerEnvService.prototype, "env", {
        get: function () {
            fs.appendFileSync('log.txt', 'Hello from the server side!\n');
            return "Server!";
        },
        enumerable: true,
        configurable: true
    });
    return ServerEnvService;
}());
export { ServerEnvService };
