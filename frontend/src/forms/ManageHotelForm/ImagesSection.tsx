import { HotelFormData } from "./ManageHotelForm";
import { useFormContext } from "react-hook-form";

const ImagesSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();
    
  return <div>ImagesSection</div>;
};

export default ImagesSection;
