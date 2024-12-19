import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import SignOutButton from "./SignOutButton";

const Header = () => {
  const { isLoggedIn } = useAppContext();
  return (
    <div className="bg-blue-800 py-6">
      <div className="w-[90%] mx-auto flex justify-between items-center">
        <span className="text-xl md:text-3xl text-white tracking-tight font-bold">
          <Link to={"/"}>MernHolidays.com</Link>
        </span>
        <span className="flex space-x-2">
          {isLoggedIn ? (
            <div className="flex gap-5 items-center">
              <Link
                className="text-white font-semibold cursor-pointer hover:text-gray-200 "
                to={"/my-bookings"}
              >
                My bookings
              </Link>
              <Link
                className="text-white font-semibold cursor-pointer hover:text-gray-200 "
                to={"/my-hotels"}
              >
                My Hotels
              </Link>
              <SignOutButton />
            </div>
          ) : (
            <>
              <Link
                to={"/sign-in"}
                className="p-3 bg-white text-blue-600 items-center 
                flex font-bold hover:bg-gray-100"
              >
                Sign In
              </Link>
              <Link
                to={"/register"}
                className="p-3 bg-white text-blue-600 items-center 
                flex font-bold hover:bg-gray-100"
              >
                Register
              </Link>
            </>
          )}
        </span>
      </div>
    </div>
  );
};

export default Header;
