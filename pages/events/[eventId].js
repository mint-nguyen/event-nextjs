import { useRouter } from "next/router";
import { Fragment } from "react";
import EventContent from "../../components /event-detail/event-detail";
import EventLogistics from "../../components /event-detail/event-logistics";
import EventSummary from "../../components /event-detail/event-summary";
import { getEventById } from "../../dummy-data";

function EventDetail() {

  const router = useRouter();
  const eventId = router.query.eventId;

  getEventById(eventId);

  const event = getEventById(eventId);

  if (!event) {
    return <p>No event found!</p>;
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export default EventDetail;
