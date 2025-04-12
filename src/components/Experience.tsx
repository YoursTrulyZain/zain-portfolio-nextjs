"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/ThemeContextProvider";

function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();
  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" ? "#000000" : "rgba(255, 255, 255)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #000000"
                    : "0.4rem solid rgba(255, 255, 255)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light" ? "black" : "white",
                color: theme === "light" ? "white" : "black",
                boxShadow: "none",
                border: "3px solid #00BFFF",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize text-white dark:text-black">{item.title}</h3>
              <p className="font-normal !mt-0 text-white dark:text-black">{item.location}</p>
              <p className="!mt-1 !font-normal text-white dark:text-black">
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
