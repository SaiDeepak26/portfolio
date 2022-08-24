import { motion } from "framer-motion";
import ImageSlider from "./image.slider";
import anime from "../images/anime.png";
import dictionary from "../images/dictionary.png";
import geeklib from "../images/geeklib.png";
import ipapi from "../images/ipapi.png";
import jsonbin from "../images/jsonbin.png";
import "./carousel.css";

export default function Projects() {
  const SliderData = [
    {
      image: anime,
      title: "The anime database",
      content:
        "REST API for MyAnimeList.net Created a search operation of anime database by fetching data from Jikan api 😎 Jikan is a REST API for MyAnimeList.net. It scrapes the website to satisfy the need for an API. Languages used 👨‍💻 -> HTML, CSS, Javascript",
      link: "https://github.com/Saideepak01/the_anime_database",
    },
    {
      image: ipapi,
      title: "IP address lookup",
      content:
        "Created a IP Address lookup using ipapi.co API 👾 It gives us the details of the IP address we have and locate its region using google maps API 🗺️ with the latitude and longitude found using ipapi, we can also search for the desired IP address using the search functionality implemented in the webapp 🔍. Languages used 👨‍💻 -> HTML, CSS, Javascript, Bootstrap",
      link: "https://github.com/Saideepak01/IP_address_lookup",
    },
    {
      image: dictionary,
      title: "Dictionary",
      content:
        "Created a Dictionary webpage using dictionaryapi.dev📖 which gives us the result of the word with meaning, origin, phonetic and all.🤩 Languages used 👨‍💻 -> HTML, CSS, Javascript, Bootstrap",
      link: "https://github.com/Saideepak01/Dictionary",
    },
    {
      image: jsonbin,
      title: "JSON Bin",
      content:
        "Created a JSON bin to store json structured data with the help of jsonbin.io API ☁️. The users can store json data, they will receive a url and a unique ID after successful upload of their data, with the url provided we can make use of that in other dev environments. With the provided unique ID the users can make a search and edit the json data or even delete it from the cloud. 😎 NOTE: JSON data size limited to 500KB Languages used 👨‍💻 -> HTML, CSS, Javascript, Bootstrap",
      link: "https://github.com/Saideepak01/JSON-bin",
    },
    {
      image: geeklib,
      title: "GeekLib",
      content:
        "GeekLib a Library management system to facilitate and manage entries of the library books, it is basically a CRUD application where we can view the books, add a new book, edit a existing book and delete a existing book 📚. Technologies used 🧑‍💻 Frontend -> HTML, CSS, Vanilla Javascript Backend -> Node JS, Express JS, Mongo DB",
      link: "https://github.com/Saideepak01/GeekLib-frontend",
    },
  ];
  return (
    <motion.div initial={{ y: "100vw" }} animate={{ y: 0 }}>
      <ImageSlider slides={SliderData} />
    </motion.div>
  );
}
