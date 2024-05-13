import { useState } from "react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import pb from "../../pocketbaseClient";

export default function UserDetails() {
  const [name, setName] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleUpdate = async () => {
    try {
      const data = {
        name: name, // Include the name value from the input field
      };

      const record = await pb.collection("test123").create(data);
      console.log("User details updated successfully:", record);

      // Clear the input field after successful update
      setName("");
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
            Your Name
          </Typography>
          <Input
            size="lg"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <Button className="mt-6" fullWidth onClick={handleUpdate}>
          Update
        </Button>
      </form>
      {/* <MainDetails name={name} /> */}
    </Card>
  );
}