import { useParams } from "react-router-dom";

const Details = () => {
  const { hotelId } = useParams();
  return <div>Details</div>;
};

export default Details;
