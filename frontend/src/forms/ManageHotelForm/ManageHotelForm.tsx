import { FormProvider, useForm } from "react-hook-form";
import DetailsSection from "./DetailsSection";
import TypeSection from "./TypeSection";
import FacilitySection from "./FacilitySection";
import GuestSection from "./GuestSection";
import ImagesSection from "./ImagesSection";

export type HotelFormData = {
  name: string;
  city: string;
  country: string;
  description: string;
  type: string;
  pricePerNight: number;
  starRating: number;
  adultCount: number;
  childCount: number;
  facilities: string[];
  imageFiles: FileList;
};

const ManageHotelForm = () => {
  const formMethods = useForm<HotelFormData>();
  return (
    <FormProvider {...formMethods}>
      <form className="flex flex-col gap-10">
        <DetailsSection />
        <TypeSection />
        <FacilitySection />
        <GuestSection />
        <ImagesSection />
        <span className="flex justify-end">
          <button
            type="submit"
            className="p-3 text-white bg-blue-700 hover:bg-blue-600 font-semibold text-xl"
          >
            Save
          </button>
        </span>
      </form>
    </FormProvider>
  );
};

export default ManageHotelForm;
