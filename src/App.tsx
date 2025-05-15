import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NewEntry from './pages/NewEntry';

function App() {
  const [entries, setEntries] = useState<{ title: string; content: string }[]>([]);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: '100vh',
      padding: '2rem'
    }}>
      <Routes>
        <Route path="/" element={<Home entries={entries} />} />
        <Route path="/new" element={<NewEntry setEntries={setEntries} />} />
      </Routes>
    </div>
  );
}

export default App;
