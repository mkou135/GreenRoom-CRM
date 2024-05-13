
export default function InvoiceNumber() {
  return (
    <div>
      <input
        className="mb-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
        type="text"
        placeholder="Enter Invoice Number"
      />
      <input
        className="mb-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
        type="text"
        placeholder="Due Date"
      />
    </div>
  );
}
