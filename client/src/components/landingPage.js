import React from "react";
import NavBar from "./navBar";
import Banner from "./banner";
import Footer from "./footer";
import EventsPreview from "../containers/EventsPreviews";

export default () => (
  <div>
    <NavBar />
    <Banner />
    <EventsPreview />
    <Footer />
  </div>
);
