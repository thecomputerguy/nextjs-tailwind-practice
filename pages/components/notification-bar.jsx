import React from "react";

const NotificationBar = () => {
  return (
    <div className="bg-blue-900 text-center py-4 lg:px-4">
      <div
        className="p-2 bg-blue-800 items-center text-blue-100 leading-none lg:rounded-full flex lg:inline-flex"
        role="alert"
      >
        <span className="flex rounded-full bg-blue-500 uppercase font-bold px-2 py-1 text-xs mr-3">
          New
        </span>
        <span className="font-semibold mr-2 text-left flex-auto">
          Tailwind css is super cool!
        </span>
      </div>
    </div>
  );
};

export default NotificationBar;
