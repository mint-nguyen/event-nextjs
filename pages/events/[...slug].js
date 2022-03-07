import { useRouter } from "next/router";
import { Fragment } from "react";
import EventList from "../../components / events/event-list";
import ResultsTitle from "../../components / events/results-title";
import Button from "../../components /ui/button";
import getFilteredEvents from "../../dummy-data";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

function FilteredEvent() {
  const router = useRouter();
  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear; //transform string to number
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth > 12 ||
    numMonth < 1
  ) {
    return (
      <Fragment className="center">
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          No Event Found!
        </Alert>
        <Button link="/events">Show All Events</Button>
      </Fragment>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment className="center">
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          No Event Found!
        </Alert>
        <Button link="/events">Show All Events</Button>
      </Fragment>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
}

export default FilteredEvent;
