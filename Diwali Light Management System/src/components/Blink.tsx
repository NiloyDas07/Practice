import { useEffect, useState } from "react";

const Blink = ({ duration }: { duration: number }) => {
  const [bgColor, setBgColor] = useState<string>("bg-yellow-400");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBgColor((prev) =>
        prev === "bg-yellow-400" ? "bg-background" : "bg-yellow-400"
      );
    }, duration);

    return () => clearInterval(intervalId);
  }, [duration]);

  return (
    <div
      className={`w-24 rounded-sm border-gray-300 border h-16 mr-auto ${bgColor}`}
    ></div>
  );
};

export default Blink;
