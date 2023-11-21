import { FloatingWhatsApp } from "react-floating-whatsapp";
import { NavBar } from "./components/Navbar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Siklls";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import "./app.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <FloatingWhatsApp
        phoneNumber="+54 11 3789-0253"
        accountName="Martín Gabriel La Rosa"
        avatar="https://avatars.githubusercontent.com/u/82224898?v=4"
        statusMessage="En línea"
        chatMessage="¿Hola, como va todo?"
        placeholder="Escribe un mensaje"
      />
    </div>
  );
}

export default App;
