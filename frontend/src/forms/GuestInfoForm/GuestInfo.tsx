import { useForm } from "react-hook-form";

type Props = {
  hotelId: string;
  pricePerNight: number;
};

const GuestInfo = ({ hotelId, pricePerNight }: Props) => {
  const {
    watch,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  return <div></div>;
};

export default GuestInfo;
