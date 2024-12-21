import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";

const GuestSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-3">Guests</h2>
      <div className="flex flex-col md:flex-row gap-x-10 gap-y-5 bg-gray-300 p-5">
        <label htmlFor="" className="text-gray-700 text-sm font-bold flex-1">
          Adults
          <input
            type="number"
            id="adultCount"
            min={1}
            className="border rounded w-full py-2 px-2 mt-3 font-normal"
            {...register("adultCount", { required: "This field is required" })}
          />
          {errors.adultCount && (
            <span className="text-red-700">{errors.adultCount.message}</span>
          )}
        </label>
        <label htmlFor="" className="text-gray-700 text-sm font-bold flex-1">
          Children
          <input
            type="number"
            id="childCount"
            min={0}
            className="border rounded w-full py-2 px-2 mt-3 font-normal"
            {...register("childCount", { required: "This field is required" })}
          />
          {errors.childCount && (
            <span className="text-red-700">{errors.childCount.message}</span>
          )}
        </label>
      </div>
    </div>
  );
};

export default GuestSection;
