import { useState } from "react";
import { useGetProducts } from "../hooks/useGetProducts";

const SearchPage = () => {
  const [searchText, setSearchText] = useState("");
  const { loading, products } = useGetProducts();

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex gap-4 mb-6 items-center justify-center">
        <input
          className="py-3 px-5 w-full max-w-md border border-gray-300 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition duration-300"
          type="text"
          placeholder="Search for products..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-300">
          Search
        </button>
      </div>
      {loading ? (
        <div className="flex items-center justify-center min-h-[50vh]">
          <div className="flex flex-row gap-2">
            <div className="w-4 h-4 rounded-full bg-blue-500 animate-bounce"></div>
            <div className="w-4 h-4 rounded-full bg-purple-500 animate-bounce [animation-delay:-.3s]"></div>
            <div className="w-4 h-4 rounded-full bg-red-500 animate-bounce [animation-delay:-.5s]"></div>
          </div>
          <span className="ml-4 text-lg font-semibold text-gray-700">Loading...</span>
        </div>
      ) : (
        <div>
          <h1 className="my-6 text-4xl font-bold text-center text-gray-800">Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {products.map(({ _id, title, price, stock }) => {
              return (
                <div
                  key={_id}
                  className="border border-gray-300 rounded-lg p-6 bg-white shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center gap-4"
                >
                  <h2 className="text-center text-xl font-semibold text-gray-800">{title}</h2>
                  <p className="text-lg text-gray-600">Rs. {price}</p>
                  <p
                    className={`text-sm font-medium ${
                      stock > 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {stock > 0 ? `In Stock: ${stock}` : "Out of Stock"}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export { SearchPage };
