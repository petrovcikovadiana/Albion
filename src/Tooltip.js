import React, { useRef, useState } from "react";

const Tooltip = ({ children, content }) => {
  const tooltipRef = useRef(null);
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="inline-block relative group "
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div
          ref={tooltipRef}
          className="absolute z-[9999] pointer-events-none bg-black/80 text-white text-sm px-3 py-2 rounded-lg shadow-lg border border-white/10 whitespace-nowrap "
          style={{
            top: 0,
            left: "50%",
            transform: "translate(-50%, -100%)",
          }}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
