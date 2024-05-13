
export default function InvoicerButtons() {
  const handlePrint = () => {
    window.print();
  };

  const handleDropdownChange = (e) => {
    const option = e.target.value;
    switch (option) {
      case 'print':
        handlePrint();
        break;
      case 'download':
        // Handle download logic
        break;
      case 'send':
        // Handle send logic
        break;
      default:
        break;
    }
  };

  return (
    <div className="">
      <select
        className="bg-teal-500 hover:bg-teal-400 text-white font-bold m-2 p-2 w-full rounded"
        onChange={handleDropdownChange}
      >

        <option value="print">Print</option>
        <option value="download">Download</option>
        <option value="send">Send</option>
      </select>
    </div>
  );
}
