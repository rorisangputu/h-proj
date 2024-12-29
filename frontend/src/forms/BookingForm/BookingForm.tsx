import { useForm } from "react-hook-form";
import { UserType } from "../../../../backend/src/shared/types";

type Props = {
  currentUser: UserType;
};

const BookingForm = ({ currentUser }: Props) => {
  const {handleSubmit, register} = useForm();
  return <div>BookingForm</div>;
};

export default BookingForm;
