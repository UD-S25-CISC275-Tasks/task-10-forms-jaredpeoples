import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const colors = [
        "blue",
        "green",
        "purple",
        "pink",
        "red",
        "black",
        "yellow",
        "orange",
    ];

    const [selectedColor, setColor] = useState<string>("red");

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    return (
        <div style={{ backgroundColor: selectedColor, padding: "20px" }}>
            <h3>Change Color</h3>
            <Form>
                {colors.map((color, index) => (
                    <Form.Check
                        key={index}
                        inline
                        type="radio"
                        name="colors"
                        id={`color-check-${index}`}
                        label={color}
                        value={color}
                        checked={selectedColor === color}
                        onChange={updateColor}
                    />
                ))}
            </Form>
        </div>
    );
}
