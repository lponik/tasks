import React, { useState } from "react";
import { Button } from "react-bootstrap";

function Doubler({
    dhValue,
    setDhValue
}: {
    dhValue: number;
    setDhValue: (value: number) => void;
}): JSX.Element {
    const handleDouble = () => setDhValue(dhValue * 2);
    return <Button onClick={handleDouble}>Double</Button>;
}

function Halver({
    dhValue,
    setDhValue
}: {
    dhValue: number;
    setDhValue: (value: number) => void;
}): JSX.Element {
    const handleHalf = () => setDhValue(dhValue / 2);
    return <Button onClick={handleHalf}>Halve</Button>;
}

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler dhValue={dhValue} setDhValue={setDhValue}></Doubler>
            <Halver dhValue={dhValue} setDhValue={setDhValue}></Halver>
        </div>
    );
}
