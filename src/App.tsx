import { useEffect, useState } from 'react';
import { HomePage } from './pages/HomePage';
import { ResumePage } from './pages/ResumePage';
import { CareerPage } from './pages/CareerPage';
import { PortfolioPdfPage } from './pages/PortfolioPdfPage';
import { DeliverablesPage } from './pages/DeliverablesPage';
import { WorkPage } from './pages/WorkPage';
import { WorkCasePage } from './pages/WorkCasePage';
import { ProfilePage } from './pages/ProfilePage';
import { BrochurePage } from './pages/BrochurePage';

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

  if (path === '/portfolio-pdf') {
    return <PortfolioPdfPage />;
  }

  if (path === '/deliverables') {
    return <DeliverablesPage />;
  }

  if (path === '/work') {
    return <WorkPage />;
  }

  if (path === '/work/case') {
    return <WorkCasePage />;
  }

  if (path === '/work/deliverables') {
    return <DeliverablesPage backHref="/work" />;
  }

  if (path === '/profile') {
    return <ProfilePage />;
  }

  if (path === '/brochure') {
    return <BrochurePage />;
  }

  return (
    <main aria-label="sseul portfolio">
      <HomePage />
    </main>
  );
}

export default App;
