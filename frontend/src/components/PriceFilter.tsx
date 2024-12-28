type Props = {
  selectedPrice?: number;
  onChange: (value?: number) => void;
};

const PriceFilter = ({ selectedPrice, onChange }: Props) => {
  return (
    <div>
      <h4 className="text-md font-semibold mb-2">Max Price</h4>
      <select
        className="p-2 border rounded-md w-full"
        value={selectedPrice}
        onChange={(event) =>
          onChange(
            event.target.value ? parseInt(event.target.value) : undefined
          )
        }
      >
        <option value="">Select max price</option>
        {[50, 100, 200, 400, 800, 1000, 2000, 4000, 8000, 10000].map(
          (price) => (
            <option key={price} value={price}>
              {price}
            </option>
          )
        )}
      </select>
    </div>
  );
};

export default PriceFilter;
