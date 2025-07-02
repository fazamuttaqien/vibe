import clsx from "clsx";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <main className="flex flex-col min-h-screen max-h-screen">
      <div
        className={clsx(
          "absolute inset-0 -z-10 h-full w-full bg-background",
          "dark:bg-[radial-gradient(#393E4A_1px,transparent_1px)]",
          "bg-[radial-gradient(#DADDE2_1px,transparent_1px)]",
          "[background-size:16px_16px]"
        )}
      />
      <div className="flex-1 flex flex-col px-4 pb-4">{children}</div>
    </main>
  );
};

export default Layout;
