import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-ble-800 py-6">
      <div className="container mx-auto flex justify-between">
        <span className="text-3xl text-white tracking-tight font-bold">
          <Link to={"/"}>MernHolidays.com</Link>
        </span>
        <span className="flex space-x-2">
          <Link
            to={"/sign-in"}
            className="p-3 bg-white text-blue-600 items-center 
            flex font-bold hover:bg-gray-100"
          >
            Sign In
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Header;
