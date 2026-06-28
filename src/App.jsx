import { Outlet } from 'react-router-dom';
import CursorGlow from './components/CursorGlow.jsx';
import Navbar from './components/Navbar.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-ink text-frost selection:bg-sky/30">
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <Outlet />
    </div>
  );
}
