import "./App.css";
import Contact from "./Contact.jsx";
import Home from "./Home.jsx"; // Import Home component correctly
import SignUp from "./SignUp.jsx";
import Pricing from "./Pricing.jsx";
import Gallery from "./Gallery.jsx";
import Nav from "./Nav.jsx";
export default function App() {
  return (
    <main>
      <Nav />
      <SignUp />
      <Pricing />
      <Gallery />
    </main>
  );
}
