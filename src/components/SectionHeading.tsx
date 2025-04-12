import React from "react";
import { SectionHeadingProps } from "@/lib/types";

function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-3xl font-medium capitalize mb-8 text-center">
      {children}
    </h2>
  );
}

export default SectionHeading;
