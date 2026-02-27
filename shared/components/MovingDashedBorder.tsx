import { motion, type Transition } from "framer-motion";

interface MovingDashedBorderProps {
  top?: boolean;
  right?: boolean;
  bottom?: boolean;
  left?: boolean;
}

export function MovingDashedBorder({
  top = true,
  right = true,
  bottom = true,
  left = true,
}: MovingDashedBorderProps) {
  const transition: Transition = {
    duration: 1,
    repeat: Infinity,
    ease: "linear",
  };

  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden rounded-[3px]">
      <svg
        className="absolute inset-0 w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {top && (
          <motion.line
            x1="0"
            y1="0.5"
            x2="100%"
            y2="0.5"
            stroke="#353434da"
            strokeWidth="1"
            strokeDasharray="12 12"
            animate={{
              strokeDashoffset: [0, -24],
            }}
            transition={transition}
            style={{ vectorEffect: "non-scaling-stroke" }}
          />
        )}
        {right && (
          <motion.line
            x1="calc(100% - 0.5px)"
            y1="0"
            x2="calc(100% - 0.5px)"
            y2="100%"
            stroke="#353434da"
            strokeWidth="1"
            strokeDasharray="12 12"
            animate={{
              strokeDashoffset: [0, -24],
            }}
            transition={transition}
            style={{ vectorEffect: "non-scaling-stroke" }}
          />
        )}
        {bottom && (
          <motion.line
            x1="100%"
            y1="calc(100% - 0.5px)"
            x2="0"
            y2="calc(100% - 0.5px)"
            stroke="#353434da"
            strokeWidth="1"
            strokeDasharray="12 12"
            animate={{
              strokeDashoffset: [0, -24],
            }}
            transition={transition}
            style={{ vectorEffect: "non-scaling-stroke" }}
          />
        )}
        {left && (
          <motion.line
            x1="0.5"
            y1="100%"
            x2="0.5"
            y2="0"
            stroke="#353434da"
            strokeWidth="1"
            strokeDasharray="12 12"
            animate={{
              strokeDashoffset: [0, -24],
            }}
            transition={transition}
            style={{ vectorEffect: "non-scaling-stroke" }}
          />
        )}
      </svg>
    </div>
  );
}
