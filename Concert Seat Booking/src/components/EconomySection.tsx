import { Seat } from "../types/seat";
import { SeatGrid } from "./";

const EconomySection = ({
  seatSelectedCount,
  handleSeatSelection,
}: {
  seatSelectedCount: number;
  handleSeatSelection: (seat: Seat) => void;
}) => {
  return (
    <div>
      <h2>Economy Section (8 X 8)</h2>

      <SeatGrid
        seatSelectedCount={seatSelectedCount}
        handleSeatSelection={handleSeatSelection}
        gridLength={8}
        type="E"
      ></SeatGrid>
    </div>
  );
};

export default EconomySection;
