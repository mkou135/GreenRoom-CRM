import { useEffect, useState } from "react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import pb from "../../pocketbaseClient";

export default function UserDetails() {
  const [name, setName] = useState("");
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
      const userId = pb.authStore.model?.id; // Get the ID of the currently logged-in user
      if (!userId) {
        console.error("User not logged in");
        return;
      }

      const record = await pb
        .collection("user_data")
        .getFirstListItem(`user="${userId}"`);
      if (record) {
        setName(record.name);
        setEmail(record.email);
        setPhone(record.phone);
        setAddress(record.address);
        setAbn(record.abn);
        setBankName(record.bank_name);
        setAccountName(record.account_name);
        setBsb(record.bsb);
        setAccountNumber(record.account_number);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handleUpdate = async () => {
    try {
      const userId = pb.authStore.model?.id; // Get the ID of the currently logged-in user
      if (!userId) {
        console.error("User not logged in");
        return;
      }

      const data = {
        name: name,
        email: email,
        phone: phone,
        address: address,
        abn: abn,
        bank_name: bankName,
        account_name: accountName,
        bsb: bsb,
        account_number: accountNumber,
        user: userId, // Add the user ID to associate the data with the user
      };

      const existingRecord = await pb
        .collection("user_data")
        .getFirstListItem(`user="${userId}"`);
      if (existingRecord) {
        await pb.collection("user_data").update(existingRecord.id, data);
        console.log("User details updated successfully");
      } else {
        await pb.collection("user_data").create(data);
        console.log("User details created successfully");
      }
    } catch (error) {
      console.error("Error updating user details:", error);
    }
  };

  return (
    <Card className="mx-auto" color="transparent" shadow={false}>
      <form className="mt-8 mb-2 mx-auto w-full max-w-screen-lg">
        <Typography variant="h4" color="blue-gray">
          Your Details
        </Typography>
        <div className="flex justify-between">
          <div className="w-1/2 pr-4">
            <Typography variant="h6" color="blue-gray" className="mt-6 mb-2">
              Name
            </Typography>
            <Input
              size="lg"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <Typography variant="h6" color="blue-gray" className="mt-6 mb-2">
              Email
            </Typography>
            <Input
              size="lg"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Typography variant="h6" color="blue-gray" className="mt-6 mb-2">
              Phone Number
            </Typography>
            <Input
              size="lg"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <Typography variant="h6" color="blue-gray" className="mt-6 mb-2">
              Address
            </Typography>
            <Input
              size="lg"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />

            <Typography variant="h6" color="blue-gray" className="mt-6 mb-2">
              ABN
            </Typography>
            <Input
              size="lg"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              value={abn}
              onChange={(e) => setAbn(e.target.value)}
            />
          </div>

          <div className="w-1/2 pl-4">
            <Typography variant="h6" color="blue-gray" className="mt-6 mb-2">
              Bank Name
            </Typography>
            <Input
              size="lg"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              value={bankName}
              onChange={(e) => setBankName(e.target.value)}
            />

            <Typography variant="h6" color="blue-gray" className="mt-6 mb-2">
              Account Name
            </Typography>
            <Input
              size="lg"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              value={accountName}
              onChange={(e) => setAccountName(e.target.value)}
            />

            <Typography variant="h6" color="blue-gray" className="mt-6 mb-2">
              BSB
            </Typography>
            <Input
              size="lg"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              value={bsb}
              onChange={(e) => setBsb(e.target.value)}
            />

            <Typography variant="h6" color="blue-gray" className="mt-6 mb-2">
              Account Number
            </Typography>
            <Input
              size="lg"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
            />
          </div>
        </div>

        <Button className="mt-8 mx-auto w-1/2" fullWidth onClick={handleUpdate}>
          Update
        </Button>
      </form>
    </Card>
  );
}
