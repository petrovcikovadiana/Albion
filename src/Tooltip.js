import React, { useEffect, useRef, useState } from "react";

const Tooltip = ({ children, content }) => {
  const tooltipRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [tooltipSize, setTooltipSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const tooltip = tooltipRef.current;
      if (tooltip) {
        const rect = tooltip.getBoundingClientRect();
        setTooltipSize({ width: rect.width, height: rect.height });
      }

      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    if (visible) {
      window.addEventListener("mousemove", handleMouseMove);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [visible]);

  return (
    <div
      className="inline-block relative"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div
          ref={tooltipRef}
          className="fixed z-50 pointer-events-none bg-black/80 text-white text-sm px-3 py-2 rounded-lg shadow-lg border border-white/10"
          style={{
            top: position.y - tooltipSize.height - 12,
            left: position.x - tooltipSize.width / 2,
            whiteSpace: "pre-line",
            maxWidth: "250px",
          }}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
