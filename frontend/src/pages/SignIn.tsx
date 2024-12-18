import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import * as apiClient from "../apiClient";

export type SignInFormData = {
  email: string;
  password: string;
};

const SignIn = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignInFormData>();

  const mutation = useMutation(apiClient.signIn, {
    onSuccess: async () => {
      console.log("user has been sign in");
    },
    onError: async (error: Error) => {
      console.log("Something went wrong");
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5">
      <h2 className="text-3xl font-bold">Sign In</h2>
      <div className="">
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
      </div>
    </form>
  );
};

export default SignIn;
