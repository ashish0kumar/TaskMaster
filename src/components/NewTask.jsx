import { useState } from "react";

export default function NewTask({ onAdd }) {
    const [enteredTask, setEnteredTask] = useState("");

    function handleChange(event) {
        setEnteredTask(event.target.value);
    }

    function handlClick() {
        if (enteredTask.trim() === "") return;
        onAdd(enteredTask);
        setEnteredTask("");
    }

    return (
        <div className="flex items-center gap-4">
            <input
                type="text"
                className="w-64 px-2 py-1 rounded-sm bg-stone-200"
                onChange={handleChange}
                value={enteredTask}
            />
            <button
                className="px-4 py-1.5 rounded-md font-semibold bg-stone-800 text-stone-50 hover:bg-stone-950"
                onClick={handlClick}
            >
                Add Task
            </button>
        </div>
    );
}