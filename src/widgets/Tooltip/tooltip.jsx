import { useState } from "react";
import { motion } from "framer-motion";
import "./tooltip.css";

export default function Tooltip(props) {
  let [visibility, setVisibility] = useState(false);

  function showToolTip() {
    setVisibility(true);
  }
  function hideToolTip() {
    setVisibility(false);
  }

  return (
    <motion.div
      className="tooltipContainer"
      onMouseEnter={showToolTip}
      onMouseLeave={hideToolTip}
    >
      {props.children}
      {visibility && (
        <img src={props.content} alt={props.content} className="tip top" />
      )}
    </motion.div>
  );
}
