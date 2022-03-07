import { Fragment } from "react";
import EventList from "../../components / events/event-list";
import EventSearch from "../../components / events/event-search";
import { getAllEvents } from "../../dummy-data";
import { useRouter } from "next/router";

function Events() {

  const router = useRouter();
  const events = getAllEvents();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <Fragment>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
}

export default Events;
