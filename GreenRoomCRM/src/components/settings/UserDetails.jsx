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
      const records = await pb.collection("user_data").getFullList();
      if (records.length > 0) {
        const userData = records[0];
        setName(userData.name);
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

  const handleUpdate = async () => {
    try {
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
      };
      const records = await pb.collection("user_data").getFullList();
      if (records.length > 0) {
        const recordId = records[0].id;
        await pb.collection("user_data").update(recordId, data);
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
      <form className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h4" color="blue-gray">
            Your Details
          </Typography>

          <Typography variant="h6" color="blue-gray" className="-mb-3">
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

          <Typography variant="h6" color="blue-gray" className="-mb-3">
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

          <Typography variant="h6" color="blue-gray" className="-mb-3">
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

          <Typography variant="h6" color="blue-gray" className="-mb-3">
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

          <Typography variant="h6" color="blue-gray" className="-mb-3">
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

          <Typography variant="h6" color="blue-gray" className="-mb-3">
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

          <Typography variant="h6" color="blue-gray" className="-mb-3">
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

          <Typography variant="h6" color="blue-gray" className="-mb-3">
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

          <Typography variant="h6" color="blue-gray" className="-mb-3">
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

        <Button className="mt-6" fullWidth onClick={handleUpdate}>
          Update
        </Button>
      </form>
    </Card>
  );
}