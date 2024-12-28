import { useForm } from "react-hook-form";

type Props = {
  hotelId: string;
  pricePerNight: number;
};

type GuestInfoFormData = {
  checkIn: Date;
  checkOut: Date;
  adultCount: number;
  childCount: number;
};

const GuestInfo = ({ hotelId, pricePerNight }: Props) => {
  const {
    watch,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<GuestInfoFormData>();

  return (
    <div className="bg-blue-400 flex flex-col gap-4 p-4">
      <h3 className="tex-md font-bold"> {pricePerNight}</h3>
      <form>
        <div className="grid grid-cols-1 gap-4 items-center">
                  <div>
                      
          </div>
        </div>
      </form>
    </div>
  );
};

export default GuestInfo;
