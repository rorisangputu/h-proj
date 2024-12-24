type SearchContext = {
  destination: string;
  checkIn: Date;
  checkOut: Date;
  adultCount: number;
  childCount: number;
  hotelId: string;
  saveSearchValues: (
    destination: string,
    checkIn: string,
    checkOut: string,
    adultCount: number,
    childCount: number
  ) => void;
};


