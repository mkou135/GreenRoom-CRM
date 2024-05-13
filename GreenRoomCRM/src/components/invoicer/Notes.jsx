import { useState } from "react";
const Notes = () => {
  const [notes, setNotes] = useState("");

  const handleNotesChange = (event) => {
    setNotes(event.target.value);
  };

  return (
    <div className="my-4">
      <label className="block mb-2 text-sm font-medium dark:text-white">
        Notes
      </label>
      <textarea
        id="notes"
        name="notes"
        rows="4"
        className="w-full bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
        value={notes}
        onChange={handleNotesChange}
      ></textarea>
    </div>
  );
};

export default Notes;
