export default function Footer() {
  return (
    <>
      <div className="flex justify-evenly">
        <div className="w-full mr-2.5">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            General Details
          </label>
          <input
            className="w-full mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1"
            type="text"
            placeholder="Email"
          />
          <input
            className="w-full mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1"
            type="text"
            placeholder="Phone Number"
          />
          <input
            className="w-full mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1"
            type="text"
            placeholder="Address"
          />
          <input
            className="w-full mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1"
            type="text"
            placeholder="ABN"
          />
        </div>
        <div className="w-full ml-2.5">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Account Details
          </label>

          <input
            className="w-full mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1"
            type="text"
            placeholder="Account Name"
          />
          <input
            className="w-full mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1"
            type="text"
            placeholder="Bank Name"
          />
          <input
            className="w-full mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1"
            type="text"
            placeholder="BSB"
          />
          <input
            className="w-full mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1"
            type="text"
            placeholder="Account Number"
          />
        </div>
      </div>
    </>
  );
}
