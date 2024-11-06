import { Seat } from "../types/seat";
import { SeatGrid } from "./";

const GeneralSection = ({
  seatSelectedCount,
  handleSeatSelection,
}: {
  seatSelectedCount: number;
  handleSeatSelection: (seat: Seat) => void;
}) => {
  return (
    <div>
      <h2>General Section (6 X 6)</h2>
      <SeatGrid
        seatSelectedCount={seatSelectedCount}
        handleSeatSelection={handleSeatSelection}
        gridLength={6}
        type="G"
      ></SeatGrid>
    </div>
  );
};

export default GeneralSection;
