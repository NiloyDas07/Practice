import { Seat } from "../types/seat";
import SeatGrid from "./SeatGrid";

const VipSection = ({
  seatSelectedCount,
  handleSeatSelection,
}: {
  seatSelectedCount: number;
  handleSeatSelection: (seat: Seat) => void;
}) => {
  return (
    <div>
      <h2>Vip Section (5 X 5)</h2>
      <SeatGrid
        seatSelectedCount={seatSelectedCount}
        handleSeatSelection={handleSeatSelection}
        gridLength={5}
        type="V"
      ></SeatGrid>
    </div>
  );
};

export default VipSection;
