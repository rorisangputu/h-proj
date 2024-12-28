import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import { useSearchContext } from "../../contexts/searchContext";
import { useAppContext } from "../../contexts/AppContext";

type Props = {
  hotelId: string;
  pricePerNight: number;
};

type GuestInfoFormData = {
  checkIn: Date;
  checkOut: Date;
  adultCount: number;
  childCount: number;
};

const GuestInfo = ({ hotelId, pricePerNight }: Props) => {
  const search = useSearchContext();
  const { isLoggedIn } = useAppContext();
  const {
    watch,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<GuestInfoFormData>({
    defaultValues: {
      checkIn: search.checkIn,
      checkOut: search.checkOut,
      adultCount: search.adultCount,
      childCount: search.childCount,
    },
  });

  const checkIn = watch("checkIn");
  const checkOut = watch("checkOut");

  const minDate = new Date();
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 1);

  const onSignInClick = (data: GuestInfoFormData) => {
    search.saveSearchValues(
      "",
      data.checkIn,
      data.checkOut,
      data.adultCount,
      data.childCount
    );
  };
  return (
    <div className="bg-blue-300 flex flex-col gap-4 p-4">
      <h3 className="tex-md font-bold">&#163; {pricePerNight} / per night</h3>
      <form>
        <div className="grid grid-cols-1 gap-4 items-center">
          <div>
            <DatePicker
              required
              selected={checkIn}
              onChange={(date) => setValue("checkIn", date as Date)}
              selectsStart
              startDate={checkIn}
              endDate={checkOut}
              minDate={minDate}
              maxDate={maxDate}
              placeholderText="Check-in Date"
              className="min-w-full bg-white p-2 focus:outline-none"
              wrapperClassName="min-w-full"
            />
          </div>

          <div>
            <DatePicker
              required
              selected={checkOut}
              onChange={(date) => setValue("checkOut", date as Date)}
              selectsStart
              startDate={checkIn}
              endDate={checkOut}
              minDate={checkIn || minDate}
              maxDate={maxDate}
              placeholderText="Check-out Date"
              className="min-w-full bg-white p-2 focus:outline-none"
              wrapperClassName="min-w-full"
            />
          </div>

          <div className="flex justify-between py-1 gap-5">
            <label className="items-center p-2 bg-white flex flex-1">
              Adults:
              <input
                className="w-full p-1 focus:outline-none font-bold"
                type="number"
                min={1}
                max={20}
                {...register("adultCount", {
                  required: "This field is required",
                  min: {
                    value: 1,
                    message: "There must be at least 1 adult",
                  },
                  valueAsNumber: true,
                })}
              />
            </label>
            <label className="p-2 bg-white items-center flex flex-1">
              Children:
              <input
                className="w-full p-1 focus:outline-none font-bold"
                type="number"
                defaultValue={0}
                min={0}
                max={20}
                {...register("childCount", {
                  valueAsNumber: true,
                })}
              />
            </label>
            {errors.adultCount && (
              <span className="text-red-500 font-semibold text-sm">
                {errors.adultCount.message}
              </span>
            )}
          </div>

          {isLoggedIn ? (
            <button className="p-3 bg-blue-700 text-white font-bold w-full hover:bg-blue-500">
              Book Now
            </button>
          ) : (
            <button className="p-3 bg-blue-700 text-white font-bold w-full hover:bg-blue-500">
              Sign In to Book
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default GuestInfo;
