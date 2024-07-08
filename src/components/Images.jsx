export default function Images({ src, alt }) {
    return (
      <div className="rounded-lg overflow-hidden shadow-md hover:scale-105 duration-200 cursor-pointer h-72">
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </div>
    );
  }