import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/home';
import Header from './components/Header';


function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/dashboard" exact = {true} element={<Dashboard/>} />
      <Route path="/" exact = {true} element={<Dashboard/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;