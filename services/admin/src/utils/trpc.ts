import { createTRPCReact } from "@trpc/react-query";
import { AppRouter } from "package.trpc.routes";

export const trpc = createTRPCReact<AppRouter>();