import { useDispatch } from "react-redux";
import { removeWidget } from "./dashboardSlice";
import { Bar, Line, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
} from "chart.js";

// Register chart.js components
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement
);

export default function WidgetCard({ widget, categoryId }) {
  const dispatch = useDispatch();
  const handleRemove = () =>
    dispatch(removeWidget({ categoryId, widgetId: widget.id }));

  return (
    <div className="relative bg-white rounded-lg shadow hover:shadow-lg transition p-4">
      {/* Remove Button */}
      <button
        onClick={handleRemove}
        className="absolute top-2 right-2 text-gray-400 hover:text-red-600 transition"
      >
        ✕
      </button>

      {/* Title */}
      <h3 className="font-semibold text-gray-800 mb-2">{widget.name}</h3>

      {/* Chart */}
      <div className="h-48">
        {widget.type === "bar" && <Bar data={widget.data} />}
        {widget.type === "line" && <Line data={widget.data} />}
        {widget.type === "doughnut" && <Doughnut data={widget.data} />}
      </div>
    </div>
  );
}
