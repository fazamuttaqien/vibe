import { createTRPCRouter } from "../init";

import { messageRouter } from "@/modules/messages/server/procedure";
import { projectRouter } from "@/modules/projects/server/procedure";
import { usageRouter } from "@/modules/usage/server/procedure";

export const appRouter = createTRPCRouter({
  messages: messageRouter,
  projects: projectRouter,
  usage: usageRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
