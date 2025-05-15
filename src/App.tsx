import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NewEntry from './pages/NewEntry';

function App() {
  const [entries, setEntries] = useState<{ title: string; content: string }[]>([]);

  return (
    <Routes>
      <Route path="/" element={<Home entries={entries} />} />
      <Route path="/new" element={<NewEntry setEntries={setEntries} />} />
    </Routes>
  );
}

export default App;
