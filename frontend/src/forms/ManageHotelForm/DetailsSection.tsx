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
      <label htmlFor="" className="text-gray-700 text-sm font-bold flex-1">
        Country
        <textarea
          id="description"
          rows={10}
          className="border rounded w-full py-2 px-2 mt-3 font-normal"
          {...register("description", { required: "This field is required" })}
        />
        {errors.description && (
          <span className="text-red-700">{errors.description.message}</span>
        )}
      </label>
      <label
        htmlFor=""
        className="text-gray-700 text-sm font-bold max-w-[50%] md:max-w-[30%]"
      >
        Price Per Night
        <input
          type="number"
          id="pricePerNight"
          min={1}
          className="border rounded w-full py-2 px-2 mt-3 font-normal"
          {...register("pricePerNight", { required: "This field is required" })}
        />
        {errors.pricePerNight && (
          <span className="text-red-700">{errors.pricePerNight.message}</span>
        )}
      </label>
      <label
        htmlFor=""
        className="text-gray-700 text-sm font-bold max-w-[50%] md:max-w-[30%]"
      >
        Star Rating:
        <select
          id="starRating"
          className="border rounded w-full p-2 mt-3 font-normal text-gray-700"
          {...register("starRating", { required: "This field is required" })}
        >
          <option value={""} className="text-sm font-bold">
            Rating
          </option>
          {[1, 2, 3, 4, 5].map((i, index) => (
            <option key={index} value={i}>
              {i}
            </option>
          ))}
        </select>
        {errors.starRating && (
          <span className="text-red-700">{errors.starRating.message}</span>
        )}
      </label>
    </div>
  );
};

export default DetailsSection;
