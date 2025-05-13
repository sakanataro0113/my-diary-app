import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NewEntry from './pages/NewEntry';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<NewEntry />} />
    </Routes>
  );
}

export default App;
