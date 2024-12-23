import { Link } from "react-router-dom";

const MyHotels = () => {
  return (
    <div className="space-y-5">
      <span className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">My Hotels</h1>
        <Link
          to={"/add-hotel"}
          className="p-3 bg-blue-700 text-white font-bold text-xl hover:bg-blue-600"
        >
          Add Hotel
        </Link>
      </span>
    </div>
  );
};

export default MyHotels;
