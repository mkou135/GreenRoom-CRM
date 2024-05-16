import axios from 'axios';

export default function InvoicerButtons() {
  const handleDownload = async () => {
    try {
      // Collect the necessary invoice data from your components
      const invoiceData = {
        from: 'Your Company Name',
        to: 'Client Name',
        logo: 'https://example.com/img/logo-invoice.png',
        number: 1,
        date: 'Feb 9, 2015',
        due_date: 'Feb 16, 2015',
        items: [
          { name: 'Item 1', quantity: 1, unit_cost: 99 },
          // Add more items as needed
        ],
        notes: 'Thanks for being an awesome customer!',
        terms: 'Please pay by the due date.',
      };

      // Send a POST request to the Invoice Generator API
      const response = await axios.post('https://invoice-generator.com', invoiceData, {
        responseType: 'blob',
      });

      // Create a download link for the generated PDF
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'invoice.pdf');
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error('Error generating invoice:', error);
    }
  };

  return (
    <div className="">
      <button
        className="bg-teal-500 hover:bg-teal-400 text-white font-bold m-2 p-2 w-full rounded"
        onClick={handleDownload}
      >
        Download Invoice
      </button>
    </div>
  );
}