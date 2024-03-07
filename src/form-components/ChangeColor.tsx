import React, { useState } from "react";

export function ChangeColor(): JSX.Element {
    const [chosenColor, setChosenColor] = useState("");
    const colors = [
        "Red",
        "Blue",
        "Green",
        "Yellow",
        "Purple",
        "Pink",
        "Orange",
        "Black"
    ];

    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((color, index) => (
                <label key={index}>
                    <input
                        type="radio"
                        value={color}
                        checked={chosenColor === color}
                        onChange={() => setChosenColor(color)}
                    />
                    {color}
                </label>
            ))}
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: chosenColor,
                    color: "white",
                    padding: "10px",
                    marginTop: "10px"
                }}
            >
                {chosenColor}
            </div>
        </div>
    );
}
