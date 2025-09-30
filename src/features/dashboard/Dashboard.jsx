import React, { useState } from "react";
import { useSelector } from "react-redux";
import Category from "./Category";
import SearchBar from "./SearchBar";
import AddWidgetModal from "./AddWidgetModal";

export default function Dashboard() {
  const categories = useSelector((s) => s.dashboard.categories);
  const [activeCategoryId, setActiveCategoryId] = useState(categories[0]?.id);
  const [query, setQuery] = useState("");
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Page Title */}
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Dashboard Assignment
      </h1>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-gray-300 mb-6">
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => setActiveCategoryId(c.id)}
            className={`px-4 py-2 text-sm font-medium rounded-t-md transition-colors ${
              c.id === activeCategoryId
                ? "bg-white text-blue-600 border border-b-0 border-gray-300"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {c.name}
          </button>
        ))}
      </div>

      {/* Search + Add */}
      <div className="flex justify-between items-center mb-6">
        <SearchBar value={query} onChange={setQuery} />
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow font-medium transition"
        >
          + Add Widget
        </button>
      </div>

      {/* Active Category */}
      <div>
        {categories.map((c) =>
          c.id === activeCategoryId ? (
            <Category key={c.id} category={c} query={query} />
          ) : null
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <AddWidgetModal
          categories={categories}
          defaultCategoryId={activeCategoryId}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}
