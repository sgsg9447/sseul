import { useEffect, useState } from 'react';
import { HomePage } from './pages/HomePage';
import { ResumePage } from './pages/ResumePage';
import { CareerPage } from './pages/CareerPage';

function normalize(pathname: string) {
  return pathname.replace(/\/+$/, '') || '/';
}

function App() {
  const [path, setPath] = useState(() => normalize(window.location.pathname));

  useEffect(() => {
    const onPopState = () => setPath(normalize(window.location.pathname));
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  if (path === '/resume') {
    return <ResumePage />;
  }

  if (path === '/career') {
    return <CareerPage />;
  }

  return (
    <main aria-label="sseul portfolio">
      <HomePage />
    </main>
  );
}

export default App;
