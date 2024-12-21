import { useFormContext } from "react-hook-form";
import { hotelFacilities } from "../../config/hotel-options-config";
import { HotelFormData } from "./ManageHotelForm";

const FacilitySection = () => {
  const { register } = useFormContext<HotelFormData>();
  return <div>FacilitySection</div>;
};

export default FacilitySection;
