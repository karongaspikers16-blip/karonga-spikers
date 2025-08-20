"use client";

import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const AddPlayerForm = () => {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Send data to backend or state
    console.log({ name, position, number });
    setName("");
    setPosition("");
    setNumber("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 p-4 border rounded shadow">
      <h2 className="text-lg font-bold">Add New Player</h2>
      <input
        type="text"
        placeholder="Player Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="text"
        placeholder="Position"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="number"
        placeholder="Jersey Number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        className="w-full p-2 border rounded"
        required
      />
      <label className="flex items-center space-x-2">
        <input type="checkbox" className="h-4 w-4" />
        <span>I agree to terms of service</span>
      </label>
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
        Add Player
      </button>
    </form>
  );
};

export default AddPlayerForm;
