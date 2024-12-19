import { useMutation } from "react-query";

const SignOutButton = () => {
  const mutation = useMutation();
  return (
    <button
      className="p-3 bg-white text-blue-600 items-center 
        flex font-bold hover:bg-gray-100"
    >
      Sign Out
    </button>
  );
};

export default SignOutButton;
