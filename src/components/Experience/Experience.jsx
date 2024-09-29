
import timelineElements from "./TimelineElement"; // Ensure you have this file for additional experience
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Experience() {
  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };

  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Career Timeline</h1>

      <VerticalTimeline>
        {/* Existing LTI Experience */}
       

        {/* Additional experience from timelineElements */}
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";
          let showButton = element.buttonText;

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="text-sm"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              // icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
            >
              <h3 className="text-2xl font-bold">{element.title}</h3>
              <h5 className="text-xl">{element.location}</h5>
              <p className="text-md">{element.description}</p>
              {showButton && (
                <a
                  className={`button ${
                    isWorkIcon ? "workButton" : "schoolButton"
                  }`}
                  href={element.link}
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}
