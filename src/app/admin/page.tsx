"use client";

import React, { useState } from "react";

// Player Form
const AddPlayerForm = () => {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, position, age });
    setName("");
    setPosition("");
    setAge("");
    alert("Player added successfully!");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 bg-white p-4 rounded shadow">
      <h3 className="font-semibold mb-2">Add Player</h3>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 mb-2 w-full"
        required
      />
      <input
        type="text"
        placeholder="Position"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        className="border p-2 mb-2 w-full"
        required
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        className="border p-2 mb-2 w-full"
        required
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Player
      </button>
    </form>
  );
};

// Sponsorship Form
const AddSponsorshipForm = () => {
  const [company, setCompany] = useState("");
  const [amount, setAmount] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ company, amount, details });
    setCompany("");
    setAmount("");
    setDetails("");
    alert("Sponsorship added successfully!");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 bg-white p-4 rounded shadow">
      <h3 className="font-semibold mb-2">Add Sponsorship</h3>
      <input
        type="text"
        placeholder="Company Name"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        className="border p-2 mb-2 w-full"
        required
      />
      <input
        type="number"
        placeholder="Amount (MWK)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border p-2 mb-2 w-full"
        required
      />
      <textarea
        placeholder="Details"
        value={details}
        onChange={(e) => setDetails(e.target.value)}
        className="border p-2 mb-2 w-full"
        required
      />
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
        Add Sponsorship
      </button>
    </form>
  );
};

// Financial Form
const AddFinancialRecordForm = () => {
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("Expense");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ item, amount, type });
    setItem("");
    setAmount("");
    setType("Expense");
    alert("Financial record added!");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 bg-white p-4 rounded shadow">
      <h3 className="font-semibold mb-2">Add Financial Record</h3>
      <input
        type="text"
        placeholder="Item"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        className="border p-2 mb-2 w-full"
        required
      />
      <input
        type="number"
        placeholder="Amount (MWK)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border p-2 mb-2 w-full"
        required
      />
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="border p-2 mb-2 w-full"
      >
        <option>Expense</option>
        <option>Income</option>
      </select>
      <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded">
        Add Record
      </button>
    </form>
  );
};

// Media Form
const AddMediaForm = () => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ title, url });
    setTitle("");
    setUrl("");
    alert("Media added successfully!");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 bg-white p-4 rounded shadow">
      <h3 className="font-semibold mb-2">Add Media</h3>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 mb-2 w-full"
        required
      />
      <input
        type="text"
        placeholder="Media URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="border p-2 mb-2 w-full"
        required
      />
      <button type="submit" className="bg-purple-500 text-white px-4 py-2 rounded">
        Add Media
      </button>
    </form>
  );
};

// Admin Page
const AdminPage = () => {
  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {/* Players Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Players</h2>
        <AddPlayerForm />
      </section>

      {/* Sponsorship Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Sponsorships</h2>
        <AddSponsorshipForm />
      </section>

      {/* Financials Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Financials</h2>
        <AddFinancialRecordForm />
      </section>

      {/* Media Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Marketing & Media</h2>
        <AddMediaForm />
      </section>
    </div>
  );
};

export default AdminPage;
