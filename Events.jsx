import React from "react";
import event1 from "./events1.avif";
import event2 from "./events2.avif"; // Ensure the path and filename are correct
import event3 from "./events3.avif"; // Ensure the path and filename are correct
import event4 from "./evetns5.avif"; // Ensure the path and filename are correct

const EventGallery = () => {
    return (
        <div className="eventsmain">
            <h1 className="eventsheading">The Best Of Live Events</h1>
           <div className="classevent">
           <img src={event1} alt="Event 1"  className="events"/>
            <img src={event2} alt="Event 2"  className="events "/>
            <img src={event3} alt="Events 3"  className="events "/>
            <img src={event4} alt="Events 4"  className="lastevents "/>
           </div>
       
        </div>
    );
};

export default EventGallery;
