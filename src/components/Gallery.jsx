import Images from './Images';
import { imageUrls } from '../utils/imageUrls';

export default function Gallery() {
  return (
    <section id='gallery' className="py-48 bg-blue-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {imageUrls.map((url, index) => (
            <Images key={index} src={url} alt={`Water pollution cleaning ${index + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}