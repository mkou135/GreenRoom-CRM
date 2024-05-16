/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Dialog, DialogHeader, DialogBody, DialogFooter, Button } from "@material-tailwind/react";

export function BookingModal({ open, onClose, booking }) {
  return (
    <Dialog open={open} handler={onClose}>
      <DialogHeader>{booking.title}</DialogHeader>
      <DialogBody divider>
        <div>
          <p><strong>Event Type:</strong> {booking.extendedProps.eventType}</p>
          <p><strong>Venue:</strong> {booking.extendedProps.venue}</p>
          <p><strong>Start Time:</strong> {booking.extendedProps.startTime}</p>
          <p><strong>End Time:</strong> {booking.extendedProps.endTime}</p>
        </div>
      </DialogBody>
      <DialogFooter>
        <Button onClick={onClose} variant="gradient">Close</Button>
      </DialogFooter>
    </Dialog>
  );
}