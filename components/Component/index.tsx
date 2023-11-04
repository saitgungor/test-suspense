"use client";
import React, { FC } from "react";

const Component: FC = () => {
  async function waitForThreeSeconds() {
    await new Promise((resolve) => setTimeout(resolve, 3000)); // Wait for 3 seconds
    return "Done waiting after 3 seconds!"; // Update the state
  }
  const a = waitForThreeSeconds();
  return (
    <div className="text-2xl text-blue-400">
      <h5> This is components data</h5>
      <h5>{a}</h5>
    </div>
  );
};

export default Component;
