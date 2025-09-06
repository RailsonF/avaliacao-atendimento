//IMPORT DOS ESTILOS
import "./App.css";

//IMPORT DOS COMPONENTES
import Header from "./components/Header";
import FormularioAvaliacao from "./components/FormularioAvaliacao";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <div className="app-container">
      <Header />
      <FormularioAvaliacao />
      <Footer />
    </div>
    </>
  );
}

export default App;
