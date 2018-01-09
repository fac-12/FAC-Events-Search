import React from "react";
import NavBar from "./navBar";
import Banner from "./banner";
import Footer from "./footer";
import EventCard from "./eventCard";
import EventsPreview from "../containers/EventsPreviews";

export default () => (
  <div>
    <navBar />
    <Banner />
    <EventsPreview />
    <Footer />
  </div>
);
