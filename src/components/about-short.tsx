"use client";

import { useState, useEffect } from "react";
import { GlobeIcon } from "lucide-react";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { Separator } from "./ui/separator";

const taglines = [
  [
    { text: "in", },
    { text: "a", },
    { text: "world", },
    { text: "of", },
    { text: "talkers,", },
    { text: "be", },
    { text: "a", },
    { text: "thinker", },
    { text: "and", },
    { text: "a", },
    { text: "doer", },
  ],
  [
    { text: "I", },
    { text: "broke", },
    { text: "prod", },
    { text: "on", },
    { text: "Christmas", },
    { text: "Eve", },
  ],
  [
    { text: "selectively", },
    { text: "dumb,", },
    { text: "overall", },
    { text: "smart", },
  ]
];

export const AboutShort = () => {
  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTaglineIndex((prevIndex) =>
        prevIndex === taglines.length - 1 ? 0 : prevIndex + 1
      );
    }, 3500);

    return () => clearInterval(interval);
  }, [currentTaglineIndex]);

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex flex-col gap-2">
        <div className="font-mono font-bold text-3xl">Andrei Voinea</div>
        <div className="font-mono">Full Stack Engineer</div>
        <div className="flex flex-row items-center gap-2 font-mono font-light text-sm">
          <GlobeIcon className="h-4 w-4" />
          Sibiu, Romania, GMT+2
        </div>
      </div>
      <div className="flex flex-col max-w-[60%]">
        <TypewriterEffect key={currentTaglineIndex} words={taglines[currentTaglineIndex]} className="font-mono font-light text-sm text-left overflow-auto" />
        <Separator />
      </div>
    </div>
  );
};
