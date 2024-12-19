import { useMutation } from "react-query";
import * as apiClient from "../apiClient";
import { useAppContext } from "../contexts/AppContext";
import { useNavigate } from "react-router-dom";

const SignOutButton = () => {
  const { showToast } = useAppContext();
  const navigate = useNavigate();
  const mutation = useMutation(apiClient.logout, {
    onSuccess: () => {
      showToast({ message: "Logged Out", type: "SUCCESS" });
      
    },
    onError: (error: Error) => {
      showToast({ message: error.message, type: "ERROR" });
    },
  });
  const onClick = () => {
    mutation.mutate();
  };
  return (
    <button
      onClick={onClick}
      className="p-3 bg-white text-blue-600 items-center 
        flex font-bold hover:bg-gray-100"
    >
      Sign Out
    </button>
  );
};

export default SignOutButton;
