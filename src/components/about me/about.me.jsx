import { motion } from "framer-motion";
import "./about.css";
import { useNavigate } from "react-router-dom";
import DetailsCard from "./detail.card";
import AzureLogo from "../images/azure.svg";
import BootstrapLogo from "../images/bootstrap.svg";
import CssLogo from "../images/css.svg";
import HtmlLogo from "../images/html.svg";
import JavascriptLogo from "../images/logo-javascript.svg";
import JavaLogo from "../images/java-icon.svg";
import MongodbLogo from "../images/mongodb.svg";
import NodejsLogo from "../images/node.svg";
import ReactLogo from "../images/react.svg";
import illustration from "../images/illustration.svg";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export default function Aboutme() {
  let navigate = useNavigate();
  return (
    <motion.div initial={{ y: "100vw" }} animate={{ y: 0 }}>
      <div className="aboutContainer">
        <div>
          <section>
            <h1 className="skillTitle">My story</h1>
            <p className="myContent">
              <DetailsCard />
            </p>
          </section>
          <h2 className="skillTitle">My skillset</h2>
          <section className="logoContainer">
            <div className="logos">
              <motion.img
                whileTap={{ scale: 0.9 }}
                className="svgContainer"
                src={HtmlLogo}
                alt="html logo"
              />
              <motion.img
                whileTap={{ scale: 0.9 }}
                className="svgContainer"
                src={CssLogo}
                alt="css logo"
              />
              <motion.img
                whileTap={{ scale: 0.9 }}
                className="svgContainer"
                src={JavascriptLogo}
                alt="Kiwi standing on oval"
              />
              <motion.img
                whileTap={{ scale: 0.9 }}
                className="svgContainer"
                src={JavaLogo}
                alt="Java logo"
              />
              <motion.img
                whileTap={{ scale: 0.9 }}
                className="svgContainer"
                src={BootstrapLogo}
                alt="bootstrap logo"
              />
              <motion.img
                whileTap={{ scale: 0.9 }}
                className="svgContainer"
                src={AzureLogo}
                alt="azure logo"
              />
              <motion.img
                whileTap={{ scale: 0.9 }}
                className="svgContainer"
                src={MongodbLogo}
                alt="mongodb logo"
              />
              <motion.img
                whileTap={{ scale: 0.9 }}
                className="svgContainer"
                src={NodejsLogo}
                alt="nodejs logo"
              />
              <motion.img
                whileTap={{ scale: 0.9 }}
                className="svgContainer"
                src={ReactLogo}
                alt="react logo"
              />
            </div>
          </section>
        </div>
        <div>
          <motion.img
            whileTap={{ scale: 0.97 }}
            src={illustration}
            alt="illustration"
            width="890px"
            height="800px"
          />
        </div>
        <button className="aboutmeArrow" onClick={() => navigate("/projects")}>
          <ArrowDownwardIcon />
        </button>
      </div>
    </motion.div>
  );
}
