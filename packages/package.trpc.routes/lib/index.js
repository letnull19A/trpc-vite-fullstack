"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRouter = void 0;
const server_1 = require("@trpc/server");
const zod_1 = __importDefault(require("zod"));
const t = server_1.initTRPC.create();
const router = t.router;
const publicProcedure = t.procedure;
const hobiesRouter = router({
    get: publicProcedure.query(async () => {
        return ['IT', 'CS', 'Half-Life'];
    })
});
const groupRouter = router({
    get: publicProcedure.query(async () => {
        return ['CSharp', 'Котейки', 'Computer Sceince', 'Пикчи на все случаи жижи'];
    }),
    getById: publicProcedure.input(zod_1.default.string()).query(async () => {
    })
});
const userRouter = router({
    hobies: hobiesRouter,
    getUser: publicProcedure.query(async () => {
        return { name: 'Alex', surname: 'Wolkow' };
    })
});
exports.appRouter = router({
    group: groupRouter,
    user: userRouter,
    createUsers: publicProcedure.query(async () => {
        return 'user created';
    }),
});
