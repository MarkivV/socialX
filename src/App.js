import {Navbar, Header, Features, Download, Subscribe, Faq, Footer} from "./components/index.js"
import "./App.css"
function App() {
  return (
    <main className="App">
        <header className="header-bg">
            <Navbar/>
            <Header/>
        </header>
        <Features data-aos="fade-up" />
        <Download />
        <Subscribe />
        <Faq />
        <Footer />
    </main>
  );
}

export default App;
