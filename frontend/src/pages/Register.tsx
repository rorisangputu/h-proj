import { useForm } from "react-hook-form";

const Register = () => {
  const { register } = useForm();
  return (
    <div>
      <form className="flex flex-col gap-5">
        <h2 className="text-3xl font-bold">Create an account</h2>
      </form>
    </div>
  );
};

export default Register;
