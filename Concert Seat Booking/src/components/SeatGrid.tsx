import { Seat as SeatType } from "../types/seat";
import { Seat } from "./";

const SeatGrid = ({
  gridLength,
  seatSelectedCount,
  handleSeatSelection,
  type,
}: {
  gridLength: number;
  seatSelectedCount: number;
  handleSeatSelection: (seat: SeatType) => void;
  type: string;
}) => {
  return (
    <div className="seat-grid">
      {[...Array(gridLength)].map((_, i) => (
        <div key={i} className="row">
          {[...Array(gridLength)].map((_, j) => (
            <Seat
              key={j}
              row={i}
              column={j}
              type={type}
              handleSeatSelection={handleSeatSelection}
              seatSelectedCount={seatSelectedCount}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default SeatGrid;
