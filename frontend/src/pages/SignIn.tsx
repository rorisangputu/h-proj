import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import * as apiClient from "../apiClient";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";

export type SignInFormData = {
  email: string;
  password: string;
};

const SignIn = () => {
  const navigate = useNavigate();
  const { showToast } = useAppContext();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignInFormData>();

  const mutation = useMutation(apiClient.signIn, {
    onSuccess: async () => {
      showToast({ message: "Sign In Successful", type: "SUCCESS" });
    },
    onError: async (error: Error) => {
      showToast({ message: error.message, type: "ERROR" });
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5">
      <h2 className="text-3xl font-bold">Sign In</h2>
      <div className="flex flex-col gap-4">
        <label htmlFor="" className="text-gray-700 text-sm font-bold flex-1">
          Email
          <input
            type="email"
            id="email"
            className="border rounded w-full py-2 px-2 mt-3 font-normal"
            {...register("email", { required: "This field is required" })}
          />
          {errors.email && (
            <span className="text-red-700">{errors.email.message}</span>
          )}
        </label>

        <label htmlFor="" className="text-gray-700 text-sm font-bold flex-1">
          Password
          <input
            type="password"
            id="password"
            className="border rounded w-full py-2 px-2 mt-3 font-normal"
            {...register("password", {
              required: "This field is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          {errors.password && (
            <span className="text-red-700">{errors.password.message}</span>
          )}
        </label>
        <span className="flex flex-col md:flex-row gap-7 md:justify-between md:items-center">
          <button
            type="submit"
            className="p-3 bg-blue-800 hover:bg-blue-600 text-white font-semibold"
          >
            Log In
          </button>
          <p className="">
            Don't have an account?{" "}
            <span>
              <Link
                className="cursor-pointer underline hover:text-blue-700"
                to={"/register"}
              >
                Sign Up
              </Link>
            </span>
          </p>
        </span>
      </div>
    </form>
  );
};

export default SignIn;
