import { caller } from "@/trpc/server";

export default async function Home() {
  const data = await caller.createAI({ text: "FM Server" });

  return <div>{JSON.stringify(data)}</div>;
}
