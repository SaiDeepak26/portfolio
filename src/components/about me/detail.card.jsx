import collegeLogo from "../images/eec-logo-finalized.png";
import schoolLogo from "../images/pta.png";
import companyLogo from "../images/companylogo.svg";
import { motion } from "framer-motion";
import "./about.css";

export default function DetailsCard() {
  const storyDetails = [
    {
      logo: companyLogo,
      name: "Kissflow",
      designation: "Associate software Engineer",
      year: "2022 and it continues...",
    },
    {
      logo: collegeLogo,
      name: "Easwari engineering college",
      designation: "B. E. Electrical and Electronics Engineer",
      year: "2018 - 2022",
    },
    {
      logo: schoolLogo,
      name: "Loyola matriculation higher secondary school",
      designation: "School education",
      year: "2004 - 2018",
    },
  ];
  return (
    <>
      {storyDetails.map((item) => (
        <motion.div whileTap={{ scale: 0.98 }} className="cardContainer">
          <div>
            <img className="storyLogo" src={item.logo} alt={item.name} />
          </div>
          <div className="details">
            <b>{item.name}</b>
            <br />
            <span>{item.designation}</span>
          </div>
          <div className="yearContainer">{item.year}</div>
        </motion.div>
      ))}
    </>
  );
}
