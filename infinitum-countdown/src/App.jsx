import { useEffect, useRef } from 'react'
import InfinitumLogo from './components/InfinitumLogo'
import CountdownTimer from './components/CountdownTimer'
import PhotoGallery from './components/PhotoGallery'
import './App.css'

function App() {
  const contentSectionRef = useRef(null);

  // Set your event date here (format: 'YYYY-MM-DD' or full date string)
  const eventDate = '2026-01-15T00:00:00'; // Change this to your actual event date

  const scrollToContent = () => {
    contentSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    // Add initial page load animation
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      document.body.style.overflow = 'auto';
    }, 1500);
  }, []);

  return (
    <div className="app">
      {/* Hero Section with Logo */}
      <section className="hero-section">
        <InfinitumLogo />
        <h1 className="event-title">Inter-College Tech Fest</h1>
        <p className="event-tagline">Pushing Boundaries • Creating Possibilities</p>
        
        <div className="scroll-indicator" onClick={scrollToContent}>
          <span className="scroll-text">Scroll Down</span>
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* Content Section */}
      <section className="content-section" ref={contentSectionRef}>
        <CountdownTimer targetDate={eventDate} />
        <PhotoGallery />
      </section>
    </div>
  )
}

export default App
