import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AnimatedCursor() {
  const cursorColor = "#3B82F6";
  const cursorGlow = "rgba(59,130,246,.6)";

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);
  const [click, setClick] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const down = () => setClick(true);
    const up = () => setClick(false);

    const enter = (e) => {
      if (e.target.closest("button, a, input, textarea, .cursor-hover")) {
        setHover(true);
      } else {
        setHover(false);
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mousemove", enter);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousemove", enter);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, []);

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        animate={{
          x: position.x,
          y: position.y,
          scale: hover ? 2 : click ? 0.8 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 180,
          damping: 18,
        }}
        style={{
          position: "fixed",
          left: -20,
          top: -20,
          width: 40,
          height: 40,
          borderRadius: "50%",
        //   border: "2px solid #3B82F6",
        //   boxShadow: "0 0 20px rgba(59,130,246,.5)",
        border: `2px solid ${cursorColor}`,
boxShadow: `0 0 20px ${cursorGlow}`,
          pointerEvents: "none",
          zIndex: 9999,
        }}
      />

      {/* Inner Dot */}
      <motion.div
        animate={{
          x: position.x,
          y: position.y,
          scale: click ? 0.7 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 600,
          damping: 35,
        }}
        style={{
          position: "fixed",
          left: -5,
          top: -5,
          width: 10,
          height: 10,
          borderRadius: "50%",
        //   background: "#3B82F6",
        //   boxShadow: "0 0 15px  rgba(59,130,246,.9)",
        background: cursorColor,
boxShadow: `0 0 15px ${cursorGlow}`,
          pointerEvents: "none",
          zIndex: 10000,
        }}
      />
    </>
  );
}

