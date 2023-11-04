import Component from "@/components/Component";
import React, { FC } from "react";

const Page = () => {
  return (
    <div className="w-screen h-screen flex flex-col gap-4 justify-center items-center">
      <h1 className="text-2xl">This is static page content</h1>
      <Component />
    </div>
  );
};

export default Page;
