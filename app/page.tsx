import Component from "@/components/Component";
import React, { FC, Suspense } from "react";

const Page = () => {
  return (
    <div className="w-screen h-screen flex flex-col gap-4 justify-center items-center">
      <h1 className="text-2xl">This is static page content</h1>
      <Suspense fallback={<h2 className="text-2xl text-red-500">This is fallback </h2>}>
        <Component />
      </Suspense>
    </div>
  );
};

export default Page;
