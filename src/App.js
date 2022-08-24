import { useEffect, useState } from "react";
import "./App.css";
import IntroPage from "./components/introduction/intro.page";
import Aboutme from "./components/about me/about.me";
import Projects from "./components/projects/projects";
import Topnav from "./components/topbar/topnav";
import { motion } from "framer-motion";
import InitialLoadAnimation from "./components/InitialLoad/initial.loading";
import { Routes, Route } from "react-router-dom";

export default function App() {
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    let randomTime = Math.floor(Math.random() * (2000 - 900 + 1) + 900);
    setTimeout(() => setInitialLoad(false), randomTime);
  }, []);
  return (
    <>
      {initialLoad ? (
        <motion.div
          className="App"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <InitialLoadAnimation />
        </motion.div>
      ) : (
        <>
          <Topnav />
          <Routes>
            <Route path="/" exact={true} element={<IntroPage />} />
            <Route path="aboutme" exact={true} element={<Aboutme />} />
            <Route path="projects" exact={true} element={<Projects />} />
          </Routes>
        </>
      )}
    </>
  );
}
