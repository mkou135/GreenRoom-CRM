// eslint-disable-next-line react/prop-types
export default function MainDetails({ name }) {
  return (
    <div>
      <section className="flex flex-col items-end justify-end mt-2">
        <input
          className="w-full mb-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
          type="text"
          placeholder="Name"
          value={name}
          readOnly
        />
      </section>
    </div>
  );
}