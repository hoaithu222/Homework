import "./App.css";
import Button from "./components/Button";
import Footer from "./components/Footer/Footer";
import Form_Contact from "./components/Form_Contact/Form_Contact";
import Header from "./components/Header/Header";
import Section_eight from "./components/Section_eight/Section_eight";
import Section_five from "./components/Section_five/Section_five";
import Section_four from "./components/Section_four/Section_four";
import Section_one from "./components/Section_one/Section_one";
import Section_six from "./components/Section_six/Section_six";
import Section_three from "./components/Section_three/Section_three";
import Section_two from "./components/Section_two/Section_two";

function App() {
  return (
    <>
      <Header />
      <Section_one />
      <Section_two />
      <Section_three />
      <Section_four />
      <Section_five />
      <Section_six />
      <Section_eight />
      <Form_Contact />
      <Footer />
      <Button />
    </>
  );
}

export default App;
