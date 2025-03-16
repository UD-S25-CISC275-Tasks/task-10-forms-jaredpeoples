import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

function addAttempts(
    requestedAttempts: string,
    setAttempts: React.Dispatch<React.SetStateAction<number>>,
) {
    const attempts = parseInt(requestedAttempts) || 0;
    setAttempts((prev) => prev + attempts);
}

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>("");
    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Number of attempts remaining : {attempts}</p>
            <Form.Group controlId="formAttemptsRequested">
                <Form.Label>Number of Attempts Requested</Form.Label>
                <Form.Control
                    type="number"
                    value={requestedAttempts}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setRequestedAttempts(event.target.value);
                    }}
                />
            </Form.Group>
            <div>
                <Button
                    disabled={attempts <= 0}
                    onClick={() => {
                        setAttempts((prev) => prev - 1);
                    }}
                >
                    use
                </Button>
                <Button
                    onClick={() => {
                        addAttempts(requestedAttempts, setAttempts);
                    }}
                >
                    gain
                </Button>
            </div>
        </div>
    );
}
