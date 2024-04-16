// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CharactersList from './components/CharactersList';
import CharacterDetails from './components/CharacterDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<CharactersList />} />
          <Route path="/character/:id" element={<CharacterDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
