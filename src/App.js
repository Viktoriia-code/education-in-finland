import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from '.pages/Home'

function App() {
  return (
    <Router>
    <Header />
      <Route path="/" element={<Home />} />
    </Router>
  );
}

export default App;
