import { useFormContext } from "react-hook-form";
import { hotelFacilities } from "../../config/hotel-options-config";
import { HotelFormData } from "./ManageHotelForm";

const FacilitySection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-3">Facilities</h2>
      <div className="grid grid-cols-5 gap-3">
        {hotelFacilities.map((facility) => (
          <label>
            <input
              type="checkbox"
              value={facility}
              id=""
              {...register("facilities", {
                required: "This field is required",
              })}
            />
            {facility}
          </label>
        ))}
      </div>
    </div>
  );
};

export default FacilitySection;
