import React, { useState } from "react";
import { Form } from "react-bootstrap";

function updateAnswer(
    event: React.ChangeEvent<HTMLInputElement>,
    setAnswer: React.Dispatch<React.SetStateAction<string>>,
) {
    setAnswer(event.target.value);
}

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="formCheckAnswer">
                <Form.Label>Check Answer</Form.Label>
                <Form.Control
                    value={answer}
                    onChange={(event) => {
                        updateAnswer(
                            event as React.ChangeEvent<HTMLInputElement>,
                            setAnswer,
                        );
                    }}
                />
            </Form.Group>
            <h3>{answer === expectedAnswer ? "✔️" : "❌"}</h3>
        </div>
    );
}
