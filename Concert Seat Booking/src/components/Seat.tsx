import { Seat as SeatType } from "../types/seat";
import { MAX_SEATS_ALLOWED } from "../consts/consts";
import { useState } from "react";

const Seat = ({
  row,
  column,
  type,
  seatSelectedCount,
  handleSeatSelection,
}: {
  row: number;
  column: number;
  type: string;
  seatSelectedCount: number;
  handleSeatSelection: (seat: SeatType) => void;
}) => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    if (selected) {
      setSelected(false);
      handleSeatSelection({
        type,
        row: row + 1,
        column: column + 1,
      });
    } else if (seatSelectedCount < MAX_SEATS_ALLOWED) {
      setSelected(true);
      handleSeatSelection({
        type,
        row: row + 1,
        column: column + 1,
      });
    } else {
      alert("Maximum seats allowed per Booking is 5.");
    }
  };

  return (
    <button
      className={`seat-button ${selected ? "selected" : ""}`}
      onClick={handleClick}
    ></button>
  );
};

export default Seat;
