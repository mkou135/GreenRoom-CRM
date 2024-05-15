import { EventCalendar } from "../components/events/EventCalendar";
import { AddEvent } from "../components/events/AddEvent";
export default function Events() {
  return (
    <>
    <div className="w-1/2 mx-auto">
      <AddEvent />
      <EventCalendar />
    </div>
    </>
  );
}
