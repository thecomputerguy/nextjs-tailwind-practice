import React from "react";

const Main = () => {
  return (
    <main className="mt-12 lg:mt-32">
      <section className="container mx-auto px-6">
        <div className="w-full lg:flex items-center">
          <div className="w-full lg:w-1/2">
            <h2 className="text-md lg:text-2xl text-gray-600">
              Market Intelligence Solutions to
            </h2>
            <h1 className="text-5xl lg:text-6xl font-bold text-green-500 mb-2 lg:mb-6">
              Win your market
            </h1>
            <p className="text-md lg:text-xl font-light text-gray-800 mb-8">
              Powerful analytics tools for your business. See the exact keywords
              for which your competitors rank in organic search and the amount
              of traffic driven by each of them.
            </p>
          </div>
          <div className="w-full lg:w-1/2 lg:pl-24">
            <div className="mb-6">
              <label htmlFor="name" className="mb-3 block text-gray-700">
                Full name:
              </label>
              <input
                type="text"
                placeholder="John Doe"
                id="name"
                className="bg-white rounded-md border border-gray-200 p-3 focus:outline-none w-full"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="mb-3 block text-gray-700">
                Email:
              </label>
              <input
                type="text"
                placeholder="John@gmail.com"
                id="email"
                className="bg-white rounded-md border border-gray-200 p-3 focus:outline-none w-full"
              />
            </div>
            <div className="mb-8">
              <label
                htmlFor="company_size"
                className="mb-3 block text-gray-700"
              >
                Company Size:
              </label>
              <select
                name="company_size"
                id="company_size"
                className="bg-white rounded-md border border-gray-200 p-3 focus:outine-none w-full"
                required
              >
                <option value="">Select an option</option>
                <option value="1">1-10</option>
                <option value="2">10-50</option>
                <option value="3">50-100</option>
                <option value="4">100+</option>
              </select>
            </div>
            <button
              type="submit"
              className="py-3 px-12 bg-green-500 hover:bg-green-500 mr-5 rounded-md text-white text-lg focus:outline-none w-full"
            >
              Request Demo
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
