import { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import pb from "../../pocketbaseClient";
import { BookingModal } from "./BookingModal";

export function EventCalendar() {
  const [events, setEvents] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchEvents();
  }, []);
  const fetchEvents = async () => {
    try {
      const records = await pb.collection("events").getFullList();
      const formattedEvents = records.map((record) => ({
        title: record.booking_name,
        start: record.event_date,
        end: record.event_date,
        extendedProps: {
          eventType: record.event_type,
          venue: record.venue,
          startTime: record.start_time,
          endTime: record.end_time,
        },
      }));
      setEvents(formattedEvents);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  const eventDataTransform = (eventData) => {
    // Modify the event data based on the event type
    switch (eventData.extendedProps.eventType) {
      case "Wedding":
        eventData.backgroundColor = "green";
        eventData.borderColor = "darkgreen";
        break;
      case "Corporate":
        eventData.backgroundColor = "blue";
        eventData.borderColor = "darkblue";
        break;
      case "Birthday":
        eventData.backgroundColor = "red";
        eventData.borderColor = "darkred";
        break;
      default:
        eventData.backgroundColor = "gray";
        eventData.borderColor = "darkgray";
    }
    return eventData;
  };

  // const renderEventContent = (eventInfo) => {
  //   return (
  //     <>
  //       <div>{eventInfo.timeText}</div>
  //       <div className="fc-event-title">{eventInfo.event.title}</div>
  //       <div>{eventInfo.event.extendedProps.eventType}</div>
  //       <div>{eventInfo.event.extendedProps.venue}</div>
  //       <div>
  //         {eventInfo.event.extendedProps.startTime} -{" "}
  //         {eventInfo.event.extendedProps.endTime}
  //       </div>
  //     </>
  //   );
  // };

  const handleEventClick = (info) => {
    setSelectedBooking(info.event);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedBooking(null);
    setIsModalOpen(false);
  };
  return (
    <div className="my-5">
      <h1 className="text-xl">Event Calendar</h1>
      <FullCalendar
        plugins={[dayGridPlugin, listPlugin]}
        initialView="dayGridMonth"
        weekends={true}
        events={events}
        eventDataTransform={eventDataTransform}
        eventContent={(info) => <div>{info.event.title}</div>}
        height={600}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,listWeek",
        }}
        eventClick={handleEventClick}
      />
      {selectedBooking && (
        <BookingModal
          open={isModalOpen}
          onClose={handleCloseModal}
          booking={selectedBooking}
        />
      )}
    </div>
  );
}
