/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import pb from "../pocketbaseClient";
import Header from "../components/invoicer/Header";
import MainDetails from "../components/invoicer/MainDetails";
import Table from "../components/invoicer/Table";
import Notes from "../components/invoicer/Notes";
import Footer from "../components/invoicer/Footer";
import InvoiceNumber from "../components/invoicer/InvoiceNumber";
import ClientDetails from "../components/invoicer/ClientDetails";
import InvoicerButtons from "../components/invoicer/InvoicerButtons";

const Invoicer = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const records = await pb.collection("test123").getFullList();
        if (records.length > 0) {
          const latestRecord = records[records.length - 1];
          setName(latestRecord.name); // Set the name field from the latest record
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails();
  }, []);

  return (
    <>
      <main className="p-5 w-4/5 m-auto border shadow-xl">
        <div className="flex justify-between">
          <Header />
          <InvoicerButtons />
        </div>
        <div className="flex justify-between">
          <div className="w-1/2">
            <MainDetails name={name} /> {/* Pass the retrieved name as a prop */}
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