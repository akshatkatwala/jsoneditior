import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import JsonButton from './components/jsonbutton';
import CreateFileButton from './components/createfile';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to React</p>
        <JsonButton></JsonButton>
        <CreateFileButton></CreateFileButton>
      </header>
    </div>
  );
}

export default App;
