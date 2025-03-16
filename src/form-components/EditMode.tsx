import React, { useState } from "react";
import { Form } from "react-bootstrap";

function updateEditStatus(
    event: React.ChangeEvent<HTMLInputElement>,
    setEditStatus: React.Dispatch<React.SetStateAction<boolean>>,
) {
    setEditStatus(event.target.checked);
}

function updateStudentStatus(
    event: React.ChangeEvent<HTMLInputElement>,
    setStudentStatus: React.Dispatch<React.SetStateAction<boolean>>,
) {
    setStudentStatus(event.target.checked);
}

function updateName(
    event: React.ChangeEvent<HTMLInputElement>,
    setStudentName: React.Dispatch<React.SetStateAction<string>>,
) {
    setStudentName(event.target.value);
}

export function EditMode(): React.JSX.Element {
    const [editStatus, setEditStatus] = useState<boolean>(false);
    const [studentStatus, setStudentStatus] = useState<boolean>(true);
    const [studentName, setStudentName] = useState<string>("Your Name");
    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="edit-status-check"
                label="Edit Status"
                checked={editStatus}
                onChange={(event) => {
                    updateEditStatus(event, setEditStatus);
                }}
            />

            {editStatus ?
                <>
                    <Form.Check
                        type="switch"
                        id="edit-student-status"
                        label="Change Student Status"
                        checked={studentStatus}
                        onChange={(event) => {
                            updateStudentStatus(event, setStudentStatus);
                        }}
                    />
                    <Form.Group controlId="formStudentName">
                        <Form.Label>Student Name</Form.Label>
                        <Form.Control
                            value={studentName}
                            onChange={(event) => {
                                updateName(
                                    event as React.ChangeEvent<HTMLInputElement>,
                                    setStudentName,
                                );
                            }}
                        />
                    </Form.Group>
                </>
            :   <p>{`${studentName} is ${studentStatus ? "a student" : "not a student"}`}</p>
            }
        </div>
    );
}
