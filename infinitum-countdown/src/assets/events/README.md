# Add Your Event Photos Here

Place your past event photos in this folder.

Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`

Then import them in `src/components/EventGallery.tsx`:

```tsx
import event1 from '../assets/events/event1.jpg';
import event2 from '../assets/events/event2.jpg';
// ... add more imports

const eventPhotos: string[] = [
  event1,
  event2,
  // ... add more photos
];
```
