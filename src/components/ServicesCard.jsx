export default function ServicesCard({ image, title, description }) {
    return (
      <div className="bg-white hover:scale-105 duration-200 cursor-pointer rounded-lg overflow-hidden shadow-md">
        <img src={image} alt={title} className="w-full h-64 object-cover" />
        <div className="p-4">
          <h3 className="font-bold text-lg mb-2">{title}</h3>
          <p className="text-gray-700 text-sm">{description}</p>
        </div>
      </div>
    );
  }