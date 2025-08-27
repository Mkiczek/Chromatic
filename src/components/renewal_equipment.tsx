import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function RenewalAddEquipmentPrototype() {
  const [step, setStep] = useState(1);
  const [equipment, setEquipment] = useState([
    { type: "Truck", desc: "2021 Ford F-150", serial: "123ABC", value: "$50,000", status: "Active" },
    { type: "Generator", desc: "Diesel Backup", serial: "987XYZ", value: "$10,000", status: "Active" }
  ]);

  // Mock handler for saving equipment
  const addEquipment = () => {
    const newEquip = { type: "Excavator", desc: "CAT 320", serial: "555CAT", value: "$120,000", status: "New" };
    setEquipment([...equipment, newEquip]);
    setStep(3);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <header className="flex justify-between items-center border-b pb-4">
        <div>
          <h1 className="text-xl font-bold">Renewal Task: Add Equipment</h1>
          <p className="text-sm text-gray-500">Policy #12345 | ACME Corp | Jan 1, 2025 – Jan 1, 2026</p>
        </div>
        <div className="flex gap-2">
          <Button>Save Progress</Button>
          <Button variant="destructive">Cancel</Button>
          <Button>Mark Task Complete</Button>
        </div>
      </header>

      {/* Step 1: Equipment List */}
      {step === 1 && (
        <Card>
          <CardHeader>
            <CardTitle>Step 1: Equipment List</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between mb-3">
              <Input placeholder="Search equipment..." className="w-1/3" />
              <Button onClick={() => setStep(2)}>+ Add Equipment</Button>
            </div>
            <table className="w-full border text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-2 py-1 text-left">Type</th>
                  <th className="border px-2 py-1 text-left">Description</th>
                  <th className="border px-2 py-1 text-left">Serial #</th>
                  <th className="border px-2 py-1 text-left">Value</th>
                  <th className="border px-2 py-1 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {equipment.map((e, i) => (
                  <tr key={i}>
                    <td className="border px-2 py-1">{e.type}</td>
                    <td className="border px-2 py-1">{e.desc}</td>
                    <td className="border px-2 py-1">{e.serial}</td>
                    <td className="border px-2 py-1">{e.value}</td>
                    <td className={`border px-2 py-1 ${e.status === "New" ? "text-blue-600 font-semibold" : ""}`}>
                      {e.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      )}

      {/* Step 2: Add Equipment Form */}
      {step === 2 && (
        <Card>
          <CardHeader>
            <CardTitle>Step 2: Add Equipment Form</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Equipment Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="vehicle">Vehicle</SelectItem>
                <SelectItem value="machinery">Machinery</SelectItem>
                <SelectItem value="electronics">Electronics</SelectItem>
              </SelectContent>
            </Select>
            <Input placeholder="Description" />
            <Input placeholder="Make / Model" />
            <Input placeholder="Serial Number" />
            <Input placeholder="Year of Manufacture" />
            <Input placeholder="Location" />
            <Input placeholder="Insured Value ($)" />
            <Textarea placeholder="Coverage Options (e.g., Replacement Cost)" />
            <div className="flex gap-2">
              <Button onClick={addEquipment}>Save & Close</Button>
              <Button>Save & Add Another</Button>
              <Button variant="destructive" onClick={() => setStep(1)}>Cancel</Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Step 3: Updated List */}
      {step === 3 && (
        <Card>
          <CardHeader>
            <CardTitle>Step 3: Updated Equipment List</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-3 text-sm text-green-600">New equipment added successfully!</p>
            <table className="w-full border text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-2 py-1 text-left">Type</th>
                  <th className="border px-2 py-1 text-left">Description</th>
                  <th className="border px-2 py-1 text-left">Serial #</th>
                  <th className="border px-2 py-1 text-left">Value</th>
                  <th className="border px-2 py-1 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {equipment.map((e, i) => (
                  <tr key={i}>
                    <td className="border px-2 py-1">{e.type}</td>
                    <td className="border px-2 py-1">{e.desc}</td>
                    <td className="border px-2 py-1">{e.serial}</td>
                    <td className="border px-2 py-1">{e.value}</td>
                    <td className={`border px-2 py-1 ${e.status === "New" ? "text-blue-600 font-semibold" : ""}`}>
                      {e.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-end mt-3">
              <Button onClick={() => setStep(1)}>Done</Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Notes Section */}
      <Card>
        <CardHeader>
          <CardTitle>Underwriter Notes</CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea placeholder="Add notes or rationale here..." />
        </CardContent>
      </Card>
    </div>
  );
}
