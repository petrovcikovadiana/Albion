import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import MainContent from "./MainContent";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
