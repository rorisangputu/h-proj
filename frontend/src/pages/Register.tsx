import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { Link } from "react-router-dom";
import * as apiClient from "../api-client";

export type RegisterFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Register = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const mutation = useMutation();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <div>
      <form className="flex flex-col gap-5" onSubmit={onSubmit}>
        <h2 className="text-3xl font-bold">Create an account</h2>
        <div className="flex flex-col md:flex-row gap-5">
          <label htmlFor="" className="text-gray-700 text-sm font-bold flex-1">
            First Name
            <input
              type="text"
              id="firstName"
              className="border rounded w-full py-2 px-2 mt-3 font-normal"
              {...register("firstName", { required: "This field is required" })}
            />
            {errors.firstName && (
              <span className="text-red-700">{errors.firstName.message}</span>
            )}
          </label>
          <label htmlFor="" className="text-gray-700 text-sm font-bold flex-1">
            Last Name
            <input
              type="text"
              id="lastName"
              className="border rounded w-full py-2 px-2 mt-3 font-normal"
              {...register("lastName", { required: "This field is required" })}
            />
            {errors.lastName && (
              <span className="text-red-700">{errors.lastName.message}</span>
            )}
          </label>
        </div>
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
        <label htmlFor="" className="text-gray-700 text-sm font-bold flex-1">
          Confirm Password
          <input
            type="password"
            id="confirm password"
            className="border rounded w-full py-2 px-2 mt-3 font-normal"
            {...register("confirmPassword", {
              validate: (val) => {
                if (!val) {
                  return "This field is required";
                } else if (watch("password") !== val) {
                  return "Your passwords do not match ";
                }
              },
            })}
          />
          {errors.confirmPassword && (
            <span className="text-red-700">
              {errors.confirmPassword.message}
            </span>
          )}
        </label>
        <span className="flex flex-col md:flex-row gap-7 md:justify-between md:items-center">
          <button
            type="submit"
            className="p-3 bg-blue-800 hover:bg-blue-600 text-white font-semibold"
          >
            Create Account
          </button>
          <p className="">
            Already have an account?{" "}
            <span>
              <Link
                className="cursor-pointer underline hover:text-blue-700"
                to={"/login"}
              >
                Sign In
              </Link>
            </span>
          </p>
        </span>
      </form>
    </div>
  );
};

export default Register;
