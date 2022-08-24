import "./intro.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Tooltip from "../../widgets/Tooltip/tooltip";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import HandWave from "../images/waving_hand.gif";
import kfLogo from "../images/kf-hor-black.svg";

export default function IntroPage() {
  let navigate = useNavigate();
  return (
    <motion.div
      className="introText"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 0.8 }}
      transition={{
        duration: 0.8,
        delay: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <div>
        <span onClick={() => console.log("HI")} className="textChange">
          Hello
        </span>
        <motion.span className="introContent">
          , My name is Sai Deepak You can call me Sai{" "}
          <img src={HandWave} alt="waving hand" width="100" />
          <br />I am currently working as a Front end developer at{" "}
          <Tooltip content={kfLogo}>Kissflow</Tooltip>
        </motion.span>
        <button className="introArrow" onClick={() => navigate("/aboutme")}>
          <ArrowDownwardIcon />
        </button>
      </div>
    </motion.div>
  );
}
