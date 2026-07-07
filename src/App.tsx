import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AfterPartyPage } from './pages/AfterPartyPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/afterparty" element={<AfterPartyPage />} />
    </Routes>
  );
}

export default App;
