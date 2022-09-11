// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { exampleRouter } from "./example";
import { postsRouter } from "./posts";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("example.", exampleRouter)
  .merge("posts.", postsRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
