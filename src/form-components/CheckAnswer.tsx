import React, { useState } from "react";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [userAnswer, setUserAnswer] = useState("");

    const checkAnswer = () => {
        return userAnswer === expectedAnswer ? "✔️" : "❌";
    };

    return (
        <div>
            <h3>Check Answer</h3>
            <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
            />
            <button onClick={checkAnswer}>Submit</button>
            <div>{checkAnswer()}</div>
        </div>
    );
}
