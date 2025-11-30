import { useState, useEffect } from 'react';
import './PhotoGallery.css';

const PhotoGallery = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const galleryElement = document.querySelector('.gallery-container');
    if (galleryElement) {
      observer.observe(galleryElement);
    }

    return () => {
      if (galleryElement) {
        observer.unobserve(galleryElement);
      }
    };
  }, []);

  // Placeholder for event photos - replace with actual image paths from assets folder
  const photos = [
    { id: 1, src: '/placeholder1.jpg', alt: 'Infinitum Event 2024 - 1' },
    { id: 2, src: '/placeholder2.jpg', alt: 'Infinitum Event 2024 - 2' },
    { id: 3, src: '/placeholder3.jpg', alt: 'Infinitum Event 2024 - 3' },
    { id: 4, src: '/placeholder4.jpg', alt: 'Infinitum Event 2024 - 4' },
    { id: 5, src: '/placeholder5.jpg', alt: 'Infinitum Event 2024 - 5' },
    { id: 6, src: '/placeholder6.jpg', alt: 'Infinitum Event 2024 - 6' },
  ];

  return (
    <div className={`gallery-container ${isVisible ? 'visible' : ''}`}>
      <h2 className="gallery-title">Past Event Highlights</h2>
      <div className="gallery-grid">
        {photos.map((photo, index) => (
          <div 
            key={photo.id} 
            className="gallery-item"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="gallery-image-wrapper">
              <img 
                src={photo.src} 
                alt={photo.alt}
                className="gallery-image"
                onError={(e) => {
                  // Fallback for missing images - creates colored placeholder
                  e.target.style.display = 'none';
                  e.target.parentElement.style.background = `linear-gradient(135deg, 
                    rgba(255, 30, 100, ${0.2 + (index * 0.1)}) 0%, 
                    rgba(255, 30, 100, ${0.1 + (index * 0.05)}) 100%)`;
                }}
              />
              <div className="gallery-overlay">
                <span className="gallery-year">Infinitum 2024</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
