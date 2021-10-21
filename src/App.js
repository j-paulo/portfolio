import "./App.css";
import profileImg from "./img/53086678.jfif";

function App() {
  return (
    <div className="App">
      <h1>My React App</h1>
      <h2>Author: Joao Paulo Duprat</h2>

      <img src={profileImg} alt="profile-image" />
    </div>
  );
}

export default App;
