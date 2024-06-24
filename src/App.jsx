import Book from "./components/book/Book";
import "./App.css";
import Nav from "./components/navbar/Nav";

function App() {
  return (
    <div className="app-container">
      <Nav />
      <Book />
    </div>
  );
}

export default App;
