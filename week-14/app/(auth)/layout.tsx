/* eslint-disable import/no-anonymous-default-export */
import React from "react";

// eslint-disable-next-line react/display-name
export default function ({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="border-b p-1 text-center">
        20% off for the next 3 Days
      </div>
      {children}
    </div>
  );
}
