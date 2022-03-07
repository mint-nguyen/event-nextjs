import EventList from "../components / events/event-list";
import EventSearch from "../components / events/event-search";
import { getFeaturedEvents } from "../dummy-data";
import { Fragment } from "react";

function HomePage() {
  const featuredEvent = getFeaturedEvents();

  return (
    <Fragment>
      <EventSearch />
      <EventList items={featuredEvent} />
    </Fragment>
  );
}

export default HomePage;
