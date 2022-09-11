import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Global Container */}
      <div className="flex items-center justify-center min-h-screen bg-cyan-50">
        {/* Card  */}
        <div className="bg-white p-6 m-3 space-y-10 shadow-2xl rounded-3xl md:p-40">
          {/* Menu */}
          <div className="flex flex-col items-center justify-center space-y-3 md:flex-row md:space-y-0 md:space-x-8 md:mb-24 md:justify-end">
            {/* Menu Items */}
            <div className="group">
              <a href="#">Vector</a>
              <div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
            </div>

            <div className="group">
              <a href="#">Illustrations</a>
              <div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
            </div>

            <div className="group">
              <a href="#">Images</a>
              <div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
            </div>

            <div className="group">
              <a href="#">Icons</a>
              <div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
            </div>
          </div>

          {/* Search */}
          <div className="flex flex-col justify-between space-y-5 md:flex-row md:space-y-0">
            {/* Input and Search Icon */}
            <div className="flex justify-between border-b">
              <input
                className="ml-6 border-none md:w-80 placeholder:font-thin focus:outline-none"
                placeholder="Search"
              />
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </button>
            </div>

            {/* Upload Button */}
            <button className="py-3 px-14 text-lg font-normal text-white bg-black border border-black rounded-md shadow-2xl duration-200 hover:bg-white hover:text-black">
              Upload
            </button>
          </div>

          {/* Gallery */}
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
            {/* Image 1 */}
            <div className="relative group">
              <img src="img/image1.jpg" alt="image1" className="w-72" />
              <div className="absolute bottom-0 left-0  right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
                <div className="flex justify-between w-full">
                  <div className="font-normal">
                    <p className="text-sm">Abstract Painting</p>
                    <p className="text-xs">245 likes - 35 Shares</p>
                  </div>
                  <div className="flex items-center">
                    <img src="img/bookmark.svg" alt="bookmark" />
                  </div>
                </div>
              </div>
            </div>

            {/* Image 2 */}
            <div className="relative group">
              <img src="img/image2.jpg" alt="image2" className="w-72" />
              <div className="absolute bottom-0 left-0  right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
                <div className="flex justify-between w-full">
                  <div className="font-normal">
                    <p className="text-sm">Abstract Painting</p>
                    <p className="text-xs">245 likes - 35 Shares</p>
                  </div>
                  <div className="flex items-center">
                    <img src="img/bookmark.svg" alt="bookmark" />
                  </div>
                </div>
              </div>
            </div>

            {/* Image 3 */}
            <div className="relative group">
              <img src="img/image3.jpg" alt="image3" className="w-72" />
              <div className="absolute bottom-0 left-0  right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
                <div className="flex justify-between w-full">
                  <div className="font-normal">
                    <p className="text-sm">Abstract Painting</p>
                    <p className="text-xs">245 likes - 35 Shares</p>
                  </div>
                  <div className="flex items-center">
                    <img src="img/bookmark.svg" alt="bookmark" />
                  </div>
                </div>
              </div>
            </div>

            {/* Image 4 */}
            <div className="relative group">
              <img src="img/image4.jpg" alt="image4" className="w-72" />
              <div className="absolute bottom-0 left-0  right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
                <div className="flex justify-between w-full">
                  <div className="font-normal">
                    <p className="text-sm">Abstract Painting</p>
                    <p className="text-xs">245 likes - 35 Shares</p>
                  </div>
                  <div className="flex items-center">
                    <img src="img/bookmark.svg" alt="bookmark" />
                  </div>
                </div>
              </div>
            </div>

            {/* Image 5 */}
            <div className="relative group">
              <img src="img/image5.jpg" alt="image5" className="w-72" />
              <div className="absolute bottom-0 left-0  right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
                <div className="flex justify-between w-full">
                  <div className="font-normal">
                    <p className="text-sm">Abstract Painting</p>
                    <p className="text-xs">245 likes - 35 Shares</p>
                  </div>
                  <div className="flex items-center">
                    <img src="img/bookmark.svg" alt="bookmark" />
                  </div>
                </div>
              </div>
            </div>

            {/* Image 6 */}
            <div className="relative group">
              <img src="img/image6.jpg" alt="image6" className="w-72" />
              <div className="absolute bottom-0 left-0  right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
                <div className="flex justify-between w-full">
                  <div className="font-normal">
                    <p className="text-sm">Abstract Painting</p>
                    <p className="text-xs">245 likes - 35 Shares</p>
                  </div>
                  <div className="flex items-center">
                    <img src="img/bookmark.svg" alt="bookmark" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
