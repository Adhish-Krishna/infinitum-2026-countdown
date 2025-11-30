import React from 'react';

const EventGallery: React.FC = () => {
  // Placeholder for event photos - user will add their images to assets/events folder
  const eventPhotos: string[] = [
    // Add your event photo imports here
    // Example: '/src/assets/events/event1.jpg',
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {eventPhotos.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventPhotos.map((photo, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl aspect-video bg-gradient-to-br from-neon-pink/20 to-neon-pink/5 border border-neon-pink/30 hover:border-neon-pink/60 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-neon-pink/30"
            >
              <img
                src={photo}
                alt={`Event ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-semibold">Event Photo {index + 1}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <div className="max-w-md mx-auto bg-gradient-to-br from-neon-pink/10 to-neon-pink/5 rounded-xl p-8 border border-neon-pink/30">
            <svg
              className="w-16 h-16 text-neon-pink mx-auto mb-4"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            <h3 className="text-xl font-bold text-white mb-2">No Photos Yet</h3>
            <p className="text-gray-400 mb-4">
              Add your event photos to the <code className="text-neon-pink">src/assets/events/</code> folder
            </p>
            <p className="text-sm text-gray-500">
              Then import them in <code className="text-neon-pink">EventGallery.tsx</code>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventGallery;
