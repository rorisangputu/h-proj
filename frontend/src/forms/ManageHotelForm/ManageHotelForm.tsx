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

type Props = {
  onSave: (hotelFormData: FormData) => void;
  isLoading: boolean;
};

const ManageHotelForm = ({ onSave, isLoading }: Props) => {
  const formMethods = useForm<HotelFormData>();
  const { handleSubmit } = formMethods;

  const onSubmit = handleSubmit((formDataJSON: HotelFormData) => {
    //Create new form data obj
    const formData = new FormData();

    formData.append("name", formDataJSON.name);
    formData.append("city", formDataJSON.city);
    formData.append("country", formDataJSON.country);
    formData.append("description", formDataJSON.description);
    formData.append("type", formDataJSON.type);
    formData.append("pricePerNight", formDataJSON.pricePerNight.toString());
    formData.append("starRating", formDataJSON.starRating.toString());
    formData.append("adultCount", formDataJSON.adultCount.toString());
    formData.append("childCount", formDataJSON.childCount.toString());

    formDataJSON.facilities.forEach((facility, index) => {
      formData.append(`facilities[${index}]`, facility);
    }); //How to append an array to formData

    Array.from(formDataJSON.imageFiles).forEach((imageFile) => {
      formData.append(`imageFiles`, imageFile);
    });
    onSave(formData);
    //console.log(formData);
  });
  return (
    <FormProvider {...formMethods}>
      <form onSubmit={onSubmit} className="flex flex-col gap-10">
        <DetailsSection />
        <TypeSection />
        <FacilitySection />
        <GuestSection />
        <ImagesSection />
        <span className="flex justify-end">
          <button
            disabled={isLoading}
            type="submit"
            className="p-3 text-white bg-blue-700 hover:bg-blue-600 disabled:bg-blue-400 font-semibold text-xl"
          >
            {isLoading ? "Saving" : "Save"}
          </button>
        </span>
      </form>
    </FormProvider>
  );
};

export default ManageHotelForm;
