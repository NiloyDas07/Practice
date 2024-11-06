import { useState } from "react";
import "./App.css";
import { EconomySection, GeneralSection, VipSection } from "./components/";
import { Seat } from "./types/seat";

function App() {
  const [seatsSelected, setSeatsSelected] = useState<Seat[]>([]);

  const handleSeatSelection = (seat: Seat) => {
    const seatAlreadySelected = seatsSelected.find(
      (s) =>
        s.type === seat.type && s.row === seat.row && s.column === seat.column
    );

    if (seatAlreadySelected) {
      setSeatsSelected(() =>
        seatsSelected.filter(
          (s) =>
            !(
              s.type === seat.type &&
              s.row === seat.row &&
              s.column === seat.column
            )
        )
      );
    } else {
      setSeatsSelected(() => [...seatsSelected, seat]);
    }
  };

  return (
    <>
      <h1 className="page-heading">Concert Seat Booking</h1>

      <div className="container">
        <VipSection
          seatSelectedCount={seatsSelected.length}
          handleSeatSelection={handleSeatSelection}
        />

        <GeneralSection
          seatSelectedCount={seatsSelected.length}
          handleSeatSelection={handleSeatSelection}
        />

        <EconomySection
          seatSelectedCount={seatsSelected.length}
          handleSeatSelection={handleSeatSelection}
        />
      </div>
    </>
  );
}

export default App;
