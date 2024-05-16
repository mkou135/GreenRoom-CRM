import React from "react";
import { useState } from "react";
import pb from "../../pocketbaseClient";
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Select,
  Option,
} from "@material-tailwind/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function AddEvent() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const [eventDate, setEventDate] = useState(null);
  const [bookingName, setBookingName] = useState("");
  const [eventType, setEventType] = useState("");
  const [venue, setVenue] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  const handleUpdate = async () => {
    try {
      const userId = pb.authStore.model?.id; // Get the ID of the currently logged-in user
      if (!userId) {
        console.error("User not logged in");
        return;
      }

      const data = {
        event_date: eventDate ? eventDate.toISOString().split("T")[0] : "",
        booking_name: bookingName,
        event_type: eventType,
        venue: venue,
        start_time: startTime ? startTime.toISOString() : "",
        end_time: endTime ? endTime.toISOString() : "",
        user: userId, // Add the user ID to associate the event with the user
      };
      const record = await pb.collection("events").create(data);
      console.log("Event details added successfully:", record);
      setEventDate(null);
      setBookingName("");
      setEventType("");
      setVenue("");
      setStartTime(null);
      setEndTime(null);
    } catch (error) {
      console.error("Error adding event details:", error);
    }
  };

  return (
    <>
      <Button onClick={handleOpen} className="mt-5">New Event</Button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
              New Event
            </Typography>
            <Typography className="-mb-2" variant="h6">
              Event Date
            </Typography>
            <DatePicker
              selected={eventDate}
              onChange={(date) => setEventDate(date)}
              dateFormat="yyyy-MM-dd"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Typography className="-mb-2" variant="h6">
              Booking Name
            </Typography>
            <Input
              label=""
              size="lg"
              value={bookingName}
              onChange={(e) => setBookingName(e.target.value)}
            />
            <Typography className="-mb-2" variant="h6">
              Event Type
            </Typography>
            <Select
              label="Select Event Type"
              value={eventType}
              onChange={(value) => setEventType(value)}
            >
              <Option value="Wedding">Wedding</Option>
              <Option value="Corporate">Corporate</Option>
              <Option value="Birthday">Birthday</Option>
              <Option value="Other">Other</Option>
            </Select>
            <Typography className="-mb-2" variant="h6">
              Venue
            </Typography>
            <Input
              label=""
              size="lg"
              value={venue}
              onChange={(e) => setVenue(e.target.value)}
            />
            <Typography className="-mb-2" variant="h6">
              Start Time
            </Typography>
            <DatePicker
              selected={startTime}
              onChange={(date) => setStartTime(date)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption="Time"
              dateFormat="h:mm aa"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Typography className="-mb-2" variant="h6">
              End Time
            </Typography>
            <DatePicker
              selected={endTime}
              onChange={(date) => setEndTime(date)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption="Time"
              dateFormat="h:mm aa"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              variant="gradient"
              onClick={() => {
                handleUpdate();
                handleOpen();
              }}
              fullWidth
            >
              Add Event
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}