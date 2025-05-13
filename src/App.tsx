import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NewEntry from './pages/NewEntry';

function App() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      padding: '1rem',
    }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<NewEntry />} />
      </Routes>
    </div>
  );
}

export default App;
