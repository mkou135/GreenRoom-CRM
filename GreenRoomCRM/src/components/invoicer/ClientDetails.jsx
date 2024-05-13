export default function ClientDetails() {
  return (
    <div>
      <section className="">
        <label className="block mb-2 text-sm font-medium text-gray-900">
          Bill to:
        </label>
        <input
          className="w-full mb-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
          type="text"
          placeholder="Client Name"
        />
      </section>
    </div>
  );
}
