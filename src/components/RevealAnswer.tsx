import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [reveal, setReveal] = useState<boolean>(false);

    const handleClick = () => {
        setReveal(!reveal);
    };

    return (
        <div>
            <Button onClick={handleClick}>Reveal Answer</Button>
            {reveal && <p>42</p>}
        </div>
    );
}
