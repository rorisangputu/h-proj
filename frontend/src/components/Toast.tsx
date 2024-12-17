type ToastProps = {
  message: string;
  type: "SUCCESS" | "ERROR";
};

const Toast = ({ message, type }: ToastProps) => {
  return <div>Toast</div>;
};

export default Toast;
