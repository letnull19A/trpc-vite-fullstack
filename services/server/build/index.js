"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const standalone_1 = require("@trpc/server/adapters/standalone");
const package_trpc_routes_1 = require("package.trpc.routes");
const cors_1 = __importDefault(require("cors"));
(0, standalone_1.createHTTPServer)({
    middleware: (0, cors_1.default)(),
    router: package_trpc_routes_1.appRouter,
    createContext() {
        console.log('context 3');
        return {};
    },
}).listen(1224);
//# sourceMappingURL=index.js.map