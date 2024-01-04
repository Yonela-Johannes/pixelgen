import React from "react";
import styled from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

const TextWrapper = ({ children }: Props) => {
  const text = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: text,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [1, 0.8, 0], [1, 1, 0]);
  const x = useTransform(scrollYProgress, [1, 0.4, 0], [0, 0, -1000]);
  const colorChange = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [
      "hsla(180, 7%, 75%, 0.9)",
      "hsla(180, 7%, 75%, 0.9)",
      "#FF9400",
      "#FF9400",
      "#FF9400",
      "#FF9400",
    ]
  );

  return (
    <div ref={text}>
      <motion.p className="font-rock" style={{ opacity, x, color: colorChange }}>{children}</motion.p>
    </div>
  );
};

function TextSection() {
  return (
    <div className="flex flex-col items-center h-full justify-end w-full lg:w-full xl:w-[50%] p-8 md:p-0 mt-10">
      <div className=" flex flex-col md:text-4xl items-center gap-12">
        <TextWrapper>
          Photography
        </TextWrapper>
        <TextWrapper>
          Videography
        </TextWrapper>
        <TextWrapper>
          Album art cover
        </TextWrapper>
        <TextWrapper>
          Poster/Flyer
        </TextWrapper>
        <TextWrapper>
          Logo design
        </TextWrapper>
        <TextWrapper>
          Cartoon
        </TextWrapper>
      </div>
    </div>
  );
}

export default TextSection;
