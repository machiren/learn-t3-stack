import { createRouter } from "../context";
import { z } from "zod";

export const postsRouter = createRouter()
  .query("findMany", {
    resolve({ input }) {
      return [{ id: 1, title: 'post_1' }, { id: 2, title: 'post_2' }, { id: 3, title: 'post_3' }];
    },
  })
  .query("findOne", {
    input: z
      .object({
        id: z.number().nullish(),
      }),
    async resolve({ input }) {
      console.log(input.id);
      return { id: 1, title: 'post_1' };
    },
  });
