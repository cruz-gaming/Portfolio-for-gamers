import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import PageLayout from './components/layout/PageLayout';
import LoadingScreen from './components/ui/LoadingScreen';
import Home from './pages/Home';
import Videos from './pages/Videos';
import NotFound from './pages/NotFound';
import siteConfig from './config/siteConfig';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Synchronize document title and description from configuration
  useEffect(() => {
    document.title = siteConfig.seo.title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', siteConfig.seo.description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = siteConfig.seo.description;
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <ThemeProvider>
      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <Router>
          <PageLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/videos" element={<Videos />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </PageLayout>
        </Router>
      )}
    </ThemeProvider>
  );
}

export default App;
