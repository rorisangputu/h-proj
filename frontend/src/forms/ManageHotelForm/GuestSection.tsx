import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";

const GuestSection = () => {

    const {
      register,
      formState: { errors },
    } = useFormContext<HotelFormData>();

  return <div>GuestSection</div>;
};

export default GuestSection;
