"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";

function Experience() {
  return (
    <section id="experience" className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: "#1F2937",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #000000",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: "black",
                color: "white",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize text-white">
                {item.title}
              </h3>
              <p className="font-normal !mt-0 text-white">{item.location}</p>
              <p className="!mt-1 !font-normal text-white">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}

export default Experience;

// theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
// theme === "light"
//                     ? "0.4rem solid #9ca3af"
//                     : "0.4rem solid rgba(255, 255, 255, 0.5)",
// theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
