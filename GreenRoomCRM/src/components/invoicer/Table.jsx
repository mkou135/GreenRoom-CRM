import { useState } from "react";

const Table = () => {
  const [items, setItems] = useState([
    { id: 1, item: "", quantity: "", rate: "", amount: "" },
  ]);

  const handleItemChange = (id, field, value) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, [field]: value } : item
    );
    setItems(updatedItems);
  };

  const handleAddRow = () => {
    const newId = items.length + 1;
    setItems([
      ...items,
      { id: newId, item: "", quantity: "", rate: "", amount: "" },
    ]);
  };

  const handleRemoveRow = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <table className="table-fixed mt-5  rounded-t-lg ">
      <thead className="mb-5 bg-teal-500 text-white">
        <tr className="mb-5">
          <th className="w-1/2 px-4 py-1">Item</th>
          <th className="w-1/3 px-4 py-1">Quantity</th>
          <th className="w-1/3 px-4 py-1">Rate</th>
          <th className="w-1/3 px-4 py-1">Total</th>
        </tr>
      </thead>
      <tbody className="m-5">
        {items.map((item) => (
          <tr key={item.id} className="">
            <td className="col-span-2 pr-2 rounded-xl">
              <input
                className="w-full h-full bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 p-1"
                type="text"
                value={item.item}
                onChange={(e) =>
                  handleItemChange(item.id, "item", e.target.value)
                }
              />
            </td>
            <td className="p-2">
              <input
                className="w-full h-full bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 p-1"
                type="number"
                value={item.quantity}
                onChange={(e) =>
                  handleItemChange(item.id, "quantity", e.target.value)
                }
              />
            </td>
            <td className="p-2">
              <input
                className="w-full h-full bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 p-1"
                type="number"
                value={item.rate}
                onChange={(e) =>
                  handleItemChange(item.id, "rate", e.target.value)
                }
              />
            </td>
            <td className="pl-2">
              <input
                type="text"
                value={item.quantity * item.rate}
                disabled
                className="w-full h-full bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 p-1"
              />
            </td>
            <div className="flex justify-center">
              <button
                className="py-3 px-2 text-red-500 cursor-pointer"
                onClick={() => handleRemoveRow(item.id)}
              >
                X
              </button>
            </div>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="4" className="text-left py-2">
            <button
              className="border border-green-500 hover:bg-teal-400 hover:text-white text-sm text-teal-500 hover:opacity-500 font-bold px-4 py-2 rounded"
              onClick={handleAddRow}
            >
              + Add Line
            </button>
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default Table;
