import "./Header.css";
import reactImg from "../../assets/react-core-concepts.png";

const reactDescriptions = ["Fundamentals", "Crucial", "Core"];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  let index = getRandomInt(2);
  let word = reactDescriptions[index];

  return (
    <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {word} React concepts you will need for almost any app you are
          going to build!
        </p>
    </header>
  );
}

export default Header;