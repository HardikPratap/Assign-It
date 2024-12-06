import React from "react";

function Loader() {
  return (
    <div className="flex items-center justify-center h-full w-full mb-5">
      <div
        className="h-3 w-3 rounded-full bg-neutral-100 animate-pulse"
        style={{ animationDelay: "-0.3s" }}
      ></div>
      <div
        className="h-3 w-3 rounded-full bg-neutral-100 animate-pulse ml-2"
        style={{ animationDelay: "-0.1s" }}
      ></div>
      <div
        className="h-3 w-3 rounded-full bg-neutral-100 animate-pulse ml-2"
        style={{ animationDelay: "0.1s" }}
      ></div>
      <div
        className="h-3 w-3 rounded-full bg-neutral-100 animate-pulse ml-2"
        style={{ animationDelay: "0.3s" }}
      ></div>
      <div
        className="h-3 w-3 rounded-full bg-neutral-100 animate-pulse ml-2"
        style={{ animationDelay: "0.5s" }}
      ></div>
    </div>
  );
}

export default Loader;