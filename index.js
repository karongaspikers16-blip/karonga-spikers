import { useState } from "react";
import { Button } from "@/components/ui/button";
import jsPDF from "jspdf";

// Example data
const players = [
  { name: "John Doe", position: "Setter", jersey: 5 },
  { name: "Jane Smith", position: "Spiker", jersey: 8 },
];
const expenses = [
  { category: "Travel", amount: 20000 },
  { category: "Equipment", amount: 15000 },
];
const schedule = [
  { event: "Match vs Blantyre", date: "2025-09-01" },
  { event: "Training", date: "2025-09-05" },
];

export default function Home() {
  const [view, setView] = useState("home");
  const logo = "/karonga-logo.png";

  const addFooter = (doc) => {
    doc.setFontSize(10);
    doc.text(
      "© 2025 Karonga Spikers - Internal App",
      doc.internal.pageSize.getWidth() / 2,
      doc.internal.pageSize.getHeight() - 10,
      { align: "center" }
    );
  };

  const exportPlayersPDF = () => {
    const doc = new jsPDF();
    doc.addImage(logo, "PNG", 10, 5, 30, 30);
    doc.text("Karonga Spikers - Players", 50, 20);
    players.forEach((p, i) => {
      doc.text(`${i + 1}. ${p.name} - ${p.position} - Jersey #${p.jersey}`, 10, 50 + i * 10);
    });
    addFooter(doc);
    doc.save("players.pdf");
  };

  const exportExpensesPDF = () => {
    const doc = new jsPDF();
    doc.addImage(logo, "PNG", 10, 5, 30, 30);
    doc.text("Karonga Spikers - Finance", 50, 20);
    expenses.forEach((e, i) => {
      doc.text(`${i + 1}. ${e.category}: MK ${e.amount.toLocaleString()}`, 10, 50 + i * 10);
    });
    addFooter(doc);
    doc.save("expenses.pdf");
  };

  const exportSchedulePDF = () => {
    const doc = new jsPDF();
    doc.addImage(logo, "PNG", 10, 5, 30, 30);
    doc.text("Karonga Spikers - Schedule", 50, 20);
    schedule.forEach((s, i) => {
      doc.text(`${i + 1}. ${s.event} - ${s.date}`, 10, 50 + i * 10);
    });
    addFooter(doc);
    doc.save("schedule.pdf");
  };

  return (
    <div className="p-4">
      <div className="flex items-center gap-3 mb-4">
        <img src={logo} alt="Karonga Spikers Logo" className="w-16 h-16" />
        <h1 className="text-xl font-bold">🏐 Karonga Spikers Internal App</h1>
      </div>

      <div className="flex flex-col gap-2">
        <Button onClick={exportPlayersPDF}>Export Players PDF</Button>
        <Button onClick={exportExpensesPDF}>Export Finance PDF</Button>
        <Button onClick={exportSchedulePDF}>Export Schedule PDF</Button>
      </div>
    </div>
  );
}

