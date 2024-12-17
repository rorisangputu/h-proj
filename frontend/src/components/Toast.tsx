type ToastProps = {
  message: string;
  type: "SUCCESS" | "ERROR";
};

const Toast = ({ message, type }: ToastProps) => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <span className="text-lg font-semibold">{message}</span>
      </div>
    </div>
  );
};

export default Toast;
