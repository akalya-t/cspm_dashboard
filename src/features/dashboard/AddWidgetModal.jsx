import { useState } from "react";
import { useDispatch } from "react-redux";
import { addWidget } from "./dashboardSlice";

export default function AddWidgetModal({
  categories,
  defaultCategoryId,
  onClose,
}) {
  const [name, setName] = useState("");
  const [type, setType] = useState("bar");
  const [labels, setLabels] = useState("");
  const [values, setValues] = useState("");
  const [categoryId, setCategoryId] = useState(defaultCategoryId);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const labelArr = labels.split(",").map((l) => l.trim());
    const valueArr = values.split(",").map((v) => Number(v.trim()));

    const data = {
      labels: labelArr,
      datasets: [
        {
          label: name,
          data: valueArr,
          backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56", "#4BC0C0"],
        },
      ],
    };

    const widget = { id: Date.now(), name, type, data };

    dispatch(addWidget({ categoryId: +categoryId, widget }));
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-96 space-y-4"
      >
        <h3 className="text-lg font-semibold text-gray-800">
          Add Chart Widget
        </h3>

        <input
          className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500"
          placeholder="Widget Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <select
          className="w-full border border-gray-300 rounded px-3 py-2"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="bar">Bar</option>
          <option value="line">Line</option>
          <option value="doughnut">Doughnut</option>
        </select>

        <input
          className="w-full border border-gray-300 rounded px-3 py-2"
          placeholder="Labels (comma separated)"
          value={labels}
          onChange={(e) => setLabels(e.target.value)}
        />

        <input
          className="w-full border border-gray-300 rounded px-3 py-2"
          placeholder="Values (comma separated)"
          value={values}
          onChange={(e) => setValues(e.target.value)}
        />

        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded border border-gray-300 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 shadow"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
