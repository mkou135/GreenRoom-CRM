import { useEffect, useState } from "react";
import pb from "../../pocketbaseClient";

export default function MainDetails() {
  const [name, setName] = useState("");

  useEffect(() => {
    fetchUserName();
  }, []);

  const fetchUserName = async () => {
    try {
      const records = await pb.collection("user_data").getFullList();
      if (records.length > 0) {
        const userData = records[0];
        setName(userData.name);
      }
    } catch (error) {
      console.error("Error fetching user name:", error);
    }
  };

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