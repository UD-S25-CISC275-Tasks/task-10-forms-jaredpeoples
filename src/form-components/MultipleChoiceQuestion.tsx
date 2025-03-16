import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [selectedChoice, setSelectedChoice] = useState<string>(options[0]);

    const updateChoice = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedChoice(event.target.value);
    };

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form>
                <Form.Group controlId="formMultipleChoiceQuestionSelect">
                    <Form.Label>Select Your Answer</Form.Label>
                    <Form.Select value={selectedChoice} onChange={updateChoice}>
                        {options.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
            </Form>
            <div>
                {selectedChoice === expectedAnswer ?
                    <p>✔️</p>
                :   <p>❌</p>}
            </div>
        </div>
    );
}
