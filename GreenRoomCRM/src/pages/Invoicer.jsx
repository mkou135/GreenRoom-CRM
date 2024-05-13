import Header from "../components/invoicer/Header";
import MainDetails from "../components/invoicer/MainDetails";
import Table from "../components/invoicer/Table";
import Notes from "../components/invoicer/Notes";
import Footer from "../components/invoicer/Footer";
import InvoiceNumber from "../components/invoicer/InvoiceNumber";
import ClientDetails from "../components/invoicer/ClientDetails";
import "./Invoicer.css";
import InvoicerButtons2 from "../components/invoicer/InvoicerButtons2";

const Invoicer = () => {
  return (
    <>
      <main className="p-5 w-4/5 m-auto border shadow-xl">
        <div className="flex justify-between">
          <Header />
          <InvoicerButtons2 />
        </div>
        <div className="flex justify-between">
          <div className="w-1/2">
            <MainDetails />
            <ClientDetails />
          </div>
          <InvoiceNumber />
        </div>

        <Table />
        <Notes />
        <Footer />
      </main>
    </>
  );
};

export default Invoicer;
