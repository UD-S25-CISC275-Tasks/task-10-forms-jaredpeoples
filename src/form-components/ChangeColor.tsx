import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const colors = [
        "gray",
        "green",
        "purple",
        "pink",
        "red",
        "brown",
        "yellow",
        "orange",
    ];

    const [selectedColor, setColor] = useState<string>("gray");

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    return (
        <>
            <div>
                <h3>Change Color</h3>
                <Form>
                    {colors.map((color, index) => (
                        <Form.Check
                            key={index}
                            inline
                            type="radio"
                            name="colors"
                            id={`color-check-${index}`}
                            label={
                                <span
                                    style={{
                                        backgroundColor:
                                            selectedColor === color ? color : (
                                                "transparent"
                                            ),
                                        padding: "2px 5px",
                                        borderRadius: "4px",
                                    }}
                                >
                                    {color}
                                </span>
                            }
                            value={color}
                            checked={selectedColor === color}
                            onChange={updateColor}
                        />
                    ))}
                </Form>

                <div>
                    You have chosen
                    <span
                        data-testid="colored-box"
                        style={{
                            backgroundColor: selectedColor, // Conditional background color
                            padding: "2px 5px", // Adds some padding around the text
                            borderRadius: "4px", // Optional, adds rounded corners
                        }}
                    >
                        {selectedColor}.
                    </span>
                </div>
            </div>
        </>
    );
}
