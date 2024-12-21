import { useFormContext } from "react-hook-form";
import { hotelTypes } from "../../config/hotel-options-config";

const TypeSection = () => {
  const { register } = useFormContext();
  return (
    <div>
      <h2 className="text-2xl font-bold mb-3">Type</h2>
    </div>
  );
};

export default TypeSection;
