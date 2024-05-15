import { useEffect, useState } from "react";
import pb from "../../pocketbaseClient";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [abn, setAbn] = useState("");
  const [bankName, setBankName] = useState("");
  const [accountName, setAccountName] = useState("");
  const [bsb, setBsb] = useState("");
  const [accountNumber, setAccountNumber] = useState("");

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const records = await pb.collection("user_data").getFullList();
      if (records.length > 0) {
        const userData = records[0];
        setEmail(userData.email);
        setPhone(userData.phone);
        setAddress(userData.address);
        setAbn(userData.abn);
        setBankName(userData.bank_name);
        setAccountName(userData.account_name);
        setBsb(userData.bsb);
        setAccountNumber(userData.account_number);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

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
            value={email}
            readOnly
          />
          <input
            className="w-full mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1"
            type="text"
            placeholder="Phone Number"
            value={phone}
            readOnly
          />
          <input
            className="w-full mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1"
            type="text"
            placeholder="Address"
            value={address}
            readOnly
          />
          <input
            className="w-full mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1"
            type="text"
            placeholder="ABN"
            value={abn}
            readOnly
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
            value={accountName}
            readOnly
          />
          <input
            className="w-full mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1"
            type="text"
            placeholder="Bank Name"
            value={bankName}
            readOnly
          />
          <input
            className="w-full mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1"
            type="text"
            placeholder="BSB"
            value={bsb}
            readOnly
          />
          <input
            className="w-full mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1"
            type="text"
            placeholder="Account Number"
            value={accountNumber}
            readOnly
          />
        </div>
      </div>
    </>
  );
}