import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import ToDoList from "./components/main/todolist/ToDoList";

function App() {
  return (
    <div className="App">
      <Header />
      <ToDoList />
      <Footer />
    </div>
  );
}

export default App;
