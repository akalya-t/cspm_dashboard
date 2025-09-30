export default function SearchBar({ value, onChange }) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search widgets..."
      className="border border-gray-300 rounded px-3 py-2 w-64 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}
