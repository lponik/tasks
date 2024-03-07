import React, { useState } from "react";

export function EditMode(): JSX.Element {
    const [isEditMode, setIsEditMode] = useState(false);
    const [name, setName] = useState("Your Name");
    const [isStudent, setIsStudent] = useState(true);

    const toggleEditMode = () => {
        setIsEditMode(!isEditMode);
    };

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleIsStudentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsStudent(e.target.checked);
    };

    return (
        <div>
            <h3>Edit Mode</h3>
            <label className="form-switch">
                Edit mode:
                <input
                    type="checkbox"
                    checked={isEditMode}
                    onChange={toggleEditMode}
                />
            </label>
            {isEditMode ? (
                <form>
                    <label>
                        Name:
                        <input
                            type="text"
                            value={name}
                            onChange={handleNameChange}
                        />
                    </label>
                    <label>
                        Is student:
                        <input
                            type="checkbox"
                            checked={isStudent}
                            onChange={handleIsStudentChange}
                        />
                    </label>
                </form>
            ) : (
                <p>
                    {name} is {isStudent ? "" : "not "}a student.
                </p>
            )}
        </div>
    );
}
