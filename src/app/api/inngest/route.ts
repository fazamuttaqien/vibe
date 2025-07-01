import { serve } from "inngest/next";
import { inngest } from "@/inngest/client";
import { helloworld } from "../../../inngest/functions";

// Create an API that serves zero function
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [helloworld],
});
