import React from "react";

const card = () => {
  return (
    <div className="pt-5">
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <img
          src="https://images.unsplash.com/photo-1577995244320-51ab16d43c96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=667&q=80"
          alt="Image is missing dude!"
          className="w-full"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            Tailwind css for absolute beginners
          </div>
          <p className="text-gray-700 text-base">
            Tailwind is a utility first css framework. In contrast to other CSS
            frameworks like Bootstrap or Materialize CSS it doesn’t come with
            predefined components. Instead Tailwind CSS operates on a lower
            level and provides you with a set of CSS helper classes. By using
            this classes you can rapidly create custom design with ease.
            Tailwind CSS is not opinionated and let’s you create you own unique
            design.
          </p>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #tailwindcss
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #css
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #webdevelopment
          </span>
        </div>
      </div>
    </div>
  );
};

export default card;
