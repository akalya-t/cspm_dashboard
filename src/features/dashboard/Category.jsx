import WidgetCard from "./WidgetCard";

export default function Category({ category, query }) {
  const q = query.toLowerCase();
  const visible = category.widgets.filter((w) =>
    w.name.toLowerCase().includes(q)
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {visible.length ? (
        visible.map((w) => (
          <WidgetCard key={w.id} widget={w} categoryId={category.id} />
        ))
      ) : (
        <p className="text-gray-500 italic">No widgets found.</p>
      )}
    </div>
  );
}
