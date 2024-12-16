import { useForm } from "react-hook-form";

type RegisterFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Register = () => {
  const { register } = useForm<RegisterFormData>();
  return (
    <div>
      <form className="flex flex-col gap-5">
        <h2 className="text-3xl font-bold">Create an account</h2>
      </form>
    </div>
  );
};

export default Register;
