import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";

const DetailsSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold mb-3">Add Hotel</h1>
      <label htmlFor="" className="text-gray-700 text-sm font-bold flex-1">
        Name
        <input
          type="text"
          id="name"
          className="border rounded w-full py-2 px-2 mt-3 font-normal"
          {...register("name", { required: "This field is required" })}
        />
        {errors.name && (
          <span className="text-red-700">{errors.name.message}</span>
        )}
      </label>
      <div className="flex flex-col md:flex-row gap-10">
        <label htmlFor="" className="text-gray-700 text-sm font-bold flex-1">
          City
          <input
            type="text"
            id="city"
            className="border rounded w-full py-2 px-2 mt-3 font-normal"
            {...register("city", { required: "This field is required" })}
          />
          {errors.city && (
            <span className="text-red-700">{errors.city.message}</span>
          )}
        </label>
        <label htmlFor="" className="text-gray-700 text-sm font-bold flex-1">
          Country
          <input
            type="text"
            id="country"
            className="border rounded w-full py-2 px-2 mt-3 font-normal"
            {...register("country", { required: "This field is required" })}
          />
          {errors.country && (
            <span className="text-red-700">{errors.country.message}</span>
          )}
        </label>
      </div>
    </div>
  );
};

export default DetailsSection;
