import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "🎏" | "🎃" | "🪔" | "🎄" | "🎇";

const holidaysByYear: Holiday[] = ["🎏", "🪔", "🎃", "🎄", "🎇"]; // Updated array
const holidaysByAlphabet: Holiday[] = ["🪔", "🎄", "🎏", "🎃", "🎇"]; // Updated array

export function CycleHoliday(): JSX.Element {
    const [currentHoliday, setCurrentHoliday] = useState<Holiday>("🎏");

    const advanceByYear = () => {
        const currentIndex = holidaysByYear.indexOf(currentHoliday);
        const nextIndex = (currentIndex + 1) % holidaysByYear.length;
        setCurrentHoliday(holidaysByYear[nextIndex]);
    };

    const advanceByAlphabet = () => {
        const currentIndex = holidaysByAlphabet.indexOf(currentHoliday);
        const nextIndex = (currentIndex + 1) % holidaysByAlphabet.length;
        setCurrentHoliday(holidaysByAlphabet[nextIndex]);
    };

    return (
        <div>
            <p>Holiday: {currentHoliday}</p>{" "}
            {/* Updated text format to match test */}
            <Button onClick={advanceByYear}>Advance by Year</Button>
            <Button onClick={advanceByAlphabet}>Advance by Alphabet</Button>
        </div>
    );
}
