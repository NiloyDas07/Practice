import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Label } from "./components/ui/label";
import { Input } from "./components/ui/input";
import { useRef, useState } from "react";
import { Button } from "./components/ui/button";
import Static from "./components/Static";
import Blink from "./components/Blink";
import Fade from "./components/Fade";

function App() {
  const [pattern, setPattern] = useState<string>("Static");
  const [lightInterval, setLightInterval] = useState<number>(1000);

  const intervalRef = useRef<HTMLInputElement | null>(null);

  const handleClick: () => void = () => {
    setLightInterval(Number(intervalRef.current?.value) * 1000);
  };

  return (
    <div className="flex items-center justify-center min-h-svh">
      <Card className="w-11/12">
        <CardHeader>
          <CardTitle className="text-center text-3xl text-orange-500">
            Diwali Lights Management System
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div className="flex items-center border p-4 gap-4">
            {pattern === "Blink" ? (
              <Blink duration={lightInterval} />
            ) : pattern === "Fade" ? (
              <Fade duration={lightInterval} />
            ) : (
              <Static />
            )}

            {/* Pattern Selection */}
            <Select onValueChange={setPattern} defaultValue="Static">
              <SelectTrigger
                className="w-[180px] border-gray-300"
                title="Select Pattern"
              >
                <SelectValue placeholder="Pattern" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Static">Static</SelectItem>

                <SelectItem value="Blink">Blink</SelectItem>

                <SelectItem value="Fade">Fade</SelectItem>
              </SelectContent>
            </Select>

            <Label className="flex items-center gap-1">
              <span>Interval in Seconds:</span>
              <Input
                className="border-gray-300"
                ref={intervalRef}
                defaultValue={1}
              ></Input>
            </Label>
          </div>
        </CardContent>

        <CardFooter>
          <Button type="button" onClick={handleClick} className="mx-auto">
            Submit
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default App;
