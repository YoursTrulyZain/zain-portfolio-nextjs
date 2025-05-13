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
                background: theme === "light" ? "#93c5fd4D" : "#27272aE6",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                border: "1px solid rgba(0, 0, 0, 0.1)",
                textAlign: "left",
                padding: "1.3rem 2rem",
                transition: "all 0.1s ease-in-out",
                backdropFilter: "blur(24px) saturate(1.5)",
                WebkitBackdropFilter: "blur(24px) saturate(1.5)",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #bfdbfe"
                    : "0.4rem solid #27272aE6",
              }}
              date={item.date}
              style={{
                color: theme === "light" ? "black" : "white",
              }}
              icon={item.icon}
              iconStyle={{
                background: theme === "light" ? "#bfdbfe" : "#27272a",
                color: theme === "light" ? "black" : "white",
                boxShadow: "none",
                border: "3px solid #00BFFF",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize text-black dark:text-white">
                {item.title}
              </h3>
              <p className="font-normal !mt-0 text-black dark:text-white">
                {item.location}
              </p>
              <p className="!mt-1 !font-normal text-black dark:text-white">
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

// bg-blue-300/30 backdrop-blur-xl backdrop-saturate-150
//            border border-black/10 shadow-2xl
