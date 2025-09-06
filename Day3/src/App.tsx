import { useRef, useState } from "react";
import "./App.css";

function App() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [grade, setGrade] = useState<string | null>(null);

  function calculateGrade(value: number) {
    if (value >= 90 && value <= 100) return "A";
    else if (value >= 80) return "B";
    else if (value >= 70) return "C";
    else if (value >= 60) return "D";
    else if (value >= 0) return "F";
    else return null;
  }

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-black">
      <div className="text-black border border-gray-600 rounded-2xl p-6 bg-white text-center">
        
        <div className="text-2xl font-bold font-sans p-4">
          Grade Calculator
        </div>

        <div className="p-4">
          <input
            ref={inputRef}
            type="number"
            placeholder="Enter Marks (0-100)"
            className="outline-none border rounded-lg px-5 py-2 w-full"
          />
        </div>

        <div className="p-4">
          <button
            onClick={() => {
              const value = Number(inputRef.current?.value);
              const result = calculateGrade(value);
              setGrade(result);
            }}
            className="border px-4 py-2 rounded-lg hover:bg-black hover:text-white transition-all duration-300 ease-in-out text-lg font-medium w-full"
          >
            Calculate Grade
          </button>
        </div>

        {grade && (
          <div className="mt-4 text-xl font-semibold">
            Your Grade: <span className="text-black">{grade}</span>
          </div>
        )}

        {grade === null && inputRef.current?.value && (
          <div className="mt-4 text-red-500 font-medium">
            Please enter a valid score between 0 and 100
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
