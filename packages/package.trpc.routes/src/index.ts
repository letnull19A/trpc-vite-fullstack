import { createHTTPServer } from '@trpc/server/adapters/standalone'
import { initTRPC } from '@trpc/server'
import z from 'zod'
 
const t = initTRPC.create();
const router = t.router;
const publicProcedure = t.procedure;

const hobiesRouter = router({
  get: publicProcedure.query(async () => {
    return ['IT', 'CS', 'Half-Life']
  })
})

const groupRouter = router({
  get: publicProcedure.query(async () => {
    return ['CSharp', 'Котейки', 'Computer Sceince', 'Пикчи на все случаи жижи']
  }),
  getById: publicProcedure.input(z.string()).query(async () => {

  })
})

const userRouter = router({
  hobies: hobiesRouter,
  getUser: publicProcedure.query(async () => {
    return {name: 'Alex', surname: 'Wolkow'}
  })
})

export const appRouter = router({
    group: groupRouter,
    user: userRouter,
    createUsers: publicProcedure.query(async () => {
        return 'user created'
    }),
});

export type AppRouter = typeof appRouter;