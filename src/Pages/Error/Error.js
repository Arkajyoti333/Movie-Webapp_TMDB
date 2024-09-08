import { Link } from "react-router-dom";



const Error = () => {
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center">
        <div className="text-6xl font-bold text-white">404</div>
        <div className="text-xl text-white mt-4">
          Oops! Something went wrong.
        </div>
        <div className="text-md text-white mt-4">
          Sorry ! Page Not Found.
        </div>
        <Link
          to="/"
          className="mt-8 border-2 shadow-lg border-red-600 p-2 rounded-md font-semibold text-white hover:border-blue-500 hover:border-2 transition-all duration-300 ease-in-out hover:tracking-wider"
        >
          Back to Home &rarr;
        </Link>
      </div>
    </>
  );
};


export default Error;