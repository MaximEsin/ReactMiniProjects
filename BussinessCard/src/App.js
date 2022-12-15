import "./styles/normalize.css";
import styles from "./styles/App.module.scss";
import Head from "./components/Head";
import Main from "./components/Main";
import Article from "./components/Article";
import Footer from "./components/Footer";

function App() {
  const About_Title = "About";
  const About__Text =
    "I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.";
  const Interests__Title = "Interests";
  const Interests__Text =
    "Food lover, Reader, Orthodox christian, Gamer, Sober living man.";
  return (
    <section className={styles.App__head}>
      <Head />
      <section className={styles.App__body}>
        <Main />
        <Article Title={About_Title} Text={About__Text} />
        <Article Title={Interests__Title} Text={Interests__Text} />
      </section>
      <Footer />
    </section>
  );
}

export default App;
